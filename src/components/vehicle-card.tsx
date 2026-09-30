import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { Vehicle } from "@/lib/dealership";
import { vehicleTitle } from "@/lib/dealership";
import { formatUsd } from "@/lib/utils";

export function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  return (
    <article className="flex flex-col overflow-hidden border border-line bg-white">
      <Link to="/inventory/$id" params={{ id: v.id }} className="relative block aspect-[16/10] overflow-hidden">
        <img src={v.image} alt={vehicleTitle(v)} className="size-full object-cover" />
        <span className="absolute left-3 top-3 bg-navy px-2 py-1 text-[10px] uppercase tracking-wide text-white">
          {v.condition}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-navy">{vehicleTitle(v)}</h3>
          <p className="text-sm text-muted">
            {v.trim} · {v.color}
          </p>
        </div>
        <p className="text-lg font-medium text-fg">{formatUsd(v.price)}</p>
        <p className="text-xs text-subtle">
          {v.miles.toLocaleString()} mi · {v.mpg}
        </p>
        <div className="mt-auto flex gap-2 pt-1">
          <Button asChild size="sm" className="flex-1">
            <Link to="/inventory/$id" params={{ id: v.id }}>
              Details
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/visit" search={{ vehicle: v.id }}>
              Visit
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
