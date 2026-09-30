import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { Input, Label } from "@/components/ui/input";

export const Route = createFileRoute("/trade-in")({ component: TradePage });

function TradePage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-semibold text-navy">Trade-in</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Tell us about your current vehicle. We appraise on site at Suite 900
          and can apply the value to your next car the same day.
        </p>
      </div>
      <LeadForm
        kind="trade"
        submitLabel="Request an appraisal"
        extra={
          <>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" />
              </div>
              <div>
                <Label htmlFor="make">Make</Label>
                <Input id="make" name="make" />
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" name="model" />
              </div>
            </div>
            <div>
              <Label htmlFor="miles">Miles</Label>
              <Input id="miles" name="miles" />
            </div>
          </>
        }
      />
    </main>
  );
}
