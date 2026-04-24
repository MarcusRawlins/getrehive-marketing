"use client";

import { useMemo, useState } from "react";

const prompts = [
  {
    key: "clarity",
    title: "A new visitor can tell what we do within five seconds.",
    gap: "Positioning clarity is likely hurting trust and conversion.",
  },
  {
    key: "cta",
    title: "Our site gives people an obvious next step to inquire, book, or request a quote.",
    gap: "Your CTA path may be leaking motivated visitors.",
  },
  {
    key: "seo",
    title: "We have service pages or content built around how customers actually search.",
    gap: "Your SEO structure may be too thin to attract the right demand.",
  },
  {
    key: "mobile",
    title: "Our mobile experience feels fast, current, and easy to use.",
    gap: "A dated mobile experience may be weakening first impressions.",
  },
  {
    key: "workflow",
    title: "Lead, quote, booking, payment, and follow-up work together cleanly.",
    gap: "Your workflow may be relying on too much manual cleanup.",
  },
  {
    key: "reviews",
    title: "We actively collect reviews and use them to reinforce trust on the site.",
    gap: "Your credibility system may not be visible enough.",
  },
];

export function AssessmentWidget() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const summary = useMemo(() => {
    const yesCount = prompts.reduce(
      (count, prompt) => count + (answers[prompt.key] ? 1 : 0),
      0,
    );
    const score = Math.round((yesCount / prompts.length) * 100);
    const gaps = prompts
      .filter((prompt) => !answers[prompt.key])
      .slice(0, 3)
      .map((prompt) => prompt.gap);

    return {
      score,
      gaps,
    };
  }, [answers]);

  const subject = encodeURIComponent(
    `ReHive assessment inquiry (${summary.score}/100)`,
  );
  const body = encodeURIComponent(
    [
      "I completed the ReHive Business Growth Gap Assessment.",
      "",
      `Current score: ${summary.score}/100`,
      "",
      "Top gaps:",
      ...(summary.gaps.length > 0
        ? summary.gaps.map((gap, index) => `${index + 1}. ${gap}`)
        : ["No major gaps surfaced from the quick assessment."]),
      "",
      "I'd like a tailored breakdown for my business.",
    ].join("\n"),
  );

  return (
    <div className="assessment-widget">
      <div className="assessment-widget__summary">
        <div className="assessment-score">
          <span>Current score</span>
          <strong>{summary.score}</strong>
          <small>out of 100</small>
        </div>

        <div className="assessment-summary-copy">
          <h3>Quick scorecard</h3>
          <p>
            Check the statements that are already true for your business. The
            widget will surface the highest-priority gaps to fix next.
          </p>
        </div>
      </div>

      <div className="assessment-question-list">
        {prompts.map((prompt) => (
          <label key={prompt.key} className="assessment-question">
            <input
              type="checkbox"
              checked={Boolean(answers[prompt.key])}
              onChange={(event) =>
                setAnswers((current) => ({
                  ...current,
                  [prompt.key]: event.target.checked,
                }))
              }
            />
            <span>{prompt.title}</span>
          </label>
        ))}
      </div>

      <div className="assessment-results">
        <div className="assessment-results__copy">
          <h3>Top gaps to address</h3>
          {summary.gaps.length > 0 ? (
            <ul className="assessment-gap-list">
              {summary.gaps.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          ) : (
            <p className="assessment-results__empty">
              You checked every category. That usually means the next gains are
              in refinement, messaging, and deeper conversion work.
            </p>
          )}
        </div>

        <div className="assessment-results__actions">
          <a
            className="button button-primary"
            href={`mailto:hello@getrehive.com?subject=${subject}&body=${body}`}
          >
            Get a tailored breakdown
          </a>
          <a className="button button-secondary" href="#contact">
            Send a general inquiry instead
          </a>
        </div>
      </div>
    </div>
  );
}
