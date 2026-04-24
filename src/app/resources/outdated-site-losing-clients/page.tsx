import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Outdated Site Is Losing You Clients",
  description:
    "A ReHive article on how outdated websites weaken trust, lower inquiry rates, and create hidden conversion losses for small businesses.",
};

export default function OutdatedSiteArticlePage() {
  return (
    <main className="article-page">
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

      <article className="article-shell">
        <p className="eyebrow">Featured blog</p>
        <h1>Why your outdated site is losing you clients</h1>
        <p className="article-intro">
          Most business owners do not lose leads because their site is fully
          broken. They lose leads because the site feels just outdated enough to
          create doubt, friction, or hesitation at the exact moment someone is
          deciding whether to reach out.
        </p>

        <section>
          <h2>1. It weakens trust before your sales process even begins</h2>
          <p>
            Visitors make fast judgments. If the design feels stale, the mobile
            experience feels awkward, or the messaging feels vague, the site can
            quietly imply that the business is less current, less detail-oriented,
            or less trustworthy than competitors.
          </p>
        </section>

        <section>
          <h2>2. It makes the offer harder to understand</h2>
          <p>
            Older sites often bury the real value proposition. They say too much,
            say it too vaguely, or force people to hunt for the answer to three
            basic questions: what do you do, who is it for, and why should I
            choose you?
          </p>
        </section>

        <section>
          <h2>3. It leaks motivated visitors on mobile</h2>
          <p>
            For many service businesses, mobile is the first touchpoint. Slow
            loading, cramped layouts, weak buttons, and awkward forms create
            friction exactly where the visitor should be moving toward inquiry.
          </p>
        </section>

        <section>
          <h2>4. It disconnects the site from the actual workflow</h2>
          <p>
            Even when the design looks acceptable, the handoff after the click is
            often weak. Leads come in with little context, responses are manual,
            quote steps are clunky, and follow-up depends on someone remembering
            to do the work.
          </p>
        </section>

        <section>
          <h2>5. It quietly underperforms in search</h2>
          <p>
            Outdated sites usually have thin service pages, weak metadata,
            inconsistent internal linking, and no real content strategy. That
            means lower visibility, weaker relevance signals, and fewer chances
            to capture decision-stage traffic.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <p>
            Start by auditing the basics: clarity, trust, mobile experience, CTA
            strength, local/service SEO, and what happens after a lead comes in.
            If you want a faster diagnosis, take the ReHive assessment or send a
            general inquiry and we can help map the highest-leverage fixes.
          </p>
        </section>

        <div className="article-cta">
          <Link href="/assessment" className="button button-primary">
            Take the assessment
          </Link>
          <Link href="/#contact" className="button button-secondary">
            Send a general inquiry
          </Link>
        </div>
      </article>
    </main>
  );
}
