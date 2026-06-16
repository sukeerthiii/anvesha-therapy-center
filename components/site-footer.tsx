import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-cream-deep bg-cream-deep/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Image
              src="/brand/logo-mark.png"
              alt="Anvesha logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span className="font-display text-xl font-bold text-ink">
              {site.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-ink-soft">{site.promise}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Explore
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/who-we-help" className="text-ink-deep hover:text-coral">
                Who we help
              </Link>
            </li>
            <li>
              <Link href="/therapies" className="text-ink-deep hover:text-coral">
                Therapies
              </Link>
            </li>
            <li>
              <Link href="/therapists" className="text-ink-deep hover:text-coral">
                Our therapists
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-ink-deep hover:text-coral">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Visit us
          </h3>
          <ul className="mt-3 space-y-2 text-ink-deep">
            <li>{site.address}</li>
            <li>{site.hours}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-coral">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-coral">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Take the first step
          </h3>
          <p className="mt-3 text-ink-soft">
            The first visit is free. We will simply listen.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-pill bg-coral px-5 py-3 text-center font-display font-semibold text-paper"
            >
              Book a free visit
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-pill border-2 border-green px-5 py-3 text-center font-display font-semibold text-green"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-ink-soft sm:flex-row sm:px-6">
          <p>
            {site.full}. {site.tagline}.
          </p>
          <p>Made with care for every family.</p>
        </div>
      </div>
    </footer>
  );
}
