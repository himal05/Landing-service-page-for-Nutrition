"use client";

import { FormEvent, useState } from "react";

type FormFields = "name" | "email" | "whatsapp" | "business";
type Errors = Partial<Record<FormFields, string>>;
type Language = "en" | "ne";

const copy = {
  en: {
    eyebrow: "Free consultation",
    heading: "Tell us a little about your business",
    intro: "Complete the form and we’ll take it from there.",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    email: "Active Email",
    emailPlaceholder: "Enter your active email",
    whatsapp: "WhatsApp Number",
    whatsappPlaceholder: "Enter your WhatsApp number",
    business: "Business Name",
    businessPlaceholder: "Enter your business name",
    website: "Website or Facebook URL",
    websitePlaceholder: "Enter your website or Facebook page URL",
    message: "Anything You Want to Say",
    messagePlaceholder: "Tell us about your business, clients, or current challenge",
    optional: "Optional",
    submit: "Book Free Consultation",
    submitting: "Sending your request…",
    privacy: "We respect your privacy. No spam.",
    nameRequired: "Please enter your full name.",
    emailRequired: "Please enter your active email.",
    emailInvalid: "Please enter a valid email address.",
    whatsappRequired: "Please enter your WhatsApp number.",
    whatsappInvalid: "Please enter a valid WhatsApp number.",
    businessRequired: "Please enter your business name.",
  },
  ne: {
    eyebrow: "निःशुल्क परामर्श",
    heading: "आफ्नो व्यवसायबारे केही जानकारी दिनुहोस्",
    intro: "फारम भर्नुहोस्, त्यसपछि हामी तपाईंलाई सम्पर्क गर्नेछौँ।",
    name: "पूरा नाम",
    namePlaceholder: "आफ्नो पूरा नाम लेख्नुहोस्",
    email: "सक्रिय इमेल",
    emailPlaceholder: "आफ्नो सक्रिय इमेल लेख्नुहोस्",
    whatsapp: "WhatsApp नम्बर",
    whatsappPlaceholder: "आफ्नो WhatsApp नम्बर लेख्नुहोस्",
    business: "व्यवसायको नाम",
    businessPlaceholder: "आफ्नो व्यवसायको नाम लेख्नुहोस्",
    website: "वेबसाइट वा Facebook URL",
    websitePlaceholder: "वेबसाइट वा Facebook पेजको URL लेख्नुहोस्",
    message: "तपाईं अरू केही भन्न चाहनुहुन्छ?",
    messagePlaceholder: "आफ्नो व्यवसाय, ग्राहक वा हालको चुनौतीबारे बताउनुहोस्",
    optional: "ऐच्छिक",
    submit: "निःशुल्क परामर्श बुक गर्नुहोस्",
    submitting: "तपाईंको अनुरोध पठाइँदैछ…",
    privacy: "हामी तपाईंको गोपनीयताको सम्मान गर्छौँ। कुनै स्प्याम छैन।",
    nameRequired: "कृपया आफ्नो पूरा नाम लेख्नुहोस्।",
    emailRequired: "कृपया सक्रिय इमेल ठेगाना लेख्नुहोस्।",
    emailInvalid: "कृपया मान्य इमेल ठेगाना लेख्नुहोस्।",
    whatsappRequired: "कृपया आफ्नो WhatsApp नम्बर लेख्नुहोस्।",
    whatsappInvalid: "कृपया मान्य WhatsApp नम्बर लेख्नुहोस्।",
    businessRequired: "कृपया आफ्नो व्यवसायको नाम लेख्नुहोस्।",
  },
};

export function CTAForm({ language = "en" }: { language?: Language }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const text = copy[language];

  function validate(form: FormData) {
    const next: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const whatsapp = String(form.get("whatsapp") || "").trim();
    const business = String(form.get("business") || "").trim();

    if (!name) next.name = text.nameRequired;
    if (!email) next.email = text.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = text.emailInvalid;
    if (!whatsapp) next.whatsapp = text.whatsappRequired;
    else if (!/^[+\d][\d\s()-]{6,}$/.test(whatsapp)) next.whatsapp = text.whatsappInvalid;
    if (!business) next.business = text.businessRequired;
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(new FormData(event.currentTarget));
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    window.setTimeout(() => {
      window.location.assign(language === "ne" ? "/ne/thank-you" : "/thank-you");
    }, 650);
  }

  return (
    <form className="consultation-form" noValidate onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>{text.eyebrow}</span>
        <h3>{text.heading}</h3>
        <p>{text.intro}</p>
      </div>

      <div className="form-grid">
        <FormField label={text.name} name="name" placeholder={text.namePlaceholder} error={errors.name} optionalText={text.optional} />
        <FormField label={text.email} name="email" type="email" placeholder={text.emailPlaceholder} error={errors.email} optionalText={text.optional} />
        <FormField label={text.whatsapp} name="whatsapp" type="tel" placeholder={text.whatsappPlaceholder} error={errors.whatsapp} optionalText={text.optional} />
        <FormField label={text.business} name="business" placeholder={text.businessPlaceholder} error={errors.business} optionalText={text.optional} />
        <FormField label={text.website} name="website" type="url" placeholder={text.websitePlaceholder} optional optionalText={text.optional} />
        <label className="field field-full">
          <span>{text.message} <small>{text.optional}</small></span>
          <textarea name="message" placeholder={text.messagePlaceholder} rows={4} />
        </label>
      </div>

      <button className="button button-primary form-button" disabled={submitting} type="submit">
        {submitting ? text.submitting : text.submit}
        {!submitting && <span aria-hidden="true">→</span>}
      </button>
      <p className="trust-line"><span aria-hidden="true">◆</span> {text.privacy}</p>
    </form>
  );
}

function FormField({ label, name, placeholder, type = "text", error, optional = false, optionalText }: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  optional?: boolean;
  optionalText: string;
}) {
  return (
    <label className="field">
      <span>{label} {optional && <small>{optionalText}</small>}</span>
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
