"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    id: "clarity",
    prompt: "When someone lands on your site, can they tell what you do and why you are different within a few seconds?",
    options: [
      { label: "Not really", score: 0 },
      { label: "Somewhat", score: 10 },
      { label: "Yes, clearly", score: 20 },
    ],
  },
  {
    id: "conversion",
    prompt: "How easy is it for a motivated visitor to request a quote, book, or start a conversation?",
    options: [
      { label: "Confusing or weak", score: 0 },
      { label: "Functional but not strong", score: 10 },
      { label: "Very clear and direct", score: 20 },
    ],
  },
  {
    id: "search",
    prompt: "How confident are you that your site is built around the way customers actually search for your services?",
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
    prompt: "After a lead comes in, how much manual work does your team still do to quote, follow up, and move the customer forward?",
    options: [
      { label: "A lot", score: 0 },
      { label: "Some", score: 10 },
      { label: "Very little", score: 20 },
    ],
  },
];

const insights = {
  clarity: "Your positioning may be too vague, which usually lowers trust and makes every other part of the funnel work harder.",
  conversion:
    "The site may not be giving motivated visitors a strong enough path to inquire, book, or request a quote.",
  search:
    "Your page structure may not be aligned closely enough with high-intent service and local search behavior.",
  mobile:
    "A weak mobile experience can quietly damage first impressions, especially for service businesses getting local traffic.",
  workflow:
    "Manual follow-up and disconnected tools often mean leads are being slowed down or dropped after the click.",
} as const;

export function AssessmentFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selection, setSelection] = useState<number | null>(null);

  const current = questions[step];
  const isComplete = step >= questions.length;

  const result = useMemo(() => {
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

    return { score, ranked };
  }, [answers]);

  const subject = encodeURIComponent(
    `ReHive assessment follow-up (${result.score}/100)`,
  );
  const body = encodeURIComponent(
    [
      "I completed the ReHive Business Growth Gap Assessment.",
      "",
      `Current score: ${result.score}/100`,
      "",
      "Highest-priority gaps:",
      ...result.ranked.map((gap, index) => `${index + 1}. ${gap}`),
      "",
      "I'd like a tailored breakdown and recommendations.",
    ].join("\n"),
  );

  function commitAnswer() {
    if (selection === null || isComplete) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [current.id]: selection,
    }));
    setStep((currentStep) => currentStep + 1);
    setSelection(null);
  }

  function goBack() {
    const previousStep = Math.max(0, step - 1);
    setStep(previousStep);
    const previousQuestion = questions[previousStep];
    setSelection(answers[previousQuestion.id] ?? null);
  }

  return (
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
              <button
                key={option.label}
                type="button"
                className={`assessment-option ${
                  selection === option.score ? "is-selected" : ""
                }`.trim()}
                onClick={() => setSelection(option.score)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="assessment-flow__nav">
            <button
              type="button"
              className="button button-primary"
              onClick={commitAnswer}
              disabled={selection === null}
            >
              Continue
            </button>
            {step > 0 ? (
              <button
                type="button"
                className="assessment-flow__back"
                onClick={goBack}
              >
                Back
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="assessment-flow__result">
          <div className="assessment-flow__score">
            <span>Your score</span>
            <strong>{result.score}</strong>
            <small>out of 100</small>
          </div>
          <div className="assessment-flow__insights">
            <h2>Highest-priority improvements</h2>
            <ul>
              {result.ranked.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
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
  );
}
