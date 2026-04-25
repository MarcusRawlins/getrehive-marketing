import Link from "next/link";
import Script from "next/script";

import { ContactForm } from "@/components/contact-form";
import { HeroOrbit } from "@/components/hero-orbit";
import { RehiveLogo } from "@/components/rehive-logo";

const trustMarks = [
  { name: "DetailWerx", label: "Auto Detailing" },
  { name: "CleanCo", label: "Cleaning Services" },
  { name: "Greenscape", label: "Lawn Care" },
  { name: "Taco Loco", label: "Food Truck" },
  { name: "Pure Supply", label: "E-Commerce" },
];

const painCards = [
  {
    title: "Tools do not fit the way you work",
    body: "You are forced into workarounds, manual steps, and messy processes because the platform only handles part of the job.",
  },
  {
    title: "Your site does not convert like it should",
    body: "Visitors do not instantly understand the offer, the value, or the next step, so fewer of them reach out or book.",
  },
  {
    title: "You are losing time every single week",
    body: "Small gaps, moving data, and chasing follow-ups pull the owner or team back into repetitive cleanup.",
  },
  {
    title: "Growth feels harder than it should",
    body: "You want to scale, but your systems, site, and search presence are not built to support that next level cleanly.",
  },
];

const solutionCards = [
  {
    title: "Conversion-First Websites",
    body: "Messaging, design, and structure built to turn the right visitors into real inquiries and booked jobs.",
  },
  {
    title: "Workflow & Automation",
    body: "Custom systems and integrations that eliminate manual work and connect your tools the way the business actually runs.",
  },
  {
    title: "SEO That Brings Real Business",
    body: "Local SEO, service pages, and technical foundations that help you get found by ready-to-buy customers.",
  },
];

const proofStats = [
  { value: "2.7x", label: "more inquiries on average" },
  { value: "41%", label: "increase in booked jobs" },
  { value: "28+", label: "hours saved per week on average" },
  { value: "3-6 mo.", label: "typical ROI window" },
];

const processSteps = [
  {
    step: "1",
    title: "Discover",
    body: "We learn your business, goals, tools, and the biggest gaps holding you back.",
  },
  {
    step: "2",
    title: "Strategize",
    body: "You get a custom plan focused on the highest impact opportunities first.",
  },
  {
    step: "3",
    title: "Build",
    body: "We design, develop, and integrate your system with precision and care.",
  },
  {
    step: "4",
    title: "Launch",
    body: "We test, refine, and launch a solution built to perform in the real world.",
  },
  {
    step: "5",
    title: "Grow",
    body: "We keep improving your system so it continues to scale with you.",
  },
];

const assessmentPoints = [
  "5 quick questions",
  "Instant results",
  "Personalized recommendations",
  "No commitment",
];

