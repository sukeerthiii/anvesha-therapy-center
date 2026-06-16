"use client";

import { useState } from "react";
import { ageBands } from "@/lib/data";
import { Heart } from "./illustrations";

const concerns = [
  "Moving, sitting or walking",
  "Talking and understanding",
  "Everyday skills",
  "Learning and school",
  "Big feelings and senses",
  "I am not sure yet",
];

export function BookFlow() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState<string | null>(null);
  const [concern, setConcern] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (step === 3) {
    return (
      <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-8 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-soft">
          <Heart className="h-9 w-9" />
        </span>
        <h2 className="mt-4 text-2xl text-ink-deep">Thank you, {name || "friend"}.</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          We have your request. Someone from Anvesha will call you within one
          working day to find a time that suits you. There is nothing more you
          need to do right now.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-6 sm:p-8">
      <div className="mb-6 flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-pill ${
              i <= step ? "bg-green" : "bg-cream-deep"
            }`}
          />
        ))}
      </div>

      {step === 0 && (
        <div>
          <h2 className="text-2xl text-ink-deep">How old is your child?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ageBands.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAge(a);
                  setStep(1);
                }}
                className={`rounded-2xl border px-4 py-4 text-left font-medium transition ${
                  age === a
                    ? "border-green bg-green-soft text-ink-deep"
                    : "border-cream-deep bg-cream text-ink-deep hover:border-green"
                }`}
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
          <h2 className="mt-3 text-2xl text-ink-deep">
            What would you like help with?
          </h2>
          <div className="mt-4 grid gap-3">
            {concerns.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setConcern(c);
                  setStep(2);
                }}
                className="rounded-2xl border border-cream-deep bg-cream px-4 py-4 text-left font-medium text-ink-deep transition hover:border-green hover:bg-green-soft"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(3);
          }}
        >
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm font-semibold text-ink-soft hover:text-coral"
          >
            Back
          </button>
          <h2 className="mt-3 text-2xl text-ink-deep">
            How can we reach you?
          </h2>
          <p className="mt-1 text-ink-soft">
            Just a name and number. We will call you, gently.
          </p>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="font-display font-semibold text-ink">Your name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-cream-deep bg-cream px-4 py-3.5 text-ink-deep outline-none focus:border-green"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="font-display font-semibold text-ink">Phone number</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-cream-deep bg-cream px-4 py-3.5 text-ink-deep outline-none focus:border-green"
                placeholder="Your phone number"
              />
            </label>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            For: a {age?.toLowerCase()} child, {concern?.toLowerCase()}.
          </p>
          <button
            type="submit"
            className="mt-5 w-full rounded-pill bg-coral py-3.5 font-display font-semibold text-paper hover:brightness-110"
          >
            Request my free visit
          </button>
        </form>
      )}
    </div>
  );
}
