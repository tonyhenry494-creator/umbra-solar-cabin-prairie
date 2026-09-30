import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { VehicleCard } from "@/components/vehicle-card";
import { VEHICLES, type Condition } from "@/lib/dealership";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/inventory")({ component: InventoryPage });

const FILTERS: Array<"All" | Condition | "Luxury"> = ["All", "New", "Used", "Luxury"];

function InventoryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(() => {
    if (filter === "All") return VEHICLES;
    if (filter === "Luxury") return VEHICLES.filter((v) => v.category === "Luxury");
    return VEHICLES.filter((v) => v.condition === filter);
  }, [filter]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-navy">Inventory</h1>
      <p className="mt-2 text-sm text-muted">
        {VEHICLES.length} vehicles in Miami. Filter by condition or luxury.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "h-10 px-4 text-sm border",
              filter === f ? "border-navy bg-navy text-white" : "border-line bg-white text-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>
    </main>
  );
}
