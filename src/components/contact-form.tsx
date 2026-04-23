"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "opening";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `New ReHive project inquiry from ${name || business || "website lead"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Business: ${business || "Not provided"}`,
        `Interested in: ${service || "Not provided"}`,
        "",
        "Project details:",
        message || "Not provided",
      ].join("\n"),
    );

    setStatus("opening");
    window.location.href = `mailto:hello@getrehive.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("idle"), 1200);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@business.com"
            required
          />
        </label>
      </div>

      <div className="field-grid">
        <label>
          Business
          <input
            type="text"
            name="business"
            placeholder="Business name"
            required
          />
        </label>

        <label>
          What do you need?
          <input
            type="text"
            name="service"
            placeholder="Website, automation, custom build..."
            required
          />
        </label>
      </div>

      <label>
        Where is the current setup falling short?
        <textarea
          name="message"
          placeholder="Tell us what tools you use today, what still feels manual, and what outcome you want."
          required
        />
      </label>

      <button className="button button-primary" type="submit">
        {status === "opening" ? "Opening your email app..." : "Send inquiry"}
      </button>

      <p className="contact-form__footnote">
        This form opens a draft to <a href="mailto:hello@getrehive.com">hello@getrehive.com</a> with
        your project details prefilled. We can swap this to a direct backend
        submission flow once the production email service is chosen.
      </p>
    </form>
  );
}
