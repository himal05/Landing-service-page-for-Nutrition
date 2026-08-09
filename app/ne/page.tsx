import type { Metadata } from "next";
import { CTAForm } from "../../components/CTAForm";
import { Header } from "../../components/Header";

export const metadata: Metadata = {
  title: "निःशुल्क पोषण तथा सप्लिमेन्ट परामर्श",
  description: "पोषण सेवा, सप्लिमेन्टसम्बन्धी सुझाव र व्यवसाय वृद्धिका लागि स्पष्ट तथा व्यक्तिगत मार्गदर्शन पाउनुहोस्।",
  alternates: { canonical: "/ne", languages: { en: "/", ne: "/ne" } },
};

const benefits = [
  "तपाईंका ग्राहकका लागि कस्तो पोषण तथा सप्लिमेन्ट मार्गदर्शन उपयुक्त हुन्छ भन्ने बुझ्नुहोस्",
  "अहिलेको पोषण वा सप्लिमेन्टसम्बन्धी योजनामा रहेका कमी पहिचान गर्नुहोस्",
  "व्यवसायका लागि व्यावहारिक अगिल्ला कदमहरू पाउनुहोस्",
  "पोषण र सप्लिमेन्टबारे छलफल गर्दा आफ्नो आत्मविश्वास बढाउनुहोस्",
  "सेवा र सप्लिमेन्ट बिक्री बढाउँदै ग्राहकलाई राम्रो सहयोग गर्ने तरिका सिक्नुहोस्",
];

const steps = [
  { title: "आफ्नो व्यवसायबारे बताउनुहोस्", body: "तपाईंका ग्राहक को हुन् र अहिले कस्ता चुनौती छन् भन्ने जानकारी दिनुहोस्।" },
  { title: "व्यक्तिगत छलफल गर्नुहोस्", body: "पोषण, सप्लिमेन्ट र तपाईंको हालको व्यावसायिक योजनाबारे छलफल गर्नुहोस्।" },
  { title: "आवश्यकताअनुसार रणनीति पाउनुहोस्", body: "पोषण तथा सप्लिमेन्ट व्यवसायका लागि व्यावहारिक अगिल्ला कदमहरू लिएर जानुहोस्।" },
];

export default function NepaliHome() {
  return (
    <main>
      <Header language="ne" />
      <section className="hero section-shell" aria-labelledby="ne-hero-title">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="eyebrow"><span /> निःशुल्क व्यक्तिगत परामर्श</div>
        <h1 id="ne-hero-title">पोषण तथा सप्लिमेन्टबारे स्पष्ट मार्गदर्शन पाउनुहोस्<span>ग्राहकलाई अझ राम्रो सेवा दिनुहोस् र व्यवसाय बढाउनुहोस्</span></h1>
        <p className="hero-subheadline">तपाईंका ग्राहक र व्यवसायका लागि उपयुक्त पोषण मार्गदर्शन, सप्लिमेन्ट सहयोग र व्यावहारिक रणनीति बुझ्न निःशुल्क परामर्श बुक गर्नुहोस्।</p>
        <a className="button button-primary" href="#ne-book-consultation">निःशुल्क परामर्श बुक गर्नुहोस् <span aria-hidden="true">→</span></a>
        <p className="hero-note">व्यक्तिगत मार्गदर्शन। व्यावहारिक अगिल्ला कदम। कुनै बाध्यता छैन।</p>
        <div className="audience-card" aria-label="यो परामर्श कसका लागि हो">
          <p>यो परामर्श विशेष गरी</p>
          <div><span>जिम सञ्चालक</span><span>फिटनेस प्रशिक्षक</span><span>सप्लिमेन्ट विक्रेता</span><span>स्वास्थ्य व्यवसाय</span></div>
        </div>
      </section>

      <section className="intro-section section-shell" aria-labelledby="ne-clarity-title">
        <div className="section-kicker">अगाडि बढ्ने स्पष्ट बाटो</div>
        <div className="intro-grid">
          <h2 id="ne-clarity-title">पोषणसम्बन्धी प्रश्नलाई <em>आत्मविश्वासी कदममा बदल्नुहोस्।</em></h2>
          <div><p>पोषण सेवा, सप्लिमेन्टसम्बन्धी सुझाव र व्यवसाय वृद्धिका लागि स्पष्ट तथा व्यक्तिगत मार्गदर्शन पाउनुहोस्।</p><p>छलफल तपाईंको व्यवसाय, ग्राहक र हालको आवश्यकताअनुसार हुन्छ—ताकि हरेक सुझाव व्यावहारिक र उपयोगी होस्।</p></div>
        </div>
      </section>

      <section className="benefits-section" aria-labelledby="ne-benefits-title">
        <div className="section-shell">
          <div className="section-heading centered-heading"><div className="section-kicker">तपाईंका लक्ष्यमा केन्द्रित</div><h2 id="ne-benefits-title">यस परामर्शबाट तपाईंले पाउने फाइदा</h2><p>ग्राहकलाई सहयोग गर्न र व्यवसाय बलियो बनाउन केन्द्रित मार्गदर्शन।</p></div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => <article className={index === 4 ? "benefit-card benefit-card-wide" : "benefit-card"} key={benefit}><span className="check" aria-hidden="true">✓</span><p>{benefit}</p></article>)}
          </div>
        </div>
      </section>

      <section className="process-section section-shell" aria-labelledby="ne-process-title">
        <div className="section-heading centered-heading"><div className="section-kicker">सरल र केन्द्रित</div><h2 id="ne-process-title">परामर्शको प्रक्रिया</h2><p>हालको चुनौतीदेखि व्यावहारिक रणनीतिसम्मका तीन स्पष्ट चरण।</p></div>
        <div className="process-grid">
          {steps.map((step, index) => <article className="process-card" key={step.title}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}
        </div>
      </section>

      <section className="booking-section" id="ne-book-consultation" aria-labelledby="ne-booking-title">
        <div className="section-shell booking-grid">
          <div className="booking-copy">
            <div className="section-kicker light-kicker">परामर्श बुक गर्नुहोस्</div>
            <h2 id="ne-booking-title">आफ्नो अर्को पोषणसम्बन्धी निर्णय स्पष्टताका साथ लिनुहोस्।</h2>
            <p>तपाईंको व्यवसाय, ग्राहक र हालको आवश्यकतामा आधारित केन्द्रित व्यक्तिगत छलफल पाउनुहोस्।</p>
            <div className="booking-points">
              <div><span aria-hidden="true">01</span><p><strong>व्यक्तिगत परामर्श</strong> तपाईंको हालको अवस्थाअनुसार केन्द्रित छलफल।</p></div>
              <div><span aria-hidden="true">02</span><p><strong>आवश्यकताअनुसार रणनीति</strong> पोषण मार्गदर्शन, सप्लिमेन्ट सहयोग र व्यवसाय वृद्धिका लागि स्पष्ट दिशा।</p></div>
            </div>
          </div>
          <CTAForm language="ne" />
        </div>
      </section>
    </main>
  );
}
