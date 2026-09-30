import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Banknote, CalendarCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VehicleCard } from "@/components/vehicle-card";
import { DEALER, VEHICLES } from "@/lib/dealership";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
          alt="Showroom cars"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-silver">
            Cars Blu LLC · Downtown Miami
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">
            Drive it home from Flagler Street.
          </h1>
          <p className="mt-4 max-w-lg text-base text-silver">
            New, used, and luxury inventory. Financing, trade-ins, service, and
            scheduled visits — all from Suite 900.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/inventory">Browse inventory</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <a href={DEALER.phoneHref}>Call {DEALER.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgeCheck, title: "Sales", body: "New, used, and luxury on one lot.", to: "/inventory" },
            { icon: Banknote, title: "Finance", body: "Apply in a few minutes. Same-day answers when we can.", to: "/finance" },
            { icon: CalendarCheck, title: "Trade-in", body: "Bring your current car. We appraise on site.", to: "/trade-in" },
            { icon: Wrench, title: "Service", body: "Maintenance and repairs by appointment.", to: "/service" },
          ].map((s) => (
            <Link key={s.title} to={s.to} className="bg-white p-6 hover:bg-paper">
              <s.icon className="size-5 text-blue" strokeWidth={1.75} />
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy">{s.title}</h2>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">On the lot</p>
            <h2 className="mt-1 font-display text-4xl font-semibold text-navy">Featured inventory</h2>
          </div>
          <Link to="/inventory" className="text-sm text-blue">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.slice(0, 6).map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </section>
    </main>
  );
}
