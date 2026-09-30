import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { Input, Label } from "@/components/ui/input";
import { DEALER, getVehicle, vehicleTitle } from "@/lib/dealership";

type Search = { vehicle?: string };

export const Route = createFileRoute("/visit")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    vehicle: typeof s.vehicle === "string" ? s.vehicle : undefined,
  }),
  component: VisitPage,
});

function VisitPage() {
  const { vehicle } = Route.useSearch();
  const v = getVehicle(vehicle);

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-semibold text-navy">Book a visit</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Come see a vehicle at {DEALER.address}, {DEALER.city}. We will hold it
          on the floor for your appointment.
        </p>
        {v ? (
          <p className="mt-4 border border-line bg-white px-4 py-3 text-sm">
            Interested in <strong>{vehicleTitle(v)}</strong>
          </p>
        ) : null}
      </div>
      <LeadForm
        kind="visit"
        submitLabel="Book this visit"
        extra={
          <>
            <input type="hidden" name="vehicleId" value={v?.id ?? ""} />
            <div>
              <Label htmlFor="when">Preferred date</Label>
              <Input id="when" name="when" type="date" />
            </div>
          </>
        }
      />
    </main>
  );
}
