"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  therapies,
  therapists,
  conditions,
  ageBands,
  modes,
  conditionMap,
  therapyMap,
} from "@/lib/data";
import { Avatar, Pill, TherapySpotIcon } from "./ui";

function ChipGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: { value: string; label: string }[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = selected.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onToggle(o.value)}
              className={`rounded-pill px-3.5 py-2 text-sm font-medium transition ${
                on
                  ? "bg-ink text-paper"
                  : "bg-cream-deep text-ink-deep hover:bg-gold-soft"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function useToggle() {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (v: string) =>
    setSel((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
  return [sel, toggle, () => setSel([])] as const;
}

export function TherapyExplorer({ initialCondition }: { initialCondition?: string }) {
  const [cond, toggleCond] = useToggle();
  const [age, toggleAge] = useToggle();
  const [mode, toggleMode] = useToggle();
  const [open, setOpen] = useState(false);

  const activeCond = initialCondition ? [initialCondition] : cond;

  const results = useMemo(() => {
    return therapies.filter((t) => {
      const okCond =
        activeCond.length === 0 ||
        activeCond.some((c) => t.conditions.includes(c));
      const okAge = age.length === 0 || age.some((a) => t.ages.includes(a as never));
      const okMode =
        mode.length === 0 || mode.some((m) => t.modes.includes(m as never));
      return okCond && okAge && okMode;
    });
  }, [activeCond, age, mode]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mb-4 w-full rounded-pill border border-cream-deep bg-paper px-4 py-3 font-display font-semibold text-ink lg:hidden"
          aria-expanded={open}
        >
          {open ? "Hide filters" : "Filter therapies"}
        </button>
        <div
          className={`space-y-6 rounded-[1.5rem] border border-cream-deep bg-paper p-5 ${
            open ? "block" : "hidden"
          } lg:block`}
        >
          {!initialCondition && (
            <ChipGroup
              label="Condition"
              options={conditions.map((c) => ({ value: c.slug, label: c.name }))}
              selected={cond}
              onToggle={toggleCond}
            />
          )}
          <ChipGroup
            label="Age"
            options={ageBands.map((a) => ({ value: a, label: a }))}
            selected={age}
            onToggle={toggleAge}
          />
          <ChipGroup
            label="Where"
            options={modes.map((m) => ({ value: m, label: m }))}
            selected={mode}
            onToggle={toggleMode}
          />
        </div>
      </aside>

      <div>
        <p className="mb-4 text-ink-soft">
          {results.length} {results.length === 1 ? "therapy" : "therapies"}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {results.map((t) => (
            <Link
              key={t.slug}
              href={`/therapies/${t.slug}`}
              className="group rounded-[1.5rem] border border-cream-deep bg-paper p-6 transition hover:border-green hover:shadow-sm"
            >
              <TherapySpotIcon slug={t.slug} size={56} />
              <h3 className="mt-3 text-xl text-ink-deep group-hover:text-coral">
                {t.name}
              </h3>
              <p className="mt-2 text-ink-soft">{t.short}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.modes.map((m) => (
                  <Pill key={m} tone="green">
                    {m}
                  </Pill>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {results.length === 0 && (
          <p className="rounded-2xl bg-cream-deep p-6 text-ink-deep">
            No therapies match yet. Try removing a filter, or just{" "}
            <Link href="/contact" className="font-semibold text-coral">
              talk to us
            </Link>
            . We will guide you.
          </p>
        )}
      </div>
    </div>
  );
}

export function TherapistExplorer() {
  const [therapy, toggleTherapy] = useToggle();
  const [cond, toggleCond] = useToggle();
  const [lang, toggleLang] = useToggle();
  const [open, setOpen] = useState(false);

  const allLangs = Array.from(new Set(therapists.flatMap((t) => t.languages)));

  const results = useMemo(() => {
    return therapists.filter((t) => {
      const okT =
        therapy.length === 0 || therapy.some((s) => t.therapySlugs.includes(s));
      const okC = cond.length === 0 || cond.some((c) => t.conditions.includes(c));
      const okL = lang.length === 0 || lang.some((l) => t.languages.includes(l));
      return okT && okC && okL;
    });
  }, [therapy, cond, lang]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mb-4 w-full rounded-pill border border-cream-deep bg-paper px-4 py-3 font-display font-semibold text-ink lg:hidden"
          aria-expanded={open}
        >
          {open ? "Hide filters" : "Filter therapists"}
        </button>
        <div
          className={`space-y-6 rounded-[1.5rem] border border-cream-deep bg-paper p-5 ${
            open ? "block" : "hidden"
          } lg:block`}
        >
          <ChipGroup
            label="Specialises in"
            options={therapies.map((t) => ({ value: t.slug, label: t.name }))}
            selected={therapy}
            onToggle={toggleTherapy}
          />
          <ChipGroup
            label="Works with"
            options={conditions.map((c) => ({ value: c.slug, label: c.name }))}
            selected={cond}
            onToggle={toggleCond}
          />
          <ChipGroup
            label="Speaks"
            options={allLangs.map((l) => ({ value: l, label: l }))}
            selected={lang}
            onToggle={toggleLang}
          />
        </div>
      </aside>

      <div>
        <p className="mb-4 text-ink-soft">
          {results.length} {results.length === 1 ? "therapist" : "therapists"}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {results.map((p) => (
            <Link
              key={p.slug}
              href={`/therapists/${p.slug}`}
              className="rounded-[1.5rem] border border-cream-deep bg-paper p-6 transition hover:border-green hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Avatar name={p.name} size={60} />
                <span>
                  <span className="block font-display text-lg font-bold text-ink-deep">
                    {p.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{p.title}</span>
                </span>
              </div>
              <p className="mt-3 text-ink-soft">{p.bio}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.therapySlugs.map((s) => (
                  <Pill key={s}>{therapyMap[s]?.name}</Pill>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export { conditionMap };
