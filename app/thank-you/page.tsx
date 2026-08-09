import type { Metadata } from "next";
import { Logo } from "../../components/Logo";

export const metadata: Metadata = {
  title: "धन्यवाद | पोषण स्पष्टता",
  description: "तपाईंको निःशुल्क पोषण परामर्श अनुरोध प्राप्त भएको छ।",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <header className="site-header"><Logo /></header>
      <section className="thank-you-hero section-shell">
        <div className="success-mark" aria-hidden="true">✓</div>
        <div className="section-kicker">अनुरोध प्राप्त भयो</div>
        <h1>धन्यवाद! तपाईंको अनुरोध प्राप्त भएको छ</h1>
        <p>अब तपाईं स्पष्ट पोषण तथा सप्लिमेन्ट मार्गदर्शन पाउने दिशामा एक कदम नजिक हुनुहुन्छ।</p>
      </section>

      <section className="next-steps section-shell" aria-labelledby="video-title">
        <div className="video-copy">
          <div className="section-kicker">जानुअघि</div>
          <h2 id="video-title">यो छोटो भिडियो हेर्नुहोस्</h2>
          <p>कृपया तलको भिडियो हेर्नुहोस्। यसले तपाईंलाई यी कुरा बुझ्न मद्दत गर्नेछ:</p>
          <ul>
            <li>परामर्शमा के अपेक्षा गर्ने</li>
            <li>हाम्रो पोषण मार्गदर्शनले कसरी काम गर्छ</li>
            <li>स्वस्थ खानपान र फिटनेस पोषणमा हामीले कसरी मद्दत गर्छौँ</li>
            <li>डाइटरी सप्लिमेन्टसम्बन्धी जानकारीलाई हामी कसरी प्रस्तुत गर्छौँ</li>
            <li>व्यक्तिगत परामर्शका लागि कसरी तयारी गर्ने</li>
          </ul>
        </div>
        <div className="video-placeholder" role="img" aria-label="परामर्श परिचय भिडियो राख्ने स्थान">
          <span className="play-button" aria-hidden="true">▶</span>
          <p>तपाईंको परामर्शसम्बन्धी भिडियो यहाँ देखिनेछ</p>
        </div>
      </section>

      <section className="prepare-card section-shell">
        <div>
          <div className="section-kicker light-kicker">परामर्शमा भेटौँला</div>
          <h2>आफ्ना मुख्य प्रश्न तयार राख्नुहोस्।</h2>
        </div>
        <p>
          माथिको भिडियो हेर्नुहोस् र व्यक्तिगत छलफलका लागि पोषण,
          सप्लिमेन्ट वा व्यवसायसम्बन्धी आफ्ना मुख्य प्रश्न तयार राख्नुहोस्।
        </p>
      </section>
    </main>
  );
}
