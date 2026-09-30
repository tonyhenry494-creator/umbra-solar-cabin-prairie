import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getVehicle, vehicleTitle } from "@/lib/dealership";
import { formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/inventory/$id")({ component: Detail });

function Detail() {
  const { id } = Route.useParams();
  const v = getVehicle(id);
  if (!v) throw notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link to="/inventory" className="text-sm text-blue">
        All inventory
      </Link>
      <div className="mt-5 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden border border-line">
          <img src={v.image} alt={vehicleTitle(v)} className="aspect-[16/10] w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            {v.condition} · {v.category}
          </p>
          <h1 className="mt-1 font-display text-4xl font-semibold text-navy">{vehicleTitle(v)}</h1>
          <p className="text-muted">
            {v.trim} · {v.color}
          </p>
          <p className="mt-4 text-3xl font-medium text-fg">{formatUsd(v.price)}</p>
          <dl className="mt-6 grid grid-cols-2 gap-px border border-line bg-line">
            {[
              ["Miles", v.miles.toLocaleString()],
              ["Economy", v.mpg],
              ["Condition", v.condition],
              ["Color", v.color],
            ].map(([k, val]) => (
              <div key={k} className="bg-white px-4 py-3">
                <dt className="text-xs text-subtle">{k}</dt>
                <dd className="text-sm">{val}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-2">
            {v.highlights.map((h) => (
              <li key={h} className="border border-line bg-white px-3 py-1.5 text-sm text-muted">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/visit" search={{ vehicle: v.id }}>
                Book a visit
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/finance">Apply for finance</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/trade-in">Start a trade-in</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
