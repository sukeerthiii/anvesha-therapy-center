"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/who-we-help", label: "Who we help" },
  { href: "/therapies", label: "Therapies" },
  { href: "/therapists", label: "Our therapists" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-deep bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-mark.png"
            alt="Anvesha logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Therapy Center
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-ink-deep transition hover:text-coral"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-pill bg-coral px-5 py-2.5 font-display font-semibold text-paper transition hover:brightness-110"
          >
            Book a free visit
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-deep text-ink lg:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 rounded bg-ink" />
            <span className="block h-0.5 w-6 rounded bg-ink" />
            <span className="block h-0.5 w-6 rounded bg-ink" />
          </div>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-cream-deep bg-cream px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream-deep py-3.5 text-lg font-medium text-ink-deep"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-pill bg-coral px-5 py-3.5 text-center font-display font-semibold text-paper"
          >
            Book a free visit
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
