"use client";

import { useState } from "react";
import { therapies } from "@/lib/data";
import { Heart } from "./illustrations";

export function ApplyFlow() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const toggle = (s: string) =>
    setTags((t) => (t.includes(s) ? t.filter((x) => x !== s) : [...t, s]));

  if (done) {
    return (
      <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-8 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-soft">
          <Heart className="h-9 w-9" />
        </span>
        <h2 className="mt-4 text-2xl text-ink-deep">Thank you, {name || "friend"}.</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          We have your details and we will be in touch soon. Thank you for
          wanting to do this work. It matters more than you know.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-[1.5rem] border border-cream-deep bg-paper p-6 sm:p-8"
    >
      <h2 className="text-2xl text-ink-deep">Tell us about you</h2>
      <div className="mt-5 space-y-5">
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

        <div>
          <span className="font-display font-semibold text-ink">
            What do you do?
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {therapies.map((t) => {
              const on = tags.includes(t.slug);
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => toggle(t.slug)}
                  className={`rounded-pill px-3.5 py-2 text-sm font-medium transition ${
                    on
                      ? "bg-ink text-paper"
                      : "bg-cream-deep text-ink-deep hover:bg-gold-soft"
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block">
          <span className="font-display font-semibold text-ink">
            Years working with children
          </span>
          <input
            className="mt-1 w-full rounded-2xl border border-cream-deep bg-cream px-4 py-3.5 text-ink-deep outline-none focus:border-green"
            placeholder="For example, 3 years"
          />
        </label>

        <label className="block">
          <span className="font-display font-semibold text-ink">
            Anything you would like us to know
          </span>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-2xl border border-cream-deep bg-cream px-4 py-3.5 text-ink-deep outline-none focus:border-green"
            placeholder="A few words about you, or a link to your CV"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-pill bg-coral py-3.5 font-display font-semibold text-paper hover:brightness-110"
      >
        Send my details
      </button>
    </form>
  );
}
