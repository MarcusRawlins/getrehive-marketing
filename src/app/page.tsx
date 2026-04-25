import Link from "next/link";
import Script from "next/script";

import { ContactForm } from "@/components/contact-form";
import { HeroOrbit } from "@/components/hero-orbit";
import { RehiveLogo } from "@/components/rehive-logo";

const frictionPoints = [
  {
    title: "Your platform handles 70% of the job",
    body: "The other 30% still lives in manual follow-up, spreadsheets, workarounds, and missed context between tools.",
  },
  {
    title: "Your site looks fine but does not sell clearly",
    body: "Visitors can tell you are in business, but they still cannot tell why they should choose you or what happens next.",
  },
  {
    title: "You are spending time maintaining the gaps",
    body: "Every little exception, process change, or lead handoff adds more owner time instead of reducing it.",
  },
  {
    title: "You want growth without bloated software",
    body: "You do not need an enterprise rebuild. You need the missing custom layer that makes the current business work better.",
  },
];

const offerPillars = [
  {
    title: "Websites that explain the offer and convert",
    body: "Sharper messaging, better structure, better CTA flow, and a site that feels current enough to earn trust fast.",
  },
  {
    title: "Custom workflow layers around your current tools",
    body: "We build around what already works, then close the gaps that keep costing the team time or consistency.",
  },
  {
    title: "SEO structure that supports long-term growth",
    body: "Service pages, local intent coverage, resource content, and technical SEO foundations built for actual search behavior.",
  },
];

const proofReasons = [
  "Stronger site before paid traffic",
  "Less manual cleanup between tools",
  "Technical execution tied to business outcomes",
];

const fitSignals = [
  "You already have a booking platform, CRM, storefront, or quoting tool in place.",
  "The current setup works, but still leaves too much manual follow-up or maintenance.",
  "You know the site, messaging, or workflow is holding back better leads or smoother operations.",
];

const outcomes = [
  {
    title: "Clearer positioning",
    body: "Visitors understand what you do, who it is for, and why your business is the better choice.",
  },
  {
    title: "Stronger inquiry flow",
    body: "The path from interest to contact becomes more direct, more confident, and easier to act on.",
  },
  {
    title: "Less manual cleanup",
    body: "The business stops depending on workarounds for every exception, handoff, and follow-up step.",
  },
  {
    title: "Better long-term search visibility",
    body: "The site is structured for service intent, local relevance, and useful content that compounds over time.",
  },
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
              <RehiveLogo />
            </Link>

            <nav className="home-header__nav" aria-label="Primary">
              <a href="#capabilities">Capabilities</a>
              <a href="#process">Process</a>
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
              <p className="eyebrow">For small businesses outgrowing generic tools</p>
              <h1>
                <span>The tools</span>
                <span>work. The</span>
                <span>gaps are</span>
                <span>what keep</span>
                <span>costing</span>
                <span>you leads</span>
                <span>and time.</span>
              </h1>
              <p className="home-hero__lead">
                ReHive Studio builds the missing custom layer between your website,
                your current software, and the way the business actually runs, so
                you stop paying for almost-good-enough with manual work, weaker
                conversion, and a site that undersells the business.
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
                {proofReasons.map((item) => (
                  <div key={item} className="hero-capability">
                    <span className="hero-capability__marker" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-hero__visual" aria-hidden="true">
              <HeroOrbit />
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

        <section className="home-fit">
          <div className="section-heading">
            <p className="eyebrow">Who this is for</p>
            <h2>If the business is real but the setup still feels patched together, you are probably in the right place.</h2>
          </div>

          <div className="fit-shell">
            <div className="fit-panel">
              <span className="fit-panel__label">Best fit</span>
              <ul>
                {fitSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fit-panel fit-panel--accent">
              <span className="fit-panel__label">Why teams reach out</span>
              <p>
                Usually because they are tired of a site that does not explain the
                value clearly, a workflow that still needs too much owner attention,
                or a software stack that handles most of the job but never the
                high-friction parts.
              </p>
            </div>
          </div>
        </section>

        <section className="home-friction">
          <div className="section-heading">
            <p className="eyebrow">If this sounds familiar</p>
            <h2>The business is working, but the current setup is costing too much time and trust.</h2>
          </div>

          <div className="friction-grid">
            {frictionPoints.map((item) => (
              <article key={item.title} className="friction-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-outcomes">
          <div className="section-heading">
            <p className="eyebrow">What improves</p>
            <h2>The goal is not just a nicer website. The goal is a business that runs and sells better.</h2>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((item) => (
              <article key={item.title} className="outcome-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-offer">
          <div className="section-heading">
            <p className="eyebrow">What ReHive actually does</p>
            <h2>We close the gap between what your current tools can do and what your business actually needs.</h2>
          </div>

          <div className="offer-grid">
            {offerPillars.map((item) => (
              <article key={item.title} className="offer-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-split">
          <div className="split-panel split-panel--assessment" id="assessment">
            <p className="eyebrow">Business Growth Gap Assessment</p>
            <h2>Not sure where the biggest leak is? Start with a fast diagnosis.</h2>
            <p>
              The assessment gives you a clearer next step: where the current site,
              SEO, or workflow is weakest, what matters most to fix first, and which
              resource to read next.
            </p>
            <div className="split-panel__stat">
              <span>5 questions</span>
              <strong>Built to qualify the right project</strong>
            </div>
            <Link href="/assessment" className="button button-primary">
              Launch assessment
            </Link>
          </div>

          <div className="split-panel split-panel--resources">
            <p className="eyebrow">Free value</p>
            <h2>Not ready to inquire yet? Start with resources that actually help.</h2>
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

        <section className="home-process" id="process">
          <div className="section-heading">
            <p className="eyebrow">How projects move</p>
            <h2>Every project is built to make the offer clearer, the path easier, and the system stronger.</h2>
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
            <h2>If you already know something is costing you leads or time, let’s talk about the fix.</h2>
            <p>
              Strong inquiries usually mention three things: where the current site
              or workflow is falling short, what tools are already in place, and
              what result would make this project clearly worth doing now.
            </p>

            <div className="contact-guidance">
              <div className="contact-guidance__card">
                <span>Helpful to include</span>
                <p>The current tools, where the workflow breaks, and what a better outcome would look like.</p>
              </div>
              <div className="contact-guidance__card">
                <span>What you get back</span>
                <p>A more grounded conversation about the gap, whether custom work is the right move, and what to prioritize first.</p>
              </div>
            </div>
          </div>

          <div className="home-contact__form">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
