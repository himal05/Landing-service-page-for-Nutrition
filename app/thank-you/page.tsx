import type { Metadata } from "next";
import { Logo } from "../../components/Logo";

export const metadata: Metadata = {
  title: "Thank You | Nutrition Clarity",
  description: "Your free nutrition consultation request has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <header className="site-header"><Logo /></header>
      <section className="thank-you-hero section-shell">
        <div className="success-mark" aria-hidden="true">✓</div>
        <div className="section-kicker">Request received</div>
        <h1>Thank You! Your Request Has Been Received</h1>
        <p>You’re one step closer to getting clear nutrition and supplement guidance.</p>
      </section>

      <section className="ebook-card section-shell" aria-labelledby="ebook-title">
        <div className="ebook-cover" aria-hidden="true">
          <span>Free practical guide</span>
          <strong>Nutrition &amp;<br />Supplement<br />Clarity</strong>
          <small>Healthy eating · Fitness · Healthy aging</small>
        </div>
        <div className="ebook-copy">
          <div className="section-kicker">Your free ebook</div>
          <h2 id="ebook-title">Start making clearer nutrition decisions today.</h2>
          <p>
            Download this practical 10-page guide to meal building, fitness nutrition,
            healthy aging, and safer supplement choices.
          </p>
          <a className="button ebook-button" href="/ebook.pdf" download>
            Download Your Free Ebook <span aria-hidden="true">↓</span>
          </a>
          <small>PDF · 10 pages · Free download</small>
        </div>
      </section>

      <section className="next-steps section-shell" aria-labelledby="video-title">
        <div className="video-copy">
          <div className="section-kicker">Before you leave</div>
          <h2 id="video-title">Watch This Short Video</h2>
          <p>Please watch the video below. It will help you understand:</p>
          <ul>
            <li>What to expect from your consultation</li>
            <li>How our nutrition guidance works</li>
            <li>How we can help with healthy eating and fitness nutrition</li>
            <li>How we approach dietary supplement information</li>
            <li>How to prepare for your one-to-one consultation</li>
          </ul>
        </div>
        <div className="video-area">
          <video className="consultation-video" controls preload="metadata" playsInline>
            <source src="/nutrition-consultation-video.mp4" type="video/mp4" />
            Your browser does not support the video player.
          </video>
          <a
            className="shared-video-link"
            href="https://chatgpt.com/s/m_6a806789899c819186c0c62d41ce9400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the shared video link <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="whatsapp-card section-shell" aria-labelledby="whatsapp-title">
        <div>
          <div className="section-kicker light-kicker">Have a question?</div>
          <h2 id="whatsapp-title">Message me directly on WhatsApp.</h2>
          <p>
            Ask about your nutrition goals, healthy eating, fitness nutrition,
            dietary supplements, or your upcoming consultation.
          </p>
        </div>
        <a
          className="whatsapp-button"
          href="https://wa.me/9779841618597?text=Hello%2C%20I%20just%20submitted%20the%20free%20nutrition%20consultation%20form.%20I%20would%20like%20to%20know%20more%20about%20the%20consultation%20and%20nutrition%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          Message Me on WhatsApp <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="prepare-card section-shell">
        <div>
          <div className="section-kicker light-kicker">See you in the consultation</div>
          <h2>Keep your main questions ready.</h2>
        </div>
        <p>
          Please watch the video above and keep your main nutrition, supplement,
          or business questions ready for our one-to-one discussion.
        </p>
      </section>
    </main>
  );
}
