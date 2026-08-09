"use client";

import { useEffect, useRef, useState } from "react";

const FORM_ID = "6a7865bcf6a3ec722d645de6";
const ROOT_SELECTOR = `.ff-${FORM_ID}`;

type FlodeskWindow = Window & {
  FlodeskObject?: string;
  fd?: ((...args: unknown[]) => void) & { q?: unknown[][] };
};

export function FlodeskForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let redirectTimer: number | undefined;
    let observer: MutationObserver | undefined;

    async function mountForm() {
      try {
        const response = await fetch("/flodesk-embed.html");
        if (!response.ok) throw new Error("Unable to load Flodesk form");

        const source = await response.text();
        if (cancelled || !mountRef.current) return;

        const documentFragment = new DOMParser().parseFromString(source, "text/html");
        documentFragment.querySelectorAll("script").forEach((script) => script.remove());

        const config = documentFragment.querySelector<HTMLElement>("[data-ff-el='config']");
        if (config?.dataset.ffConfig) {
          const decoded = JSON.parse(atob(config.dataset.ffConfig));
          decoded.onSuccess = { ...decoded.onSuccess, mode: "message", redirectUrl: "" };
          config.dataset.ffConfig = btoa(JSON.stringify(decoded));
        }

        mountRef.current.replaceChildren(
          ...Array.from(documentFragment.head.children).map((node) => node.cloneNode(true)),
          ...Array.from(documentFragment.body.children).map((node) => node.cloneNode(true)),
        );

        const root = mountRef.current.querySelector<HTMLElement>(ROOT_SELECTOR);
        if (!root) throw new Error("Flodesk root was not found");

        observer = new MutationObserver(() => {
          if (root.dataset.ffStage === "success" && !redirectTimer) {
            redirectTimer = window.setTimeout(() => window.location.assign("/thanks"), 1200);
          }
        });
        observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });

        const flodeskWindow = window as FlodeskWindow;
        flodeskWindow.FlodeskObject = "fd";
        const queuedHandler = function (...args: unknown[]) {
          const handler = queuedHandler as FlodeskWindow["fd"];
          (handler!.q = handler!.q || []).push(args);
        } as FlodeskWindow["fd"];
        flodeskWindow.fd = flodeskWindow.fd || queuedHandler;

        const initialize = () => {
          flodeskWindow.fd?.("form:handle", {
            formId: FORM_ID,
            rootEl: ROOT_SELECTOR,
          });
        };

        const version = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;
        const moduleScript = document.createElement("script");
        moduleScript.async = true;
        moduleScript.type = "module";
        moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
        moduleScript.addEventListener("load", initialize, { once: true });
        document.head.appendChild(moduleScript);

        const fallbackScript = document.createElement("script");
        fallbackScript.async = true;
        fallbackScript.noModule = true;
        fallbackScript.src = `https://assets.flodesk.com/universal.js${version}`;
        fallbackScript.addEventListener("load", initialize, { once: true });
        document.head.appendChild(fallbackScript);
      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    mountForm();

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="consultation-form flodesk-card">
      <div className="form-heading">
        <span>Free consultation</span>
        <h3>Tell us a little about your business</h3>
        <p>Complete the form and we’ll take it from there.</p>
      </div>
      <div className="flodesk-shell" ref={mountRef} aria-live="polite">
        {!loadError && <p className="flodesk-loading">Loading secure booking form…</p>}
      </div>
      {loadError && (
        <p className="flodesk-error" role="alert">
          The booking form could not load. Please refresh this page and try again.
        </p>
      )}
      <p className="trust-line"><span aria-hidden="true">◆</span> Securely submitted through Flodesk.</p>
    </div>
  );
}
