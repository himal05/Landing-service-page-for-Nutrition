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
        <div className="video-placeholder" role="img" aria-label="Consultation introduction video placeholder">
          <span className="play-button" aria-hidden="true">▶</span>
          <p>Your consultation video will appear here</p>
        </div>
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
