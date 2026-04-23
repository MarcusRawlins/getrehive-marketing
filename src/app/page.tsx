import Script from "next/script";

import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

const industries = [
  {
    name: "Mobile detailers",
    summary:
      "Build quoting, bookings, route-aware service areas, follow-ups, and repeat-customer workflows that cut admin work.",
  },
  {
    name: "Cleaning companies",
    summary:
      "Connect leads, scheduling, staffing updates, reminders, and invoicing into one system that is easier to run.",
  },
  {
    name: "Lawn care professionals",
    summary:
      "Handle recurring service plans, estimates, route planning, review generation, and local visibility without duct-taped tools.",
  },
  {
    name: "Food trucks",
    summary:
      "Launch high-converting sites, location updates, menu flows, event promotion, and customer retention systems that keep demand moving.",
  },
  {
    name: "E-commerce brands",
    summary:
      "Improve storefront conversion, operational automations, customer flows, and backend workflows without a bloated enterprise budget.",
  },
];

const capabilities = [
  "Custom marketing sites that convert visitors into booked jobs",
  "Workflow automation that removes repetitive admin work",
  "Booking and service-flow improvements around your current tools",
  "Internal dashboards, forms, and lightweight custom software",
  "Brand-forward digital experiences that improve trust and visibility",
  "SEO-ready page architecture built around actual search behavior",
];

const proofPoints = [
  {
    label: "50-90%",
    detail: "Most off-the-shelf tools solve only part of the workflow.",
  },
  {
    label: "1 custom stack",
    detail: "We close the gap with systems that fit how your business actually runs.",
  },
  {
    label: "More margin",
    detail: "Less manual work, fewer workarounds, and a stronger online presence.",
  },
];

const process = [
  {
    step: "01",
    title: "Map the gap",
    body: "We audit the tools you already use, identify the friction, and define what should be simplified, automated, or rebuilt.",
  },
  {
    step: "02",
    title: "Design the system",
    body: "We create a cleaner customer journey, stronger brand presentation, and a technical plan built around your real operations.",
  },
  {
    step: "03",
    title: "Build what matters",
    body: "We develop the site, flows, integrations, and custom features that remove busywork and make your business easier to run.",
  },
  {
    step: "04",
    title: "Launch and refine",
    body: "We improve performance, SEO, and messaging over time so the site keeps compounding value instead of becoming another chore.",
  },
];

const seoTargets = [
  {
    keyword: "small business web development",
    intent: "High-intent service query for owners looking for a build partner.",
  },
  {
    keyword: "custom software development for small business",
    intent: "Solution-aware query for businesses that need more than templates and plugins.",
  },
  {
    keyword: "service business website design",
    intent: "Commercial intent around lead-gen sites for operators selling local services.",
  },
  {
    keyword: "booking website for cleaning business",
    intent: "Vertical-specific search behavior tied to conversion and scheduling.",
  },
  {
    keyword: "mobile detailing website design",
    intent: "Niche search with clear fit for ReHive's target client profile.",
  },
  {
    keyword: "lawn care website design",
    intent: "Home-service niche query with strong local and lead-gen intent.",
  },
];

