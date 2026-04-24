import Link from "next/link";
import type { Metadata } from "next";

import { RehiveLogo } from "@/components/rehive-logo";

export const metadata: Metadata = {
  title: "Local SEO Readiness Guide",
  description:
    "A ReHive guide for service businesses that want to improve local SEO with stronger page targeting, internal linking, reviews, and technical basics.",
};

export default function LocalSeoReadinessGuidePage() {
  return (
    <main className="article-page">
      <header className="detail-header">
        <Link href="/" className="brand-mark">
          <RehiveLogo />
        </Link>
      </header>

      <article className="article-shell">
        <p className="eyebrow">Guide</p>
        <h1>Local SEO Readiness Guide for Service Businesses</h1>
        <ul className="article-list">
          <li>Create dedicated pages for each core service.</li>
          <li>Support target markets with city or service-area intent where relevant.</li>
          <li>Use consistent NAP details and link cleanly to contact actions.</li>
          <li>Collect recent reviews and surface them in meaningful places.</li>
          <li>Use internal links that help both users and search engines navigate.</li>
          <li>Make sure mobile speed and form usability are not undermining local traffic.</li>
          <li>Write pages for real buyer intent, not keyword stuffing.</li>
        </ul>
      </article>
    </main>
  );
}
