import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { DEALER, HOURS } from "@/lib/dealership";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-semibold text-navy">Contact</h1>
        <dl className="mt-6 space-y-5 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Address</dt>
            <dd className="mt-1">
              {DEALER.address}
              <br />
              {DEALER.city}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Phone</dt>
            <dd className="mt-1">
              <a href={DEALER.phoneHref} className="text-blue">
                {DEALER.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Hours</dt>
            <dd className="mt-2 space-y-1">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 max-w-xs">
                  <span className="text-muted">{h.day}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </dd>
          </div>
        </dl>
        <a
          href={DEALER.maps}
          className="mt-6 inline-block text-sm text-blue"
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
      <LeadForm kind="contact" submitLabel="Send message" />
    </main>
  );
}
