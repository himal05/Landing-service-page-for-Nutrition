"use client";

import { FormEvent, useState } from "react";

type FormFields = "name" | "email" | "whatsapp" | "business";
type Errors = Partial<Record<FormFields, string>>;

export function CTAForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(form: FormData) {
    const next: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const whatsapp = String(form.get("whatsapp") || "").trim();
    const business = String(form.get("business") || "").trim();

    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your active email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!whatsapp) next.whatsapp = "Please enter your WhatsApp number.";
    else if (!/^[+\d][\d\s()-]{6,}$/.test(whatsapp)) next.whatsapp = "Please enter a valid WhatsApp number.";
    if (!business) next.business = "Please enter your business name.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(new FormData(event.currentTarget));
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    window.setTimeout(() => {
      window.location.assign("/thank-you");
    }, 650);
  }

  return (
    <form className="consultation-form" noValidate onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Free consultation</span>
        <h3>Tell us a little about your business</h3>
        <p>Complete the form and we’ll take it from there.</p>
      </div>

      <div className="form-grid">
        <FormField label="Full Name" name="name" placeholder="Enter your full name" error={errors.name} />
        <FormField label="Active Email" name="email" type="email" placeholder="Enter your active email" error={errors.email} />
        <FormField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="Enter your WhatsApp number" error={errors.whatsapp} />
        <FormField label="Business Name" name="business" placeholder="Enter your business name" error={errors.business} />
        <FormField label="Website or Facebook URL" name="website" type="url" placeholder="Enter your website or Facebook page URL" optional />
        <label className="field field-full">
          <span>Anything You Want to Say <small>Optional</small></span>
          <textarea name="message" placeholder="Tell us about your business, clients, or current challenge" rows={4} />
        </label>
      </div>

      <button className="button button-primary form-button" disabled={submitting} type="submit">
        {submitting ? "Sending your request…" : "Book Free Consultation"}
        {!submitting && <span aria-hidden="true">→</span>}
      </button>
      <p className="trust-line"><span aria-hidden="true">◆</span> We respect your privacy. No spam.</p>
    </form>
  );
}

function FormField({ label, name, placeholder, type = "text", error, optional = false }: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <label className="field">
      <span>{label} {optional && <small>Optional</small>}</span>
      <input
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error && <em className="field-error" id={`${name}-error`}>{error}</em>}
    </label>
  );
}
