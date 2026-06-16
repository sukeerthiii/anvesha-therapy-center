import { BookFlow } from "@/components/book-flow";
import { site, whatsappLink } from "@/lib/site";

export const metadata = { title: "Book a free visit | Anvesha Therapy Center" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
          The first step is the hardest. Let us make it easy.
        </p>
        <h1 className="mt-2 text-4xl text-ink-deep">Book a free first visit</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Three short questions. We will call you back and take it from there.
          No cost, no commitment.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <BookFlow />

        <aside className="space-y-6">
          <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-6">
            <h2 className="font-display text-lg font-bold text-ink-deep">
              Rather just talk?
            </h2>
            <p className="mt-2 text-ink-soft">
              Call us or send a message on WhatsApp. A real person will answer.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappLink(
                  "Hi Anvesha, I would like to know more about therapy for my child.",
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-pill bg-green py-3 text-center font-display font-semibold text-paper"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${site.phone}`}
                className="rounded-pill border-2 border-ink py-3 text-center font-display font-semibold text-ink"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-6">
            <h2 className="font-display text-lg font-bold text-ink-deep">
              Visit us
            </h2>
            <p className="mt-2 text-ink-soft">{site.address}</p>
            <p className="mt-1 text-ink-soft">{site.hours}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
