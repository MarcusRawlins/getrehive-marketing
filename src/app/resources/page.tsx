import Link from "next/link";
import type { Metadata } from "next";

const resources = [
  {
    href: "/resources/outdated-site-losing-clients",
    type: "Blog",
    title: "Why your outdated site is losing you clients",
    description:
      "How outdated design, weak messaging, slow mobile performance, and poor inquiry flow quietly drain revenue.",
  },
  {
    href: "/resources/homepage-conversion-audit-checklist",
    type: "Checklist",
    title: "Homepage Conversion Audit Checklist",
    description:
      "A practical framework for spotting whether your homepage is clarifying the offer or making visitors work too hard.",
  },
  {
    href: "/resources/local-seo-readiness-guide",
    type: "Guide",
    title: "Local SEO Readiness Guide for Service Businesses",
    description:
      "A simple planning guide for service pages, local intent, reviews, internal linking, and technical SEO basics.",
  },
];

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free ReHive resources and articles for service businesses looking to improve their website, SEO, and conversion path.",
};

export default function ResourcesPage() {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link href="/" className="brand-mark">
          <span className="brand-mark__icon" />
          <span>ReHive</span>
        </Link>
        <div className="detail-header__actions">
          <Link href="/assessment" className="button button-header-secondary">
            Assessment
          </Link>
          <Link href="/#contact" className="button button-header-primary">
            General inquiry
          </Link>
        </div>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">Free resources</p>
        <h1>Useful content for operators who know their current site should be doing more.</h1>
        <p className="detail-hero__lead">
          These pages are designed to provide genuine value, support SEO, and
          help potential clients understand where stronger positioning,
          conversion, and systems can change the business.
        </p>
      </section>

      <section className="detail-grid">
        {resources.map((resource) => (
          <article key={resource.href} className="glass-card resource-card">
            <span className="resource-card__type">{resource.type}</span>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <Link href={resource.href} className="resource-card__cta">
              Open resource
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
