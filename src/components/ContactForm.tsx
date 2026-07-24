"use client";

import { FormEvent, useState } from "react";
import { GhostButton } from "@/components/GhostButton";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const intent = String(data.get("intent") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      intent ? `Portfolio · ${intent}` : "Portfolio collaboration",
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${intent}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-card border border-lab-line bg-white/90 p-6 shadow-lift sm:p-8"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-lab-teal/15" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full border border-lab-line" />

      <h2 className="font-display text-2xl text-lab-ink">Start a conversation</h2>
      <p className="mt-2 text-sm text-lab-muted">
        Share a little context—I will reply by email.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-left text-sm text-lab-ink">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-pill border border-lab-line bg-lab-bg/40 px-4 py-2.5 text-sm text-lab-ink outline-none transition focus:border-lab-teal"
          />
        </label>
        <label className="block text-left text-sm text-lab-ink">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-pill border border-lab-line bg-lab-bg/40 px-4 py-2.5 text-sm text-lab-ink outline-none transition focus:border-lab-teal"
          />
        </label>
      </div>

      <label className="mt-4 block text-left text-sm text-lab-ink">
        Collaboration interest
        <select
          name="intent"
          className="mt-2 w-full rounded-pill border border-lab-line bg-lab-bg/40 px-4 py-2.5 text-sm text-lab-ink outline-none transition focus:border-lab-teal"
          defaultValue="R&D Internship"
        >
          <option>Research Mentorship</option>
          <option>R&D Internship</option>
          <option>Product Development</option>
          <option>Innovation Projects</option>
          <option>Academic Collaboration</option>
        </select>
      </label>

      <label className="mt-4 block text-left text-sm text-lab-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-[18px] border border-lab-line bg-lab-bg/40 px-4 py-3 text-sm text-lab-ink outline-none transition focus:border-lab-teal"
          placeholder="Tell me about the lab, team, or problem space…"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <GhostButton type="submit">Send message</GhostButton>
        {status === "sent" && (
          <p className="text-sm text-lab-teal">Opening your email client…</p>
        )}
      </div>
    </form>
  );
}
