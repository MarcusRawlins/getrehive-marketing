import Link from "next/link";
import type { Metadata } from "next";

import { RehiveLogo } from "@/components/rehive-logo";

export const metadata: Metadata = {
  title: "Homepage Conversion Audit Checklist",
  description:
    "A practical ReHive checklist for evaluating whether your homepage is clearly communicating your offer and converting interest into inquiries.",
};

export default function HomepageConversionAuditChecklistPage() {
  return (
    <main className="article-page">
      <header className="detail-header">
        <Link href="/" className="brand-mark">
          <RehiveLogo />
        </Link>
      </header>

      <article className="article-shell">
        <p className="eyebrow">Checklist</p>
        <h1>Homepage Conversion Audit Checklist</h1>
        <ul className="article-list">
          <li>Your headline clearly says what you do and who it is for.</li>
          <li>Your subheadline explains why the offer matters.</li>
          <li>The primary CTA is obvious and aligned with visitor intent.</li>
          <li>Trust signals are visible before the visitor has to hunt for them.</li>
          <li>The homepage does not force users to guess what happens next.</li>
          <li>Mobile visitors can act without friction.</li>
          <li>The layout supports scanning instead of overwhelming people.</li>
          <li>The page reinforces real business outcomes, not vague claims.</li>
        </ul>
      </article>
    </main>
  );
}
