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

    if (!name) next.name = "कृपया आफ्नो पूरा नाम लेख्नुहोस्।";
    if (!email) next.email = "कृपया सक्रिय इमेल ठेगाना लेख्नुहोस्।";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "कृपया मान्य इमेल ठेगाना लेख्नुहोस्।";
    if (!whatsapp) next.whatsapp = "कृपया आफ्नो WhatsApp नम्बर लेख्नुहोस्।";
    else if (!/^[+\d][\d\s()-]{6,}$/.test(whatsapp)) next.whatsapp = "कृपया मान्य WhatsApp नम्बर लेख्नुहोस्।";
    if (!business) next.business = "कृपया आफ्नो व्यवसायको नाम लेख्नुहोस्।";
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
        <span>निःशुल्क परामर्श</span>
        <h3>आफ्नो व्यवसायबारे केही जानकारी दिनुहोस्</h3>
        <p>फारम भर्नुहोस्, त्यसपछि हामी तपाईंलाई सम्पर्क गर्नेछौँ।</p>
      </div>

      <div className="form-grid">
        <FormField label="पूरा नाम" name="name" placeholder="आफ्नो पूरा नाम लेख्नुहोस्" error={errors.name} />
        <FormField label="सक्रिय इमेल" name="email" type="email" placeholder="आफ्नो सक्रिय इमेल लेख्नुहोस्" error={errors.email} />
        <FormField label="WhatsApp नम्बर" name="whatsapp" type="tel" placeholder="आफ्नो WhatsApp नम्बर लेख्नुहोस्" error={errors.whatsapp} />
        <FormField label="व्यवसायको नाम" name="business" placeholder="आफ्नो व्यवसायको नाम लेख्नुहोस्" error={errors.business} />
        <FormField label="वेबसाइट वा Facebook URL" name="website" type="url" placeholder="वेबसाइट वा Facebook पेजको URL लेख्नुहोस्" optional />
        <label className="field field-full">
          <span>तपाईं अरू केही भन्न चाहनुहुन्छ? <small>ऐच्छिक</small></span>
          <textarea name="message" placeholder="आफ्नो व्यवसाय, ग्राहक वा हालको चुनौतीबारे बताउनुहोस्" rows={4} />
        </label>
      </div>

      <button className="button button-primary form-button" disabled={submitting} type="submit">
        {submitting ? "तपाईंको अनुरोध पठाइँदैछ…" : "निःशुल्क परामर्श बुक गर्नुहोस्"}
        {!submitting && <span aria-hidden="true">→</span>}
      </button>
      <p className="trust-line"><span aria-hidden="true">◆</span> हामी तपाईंको गोपनीयताको सम्मान गर्छौँ। कुनै स्प्याम छैन।</p>
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
      <span>{label} {optional && <small>ऐच्छिक</small>}</span>
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
