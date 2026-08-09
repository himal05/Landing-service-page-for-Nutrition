import type { Metadata } from "next";
import { FlodeskForm } from "../components/FlodeskForm";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Free Nutrition & Supplement Consultation",
  description:
    "Get clear, personalized guidance for nutrition services, supplement recommendations, and business growth.",
};

const benefits = [
  "Understand which nutrition and supplement guidance fits your audience",
  "Identify gaps in your current nutrition or supplement approach",
  "Get practical next steps for your business",
  "Improve confidence when discussing nutrition and supplements",
  "Learn how to support clients while growing your service and supplement sales",
];

const steps = [
  {
    title: "Tell us about your business",
    body: "Share who your clients are and the challenges you are facing.",
  },
  {
    title: "Have a one-to-one discussion",
    body: "Talk through nutrition, supplements, and your current business approach.",
  },
  {
    title: "Receive a customized strategy",
    body: "Leave with practical next steps for your nutrition and supplement business.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="eyebrow"><span /> Free one-to-one consultation</div>
        <h1 id="hero-title">
          Get Clear Nutrition &amp; Supplement Guidance
          <span>To Serve Clients Better And Grow Your Business</span>
        </h1>
        <p className="hero-subheadline">
          Book a free consultation to understand what nutrition guidance,
          supplement support, and practical strategy fit your clients and your business.
        </p>
        <a className="button button-primary" href="#book-consultation">
          Book Free Consultation <span aria-hidden="true">→</span>
        </a>
        <p className="hero-note">Personalized guidance. Practical next steps. No obligation.</p>

        <div className="audience-card" aria-label="Who this consultation is for">
          <p>This consultation is for</p>
          <div>
            <span>Gym owners</span>
            <span>Fitness coaches</span>
            <span>Supplement sellers</span>
            <span>Wellness businesses</span>
          </div>
        </div>
      </section>

      <section className="intro-section section-shell" aria-labelledby="clarity-title">
        <div className="section-kicker">A clearer way forward</div>
        <div className="intro-grid">
          <h2 id="clarity-title">Turn nutrition questions into <em>confident action.</em></h2>
          <div>
            <p>
              Get clear, personalized guidance for nutrition services, supplement
              recommendations, and business growth.
            </p>
            <p>
              The conversation is shaped around your business, your clients, and
              your current needs—so every recommendation has a practical purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section" aria-labelledby="benefits-title">
        <div className="section-shell">
          <div className="section-heading centered-heading">
            <div className="section-kicker">Built around your goals</div>
            <h2 id="benefits-title">How You Benefit From This Consultation</h2>
            <p>Focused guidance to help you support clients and strengthen your business.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <article className={index === 4 ? "benefit-card benefit-card-wide" : "benefit-card"} key={benefit}>
                <span className="check" aria-hidden="true">✓</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-shell" aria-labelledby="process-title">
        <div className="section-heading centered-heading">
          <div className="section-kicker">Simple and focused</div>
          <h2 id="process-title">Your Consultation Process</h2>
          <p>Three clear steps from your current challenge to a practical strategy.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="book-consultation" aria-labelledby="booking-title">
        <div className="section-shell booking-grid">
          <div className="booking-copy">
            <div className="section-kicker light-kicker">Book the call</div>
            <h2 id="booking-title">Make your next nutrition decision with clarity.</h2>
            <p>
              Get a focused one-to-one discussion based on your business, your clients,
              and your current needs.
            </p>

            <div className="booking-points">
              <div>
                <span aria-hidden="true">01</span>
                <p><strong>One-to-One Consultation</strong> A focused discussion tailored to where you are now.</p>
              </div>
              <div>
                <span aria-hidden="true">02</span>
                <p><strong>Customized Strategy</strong> Clearer direction for nutrition guidance, supplement support, and business growth.</p>
              </div>
            </div>
          </div>
          <FlodeskForm />
        </div>
      </section>
    </main>
  );
}
