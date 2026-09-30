import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { Input, Label } from "@/components/ui/input";

export const Route = createFileRoute("/service")({ component: ServicePage });

function ServicePage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-semibold text-navy">Service</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Oil, brakes, diagnostics, and scheduled maintenance. Drop a request
          and we will confirm a bay time. Service follows dealer hours.
        </p>
      </div>
      <LeadForm
        kind="service"
        submitLabel="Request a service appointment"
        extra={
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="vehicle">Vehicle</Label>
              <Input id="vehicle" name="vehicle" placeholder="Year make model" />
            </div>
            <div>
              <Label htmlFor="pref">Preferred date</Label>
              <Input id="pref" name="pref" type="date" />
            </div>
          </div>
        }
      />
    </main>
  );
}
