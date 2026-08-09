export function Logo({ language = "en" }: { language?: "en" | "ne" }) {
  return (
    <div className="brand" aria-label={language === "ne" ? "पोषण स्पष्टता" : "Nutrition Clarity"}>
      <span className="brand-mark" aria-hidden="true">
        <i className="leaf leaf-one" />
        <i className="leaf leaf-two" />
        <i className="brand-dot" />
      </span>
      <span className="brand-type">
        <strong>{language === "ne" ? "पोषण" : "Nutrition"}</strong>
        <small>{language === "ne" ? "स्पष्टता" : "Clarity"}</small>
      </span>
    </div>
  );
}
