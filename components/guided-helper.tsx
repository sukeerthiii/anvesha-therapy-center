"use client";

import { useState } from "react";
import Link from "next/link";
import { ageBands, therapyMap } from "@/lib/data";

const concerns = [
  { id: "moving", label: "Moving, sitting or walking", therapies: ["physiotherapy", "early-intervention"] },
  { id: "talking", label: "Talking and understanding", therapies: ["speech-language-therapy"] },
  { id: "daily", label: "Everyday skills like eating and dressing", therapies: ["occupational-therapy"] },
  { id: "learning", label: "Learning and getting ready for school", therapies: ["special-education"] },
  { id: "feelings", label: "Big feelings and busy senses", therapies: ["behavioral-therapy", "sensory-integration"] },
  { id: "unsure", label: "I am not sure yet", therapies: ["early-intervention", "occupational-therapy"] },
];

export function GuidedHelper() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState<string | null>(null);
  const [concern, setConcern] = useState<(typeof concerns)[number] | null>(null);

  const reset = () => {
    setStep(0);
    setAge(null);
    setConcern(null);
  };

  return (
    <div className="rounded-[1.75rem] border border-cream-deep bg-paper p-6 shadow-sm sm:p-8">
      {step === 0 && (
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
            Not sure where to start?
          </p>
          <h3 className="mt-1 text-2xl text-ink-deep">
            Tell us a little about your child.
          </h3>
          <p className="mt-5 font-display font-semibold text-ink">
            How old is your child?
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {ageBands.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAge(a);
                  setStep(1);
                }}
                className="rounded-2xl border border-cream-deep bg-cream px-4 py-4 text-left font-medium text-ink-deep transition hover:border-green hover:bg-green-soft"
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="text-sm font-semibold text-ink-soft hover:text-coral"
          >
            Back
          </button>
          <p className="mt-3 font-display font-semibold text-ink">
            What is on your mind the most?
          </p>
          <div className="mt-3 grid gap-3">
            {concerns.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setConcern(c);
                  setStep(2);
                }}
                className="rounded-2xl border border-cream-deep bg-cream px-4 py-4 text-left font-medium text-ink-deep transition hover:border-green hover:bg-green-soft"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && concern && (
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
            You are in the right place
          </p>
          <h3 className="mt-1 text-2xl text-ink-deep">
            We help children {age?.includes("0 to 3") ? "this young" : "like yours"} every day.
          </h3>
          <p className="mt-2 text-ink-soft">
            Based on what you shared, these are a good place to begin. The first
            visit is free, and we will guide you from there.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {concern.therapies.map((slug) => {
              const t = therapyMap[slug];
              if (!t) return null;
              return (
                <Link
                  key={slug}
                  href={`/therapies/${slug}`}
                  className="rounded-pill bg-sky-soft px-4 py-2 font-medium text-ink hover:bg-gold-soft"
                >
                  {t.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-pill bg-coral px-6 py-3.5 text-center font-display font-semibold text-paper hover:brightness-110"
            >
              Book a free visit
            </Link>
            <button
              type="button"
              onClick={reset}
              className="rounded-pill border-2 border-ink px-6 py-3.5 font-display font-semibold text-ink hover:bg-ink hover:text-paper"
            >
              Start again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