const resources = [
  {
    href: "/resources/outdated-site-losing-clients",
    type: "Guide",
    title: "Why Your Outdated Site Is Losing You Clients",
    body: "The hidden conversion leaks most business owners do not see until leads slow down.",
  },
  {
    href: "/resources/homepage-conversion-audit-checklist",
    type: "Checklist",
    title: "Homepage Conversion Audit Checklist",
    body: "A step-by-step checklist to audit your site for more inquiries and bookings.",
  },
  {
    href: "/resources/local-seo-readiness-guide",
    type: "Guide",
    title: "Local SEO Readiness Guide for Service Businesses",
    body: "Make sure your business shows up where local customers are searching.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ReHive",
  url: "https://getrehive.com",
  email: "hello@getrehive.com",
  description:
    "ReHive builds conversion-focused websites, workflow automations, and custom software layers for small businesses that have outgrown off-the-shelf tools.",
  areaServed: "United States",
  serviceType: [
    "Custom web development for small businesses",
    "Workflow automation",
    "Custom software development",
    "SEO-focused marketing websites",
  ],
};

function MetricStrip() {
  return (
    <div className="studio-metrics">
      <div className="studio-metrics__grid">
        {proofStats.map((item) => (
          <div key={item.value} className="studio-metrics__item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="studio-metrics__cta">
        <p>Ready for results like these?</p>
        <span>Let&apos;s build the system that gets you there.</span>
        <a href="#inquire" className="studio-inline-cta" aria-label="Go to inquiry section">
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Script
        id="rehive-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="studio-home">
        <section className="studio-hero" id="top">
          <div className="studio-hero__fog studio-hero__fog--one" aria-hidden="true" />
          <div className="studio-hero__fog studio-hero__fog--two" aria-hidden="true" />
          <div className="studio-hero__grid" aria-hidden="true" />

          <header className="studio-header">
            <Link href="/" className="brand-mark">
              <RehiveLogo />
            </Link>

            <nav className="studio-nav" aria-label="Primary">
              <a href="#solutions">Solutions</a>
              <a href="#process">Process</a>
              <a href="#industries">Industries</a>
              <Link href="/resources">Resources</Link>
              <a href="#about">About</a>
            </nav>

            <div className="studio-header__actions">
              <Link href="/assessment" className="studio-btn studio-btn--ghost">
                Take assessment
              </Link>
              <a href="#inquire" className="studio-btn studio-btn--solid">
                General inquiry
              </a>
            </div>
          </header>

          <div className="studio-hero__content">
            <div className="studio-hero__copy">
              <p className="eyebrow">Custom systems. Real results.</p>
              <h1>
                Your tools handle
                <br />
                the basics.
                <br />
                <span>You&apos;re still paying</span>
                <br />
                <span>for the gaps with lost</span>
                <br />
                <span>leads, time, and</span>
                <br />
                <span>manual work.</span>
              </h1>
              <p className="studio-hero__lead">
                ReHive Studio builds the custom website, automation, and workflow
                layer that makes your business easier to run, easier to trust,
                and easier to choose.
              </p>

              <div className="studio-hero__actions">
                <Link href="/assessment" className="studio-btn studio-btn--solid">
                  Take assessment
                </Link>
                <a href="#inquire" className="studio-btn studio-btn--ghost studio-btn--dark">
                  General inquiry
                </a>
              </div>

              <div className="studio-trust" id="industries">
                <p>Trusted by service businesses &amp; growing brands</p>
                <div className="studio-trust__row">
                  {trustMarks.map((item) => (
                    <div key={item.name} className="studio-trust__item">
                      <strong>{item.name}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="studio-hero__visual" aria-hidden="true">
              <HeroOrbit />
            </div>
          </div>
        </section>

        <section className="studio-section studio-section--problem">
          <div className="studio-section__heading studio-section__heading--center">
            <p className="eyebrow">The real problem</p>
            <h2>
              You didn&apos;t start your business
              <br />
              to manage software.
            </h2>
          </div>

          <div className="studio-card-grid studio-card-grid--four">
            {painCards.map((item) => (
              <article key={item.title} className="studio-card">
                <div className="studio-card__icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-section studio-section--solutions" id="solutions">
          <div className="studio-ribbons" aria-hidden="true" />

          <div className="studio-section__heading studio-section__heading--center" id="about">
            <p className="eyebrow">What we build</p>
            <h2>
              Custom solutions that drive
              <br />
              <span>clarity, conversion, and scale.</span>
            </h2>
          </div>

          <div className="studio-card-grid studio-card-grid--three">
            {solutionCards.map((item) => (
              <article key={item.title} className="studio-card studio-card--solution">
                <div className="studio-card__icon studio-card__icon--small" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="studio-card__arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>

          <MetricStrip />
        </section>

        <section className="studio-section studio-section--process" id="process">
          <div className="studio-section__heading studio-section__heading--center">
            <p className="eyebrow">Our process</p>
            <h2>A clear process. Zero wasted time.</h2>
          </div>

          <div className="studio-process">
            <div className="studio-process__line" aria-hidden="true" />
            {processSteps.map((item) => (
              <article key={item.step} className="studio-process__item">
                <span className="studio-process__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-section studio-section--assessment">
          <div className="studio-assessment">
            <div className="studio-assessment__visual" aria-hidden="true">
              <div className="studio-radar">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="studio-assessment__copy">
              <p className="eyebrow">Start with clarity</p>
              <h2>
                Not sure where to start?
                <br />
                <span>Take the 5-minute assessment.</span>
              </h2>
              <p>
                Get a custom score, see your biggest opportunities, and get a
                recommended next step instantly.
              </p>
              <Link href="/assessment" className="studio-btn studio-btn--solid">
                Take assessment
              </Link>
            </div>

            <div className="studio-assessment__points">
              {assessmentPoints.map((item) => (
                <div key={item} className="studio-point">
                  <span className="studio-point__icon" aria-hidden="true">
                    +
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-section studio-section--resources">
          <div className="studio-section__bar">
            <div className="studio-section__heading">
              <p className="eyebrow">Free resources</p>
              <h2>Practical guides to help you grow.</h2>
            </div>

            <Link href="/resources" className="studio-btn studio-btn--ghost studio-btn--compact">
              View all resources
            </Link>
          </div>

          <div className="studio-resource-grid">
            {resources.map((item, index) => (
              <Link key={item.href} href={item.href} className="studio-resource-card">
                <div className={`studio-resource-card__cover studio-resource-card__cover--${index + 1}`} />
                <div className="studio-resource-card__body">
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
                <span className="studio-resource-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="studio-section studio-section--footer-cta">
          <div className="studio-footer-cta">
            <div>
              <p className="eyebrow">Ready to build what&apos;s next?</p>
              <h2>
                Let&apos;s build the system your
                <br />
                business actually needs.
              </h2>
            </div>

            <div className="studio-footer-cta__actions">
              <a href="#inquire" className="studio-btn studio-btn--ghost studio-btn--dark">
                General inquiry
              </a>
              <Link href="/assessment" className="studio-btn studio-btn--solid">
                Take assessment
              </Link>
            </div>
          </div>
        </section>

        <section className="studio-section studio-section--contact" id="inquire">
          <div className="studio-contact">
            <div className="studio-contact__intro">
              <p className="eyebrow">General inquiry</p>
              <h2>Tell us what feels patched together, manual, or undersold right now.</h2>
              <p>
                The strongest inquiries mention what tools are already in place,
                where the current setup breaks down, and what outcome would make
                this project clearly worth doing now.
              </p>
            </div>

            <div className="studio-contact__form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