const faq = [
  {
    question: "Who is ReHive for?",
    answer:
      "We work best with small businesses that already use tools for booking, e-commerce, scheduling, or operations but still lose time to manual workarounds.",
  },
  {
    question: "Do you replace our current software?",
    answer:
      "Sometimes, but not always. In many cases we improve what you already use by adding custom layers, automation, and a better front-end experience.",
  },
  {
    question: "Can you build around our budget?",
    answer:
      "Yes. ReHive is positioned for businesses that need custom work without enterprise-level agency pricing.",
  },
  {
    question: "What does the first engagement look like?",
    answer:
      "We start by understanding your workflow, the gaps in your current setup, and the highest-value fix. Then we scope a practical first phase.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ReHive",
  url: "https://getrehive.com",
  email: "hello@getrehive.com",
  description:
    "ReHive builds custom websites, automations, and software for small businesses that have outgrown off-the-shelf tools.",
  areaServed: "United States",
  serviceType: [
    "Small business web development",
    "Custom software development",
    "Workflow automation",
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

      <main className="page-shell">
        <section className="hero-section">
          <div className="ambient-grid" aria-hidden="true" />
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <div className="orb orb-three" aria-hidden="true" />

          <header className="site-header">
            <a href="#top" className="brand-mark">
              <span className="brand-mark__icon" />
              <span>ReHive</span>
            </a>

            <nav className="site-nav" aria-label="Primary">
              <a href="#capabilities">Capabilities</a>
              <a href="#industries">Industries</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-grid" id="top">
            <ScrollReveal className="hero-copy" delay={120}>
              <p className="eyebrow">Custom development studio for ambitious operators</p>
              <h1>
                Custom development for small businesses that outgrow
                off-the-shelf tools.
              </h1>
              <p className="hero-lead">
                ReHive builds custom websites, automations, and software layers
                for service businesses and growing brands that are tired of
                patching together systems that only handle part of the job.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Start your project
                </a>
                <a href="#capabilities" className="button button-secondary">
                  See what we build
                </a>
              </div>

              <div className="hero-proof">
                {proofPoints.map((item) => (
                  <article key={item.label} className="hero-proof__item">
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="hero-panel" delay={220}>
              <div className="hero-panel__frame">
                <div className="hero-panel__topline">
                  <span>Custom websites</span>
                  <span>Automation layers</span>
                  <span>SEO architecture</span>
                </div>

                <div className="hero-panel__core">
                  <div className="signal-card">
                    <p>Current reality</p>
                    <strong>Your software covers part of the workflow.</strong>
                    <span>
                      Your team still handles quoting, follow-ups, scheduling
                      fixes, and brand work manually.
                    </span>
                  </div>

                  <div className="signal-card signal-card--accent">
                    <p>ReHive buildout</p>
                    <strong>We close the gap without enterprise overhead.</strong>
                    <span>
                      Better customer experience, better systems, less busywork.
                    </span>
                  </div>
                </div>

                <div className="hero-metrics">
                  <div>
                    <span>Positioning</span>
                    <strong>Premium custom work</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Service + e-commerce operators</strong>
                  </div>
                  <div>
                    <span>Outcome</span>
                    <strong>Time saved. Presence increased.</strong>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="content-section" id="capabilities">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">What we build</p>
            <h2>Technology that fits the way your business actually runs.</h2>
            <p>
              ReHive is for businesses that need more than a template, but do
              not want the cost and drag of a bloated custom agency engagement.
            </p>
          </ScrollReveal>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <ScrollReveal
                key={capability}
                className="glass-card capability-card"
                delay={index * 90}
              >
                <span className="capability-card__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <p>{capability}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="content-section" id="industries">
          <div className="split-section">
            <ScrollReveal className="section-heading split-section__copy">
              <p className="eyebrow">Built for growing operators</p>
              <h2>
                We specialize in businesses where generic software leaves real
                revenue and time on the table.
              </h2>
              <p>
                That usually means the front-end does not reflect the brand,
                the workflow still needs manual cleanup, and nobody has built
                the connective tissue between tools.
              </p>
            </ScrollReveal>

            <div className="industry-list">
              {industries.map((industry, index) => (
                <ScrollReveal
                  key={industry.name}
                  className="glass-card industry-card"
                  delay={index * 80}
                >
                  <h3>{industry.name}</h3>
                  <p>{industry.summary}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="seo-panel">
            <ScrollReveal className="section-heading seo-panel__copy">
              <p className="eyebrow">SEO direction</p>
              <h2>We are building this site around commercial search intent.</h2>
              <p>
                The initial architecture targets small-business custom
                development terms plus vertical pages for service businesses
                that buy based on outcomes like bookings, visibility, and less
                admin work.
              </p>
            </ScrollReveal>

            <div className="seo-targets">
              {seoTargets.map((target, index) => (
                <ScrollReveal
                  key={target.keyword}
                  className="seo-target"
                  delay={index * 70}
                >
                  <strong>{target.keyword}</strong>
                  <span>{target.intent}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="process">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>
              Strategic enough to solve the right problem. Lean enough to move.
            </h2>
          </ScrollReveal>

          <div className="process-grid">
            {process.map((item, index) => (
              <ScrollReveal
                key={item.step}
                className="glass-card process-card"
                delay={index * 90}
              >
                <span className="process-card__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="faq-layout">
            <ScrollReveal className="section-heading faq-layout__copy">
              <p className="eyebrow">Why clients reach out</p>
              <h2>
                They are tired of doing custom work manually around generic
                tools.
              </h2>
              <p>
                ReHive gives them a cleaner brand presence, better workflows,
                and systems designed around how their team really operates.
              </p>
            </ScrollReveal>

            <div className="faq-list">
              {faq.map((item, index) => (
                <ScrollReveal
                  key={item.question}
                  className="glass-card faq-card"
                  delay={index * 70}
                >
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-shell">
            <ScrollReveal className="section-heading contact-shell__copy">
              <p className="eyebrow">Start the conversation</p>
              <h2>
                Tell us where your current setup falls short and we will map
                the next move.
              </h2>
              <p>
                Early inquiries go straight to <a href="mailto:hello@getrehive.com">hello@getrehive.com</a>.
              </p>
            </ScrollReveal>

            <ScrollReveal className="glass-card contact-card" delay={120}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
