import Link from "next/link";
import Script from "next/script";

import { ContactForm } from "@/components/contact-form";

const capabilities = [
  "Conversion-first marketing sites",
  "Workflow layers around your current tools",
  "Service-business SEO structures",
  "Custom internal software and automation",
];

const industries = [
  "Mobile detailers",
  "Cleaning companies",
  "Lawn care teams",
  "Food trucks",
  "E-commerce brands",
];

const process = [
  {
    step: "01",
    title: "Audit the gap",
    body: "Find where the current site, SEO, and workflow are leaking trust or time.",
  },
  {
    step: "02",
    title: "Sharpen the offer",
    body: "Clarify the message so the right buyer understands the value immediately.",
  },
  {
    step: "03",
    title: "Build the missing layer",
    body: "Connect conversion, operations, and follow-up into one stronger system.",
  },
  {
    step: "04",
    title: "Compound the gains",
    body: "Use search, iteration, and content to keep improving over time.",
  },
];

const resources = [
  {
    href: "/resources/outdated-site-losing-clients",
    type: "Featured article",
    title: "Why your outdated site is losing you clients",
    body: "A direct breakdown of how stale design, vague messaging, weak mobile UX, and poor inquiry flow quietly cost revenue.",
  },
  {
    href: "/resources/homepage-conversion-audit-checklist",
    type: "Checklist",
    title: "Homepage Conversion Audit Checklist",
    body: "Use this to spot whether your homepage is clarifying the offer or making visitors work too hard.",
  },
  {
    href: "/resources/local-seo-readiness-guide",
    type: "Guide",
    title: "Local SEO Readiness Guide for Service Businesses",
    body: "A practical planning guide for page targeting, internal linking, reviews, and local visibility basics.",
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

export default function Home() {
  return (
    <>
      <Script
        id="rehive-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="rehive-home">
        <section className="home-hero" id="top">
          <div className="home-hero__halo" aria-hidden="true" />
          <div className="home-hero__grid" aria-hidden="true" />

          <header className="home-header">
            <Link href="/" className="brand-mark">
              <span className="brand-mark__icon" />
              <span>ReHive</span>
            </Link>

            <nav className="home-header__nav" aria-label="Primary">
              <a href="#capabilities">Capabilities</a>
              <a href="#assessment">Assessment</a>
              <Link href="/resources">Resources</Link>
              <a href="#contact">Inquire</a>
            </nav>

            <div className="home-header__actions">
              <Link href="/assessment" className="button button-header-secondary">
                Take assessment
              </Link>
              <a href="#contact" className="button button-header-primary">
                General inquiry
              </a>
            </div>
          </header>

          <div className="home-hero__content">
            <div className="home-hero__copy">
              <p className="eyebrow">Custom websites, SEO systems, and workflow layers</p>
              <h1>
                Custom development for small businesses that outgrow off-the-shelf
                tools.
              </h1>
              <p className="home-hero__lead">
                ReHive helps service businesses and growing brands stop duct-taping
                their software together. We build stronger websites, stronger inquiry
                paths, and stronger systems behind them.
              </p>

              <div className="home-hero__actions">
                <Link href="/assessment" className="button button-primary">
                  Take the assessment
                </Link>
                <a href="#contact" className="button button-secondary">
                  Send a general inquiry
                </a>
              </div>

              <div className="home-hero__capabilities" id="capabilities">
                {capabilities.map((item) => (
                  <div key={item} className="hero-capability">
                    <span className="hero-capability__marker" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-hero__visual" aria-hidden="true">
              <div className="hero-engine">
                <div className="hero-engine__ring hero-engine__ring--outer" />
                <div className="hero-engine__ring hero-engine__ring--mid" />
                <div className="hero-engine__ring hero-engine__ring--inner" />
                <div className="hero-engine__axis hero-engine__axis--x" />
                <div className="hero-engine__axis hero-engine__axis--y" />
                <div className="hero-engine__core">
                  <span>ReHive system</span>
                  <strong>Brand + Conversion + Workflow + Search</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-marquee">
          <div className="home-marquee__track">
            {industries.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="home-split">
          <div className="split-panel split-panel--assessment" id="assessment">
            <p className="eyebrow">Business Growth Gap Assessment</p>
            <h2>Start with a guided diagnosis, not a vague contact prompt.</h2>
            <p>
              The assessment gives business owners a useful next step: a score,
              the biggest weak points, and the most relevant resource to read next.
            </p>
            <div className="split-panel__stat">
              <span>5 steps</span>
              <strong>One click at a time</strong>
            </div>
            <Link href="/assessment" className="button button-primary">
              Launch assessment
            </Link>
          </div>

          <div className="split-panel split-panel--resources">
            <p className="eyebrow">Free value</p>
            <h2>Build search trust with resources people actually want.</h2>
            <div className="resource-stack">
              {resources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="resource-stack__item">
                  <span>{resource.type}</span>
                  <strong>{resource.title}</strong>
                  <p>{resource.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-process">
          <div className="section-heading">
            <p className="eyebrow">How projects move</p>
            <h2>Designed to make the right thing clearer, easier, and more valuable.</h2>
          </div>

          <div className="process-rail">
            {process.map((item) => (
              <article key={item.step} className="process-node">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-contact" id="contact">
          <div className="home-contact__intro">
            <p className="eyebrow">General inquiry</p>
            <h2>If you already know the gap, skip the assessment and tell us what needs to change.</h2>
            <p>
              The best inquiries tell us where the current site, SEO, or workflow
              is falling short, what tools are already in use, and what result
              would make the project clearly worth it.
            </p>
          </div>

          <div className="home-contact__form">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
