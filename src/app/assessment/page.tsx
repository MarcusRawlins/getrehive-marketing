import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Growth Gap Assessment",
  description:
    "A guided ReHive assessment for small businesses that want to understand where their website, SEO, and workflow are underperforming.",
};

const questions = [
  {
    id: "clarity",
    prompt:
      "When someone lands on your site, can they tell what you do and why you are different within a few seconds?",
    options: [
      { label: "Not really", score: 0 },
      { label: "Somewhat", score: 10 },
      { label: "Yes, clearly", score: 20 },
    ],
  },
  {
    id: "conversion",
    prompt:
      "How easy is it for a motivated visitor to request a quote, book, or start a conversation?",
    options: [
      { label: "Confusing or weak", score: 0 },
      { label: "Functional but not strong", score: 10 },
      { label: "Very clear and direct", score: 20 },
    ],
  },
  {
    id: "search",
    prompt:
      "How confident are you that your site is built around the way customers actually search for your services?",
    options: [
      { label: "Not confident", score: 0 },
      { label: "Partially", score: 10 },
      { label: "Very confident", score: 20 },
    ],
  },
  {
    id: "mobile",
    prompt: "How modern and trustworthy does your site feel on a phone?",
    options: [
      { label: "Outdated", score: 0 },
      { label: "Good enough", score: 10 },
      { label: "Strong and current", score: 20 },
    ],
  },
  {
    id: "workflow",
    prompt:
      "After a lead comes in, how much manual work does your team still do to quote, follow up, and move the customer forward?",
    options: [
      { label: "A lot", score: 0 },
      { label: "Some", score: 10 },
      { label: "Very little", score: 20 },
    ],
  },
] as const;

const insights = {
  clarity:
    "Your positioning may be too vague, which usually lowers trust and makes every other part of the funnel work harder.",
  conversion:
    "The site may not be giving motivated visitors a strong enough path to inquire, book, or request a quote.",
  search:
    "Your page structure may not be aligned closely enough with high-intent service and local search behavior.",
  mobile:
    "A weak mobile experience can quietly damage first impressions, especially for service businesses getting local traffic.",
  workflow:
    "Manual follow-up and disconnected tools often mean leads are being slowed down or dropped after the click.",
} as const;

const resourceRecommendations = {
  clarity: {
    href: "/resources/homepage-conversion-audit-checklist",
    title: "Homepage Conversion Audit Checklist",
  },
  conversion: {
    href: "/resources/homepage-conversion-audit-checklist",
    title: "Homepage Conversion Audit Checklist",
  },
  search: {
    href: "/resources/local-seo-readiness-guide",
    title: "Local SEO Readiness Guide for Service Businesses",
  },
  mobile: {
    href: "/resources/outdated-site-losing-clients",
    title: "Why your outdated site is losing you clients",
  },
  workflow: {
    href: "/resources/outdated-site-losing-clients",
    title: "Why your outdated site is losing you clients",
  },
} as const;

type AssessmentParams = Record<string, string | string[] | undefined>;

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function buildHref(step: number, answers: Record<string, number>) {
  const params = new URLSearchParams();
  params.set("step", String(step));

  for (const [key, value] of Object.entries(answers)) {
    params.set(key, String(value));
  }

  return `/assessment?${params.toString()}`;
}

export default async function AssessmentPage({
  searchParams,
}: {
  searchParams: Promise<AssessmentParams>;
}) {
  const resolvedParams = await searchParams;
  const stepValue = Number(getSingleValue(resolvedParams.step) ?? "0");
  const step = Number.isFinite(stepValue)
    ? Math.max(0, Math.min(questions.length, stepValue))
    : 0;

  const answers = questions.reduce<Record<string, number>>((acc, question) => {
    const raw = Number(getSingleValue(resolvedParams[question.id]) ?? "NaN");
    if (Number.isFinite(raw)) {
      acc[question.id] = raw;
    }
    return acc;
  }, {});

  const isComplete = step >= questions.length;
  const current = questions[step];
  const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const score = Math.round((total / (questions.length * 20)) * 100);

  const ranked = questions
    .map((question) => ({
      id: question.id,
      score: answers[question.id] ?? 0,
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((item) => insights[item.id as keyof typeof insights]);

  const weakest = questions
    .map((question) => ({
      id: question.id,
      score: answers[question.id] ?? 0,
    }))
    .sort((a, b) => a.score - b.score)[0];

  const recommendedResource =
    resourceRecommendations[weakest.id as keyof typeof resourceRecommendations];

  const subject = encodeURIComponent(`ReHive assessment follow-up (${score}/100)`);
  const body = encodeURIComponent(
    [
      "I completed the ReHive Business Growth Gap Assessment.",
      "",
      `Current score: ${score}/100`,
      "",
      "Highest-priority gaps:",
      ...ranked.map((gap, index) => `${index + 1}. ${gap}`),
      "",
      "I'd like a tailored breakdown and recommendations.",
    ].join("\n"),
  );

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link href="/" className="brand-mark">
          <span className="brand-mark__icon" />
          <span>ReHive</span>
        </Link>
        <div className="detail-header__actions">
          <Link href="/resources" className="button button-header-secondary">
            Resources
          </Link>
          <Link href="/#contact" className="button button-header-primary">
            General inquiry
          </Link>
        </div>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">Business Growth Gap Assessment</p>
        <h1>Find out where your current site is leaking trust, leads, and time.</h1>
        <p className="detail-hero__lead">
          This version is intentionally click-through and simple. Each answer
          takes you to the next step, then the final screen gives you a score
          and tailored next steps.
        </p>
      </section>

      <section className="detail-body">
        <div className="assessment-flow">
          <div className="assessment-flow__top">
            <span>
              {Math.min(step + 1, questions.length)} / {questions.length}
            </span>
            <div className="assessment-flow__track">
              <div
                className="assessment-flow__progress"
                style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {!isComplete ? (
            <div className="assessment-flow__question">
              <h2>{current.prompt}</h2>
              <div className="assessment-flow__options">
                {current.options.map((option) => (
                  <Link
                    key={option.label}
                    href={buildHref(step + 1, {
                      ...answers,
                      [current.id]: option.score,
                    })}
                    className="assessment-option assessment-option--link"
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
              {step > 0 ? (
                <div className="assessment-flow__nav">
                  <Link
                    href={buildHref(step - 1, answers)}
                    className="assessment-flow__back"
                  >
                    Back
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="assessment-flow__result">
              <div className="assessment-flow__score">
                <span>Your score</span>
                <strong>{score}</strong>
                <small>out of 100</small>
              </div>
              <div className="assessment-flow__insights">
                <h2>Highest-priority improvements</h2>
                <ul>
                  {ranked.map((insight) => (
                    <li key={insight}>{insight}</li>
                  ))}
                </ul>
              </div>
              <div className="assessment-flow__resource">
                <span>Recommended next read</span>
                <strong>{recommendedResource.title}</strong>
                <Link
                  href={recommendedResource.href}
                  className="button button-secondary"
                >
                  Open resource
                </Link>
              </div>
              <div className="assessment-flow__actions">
                <a
                  href={`mailto:hello@getrehive.com?subject=${subject}&body=${body}`}
                  className="button button-primary"
                >
                  Get tailored recommendations
                </a>
                <Link href="/#contact" className="button button-secondary">
                  Send a general inquiry
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
