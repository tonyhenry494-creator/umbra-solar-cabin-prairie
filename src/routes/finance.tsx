import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { Label, Input } from "@/components/ui/input";

export const Route = createFileRoute("/finance")({ component: FinancePage });

function FinancePage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-semibold text-navy">Financing</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Apply with Cars Blu. We work with local and national lenders for new,
          used, and luxury purchases. Submit this form and a finance manager
          will call you.
        </p>
      </div>
      <LeadForm
        kind="finance"
        submitLabel="Submit application"
        extra={
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="amount">Requested amount</Label>
              <Input id="amount" name="amount" placeholder="$" />
            </div>
            <div>
              <Label htmlFor="credit">Credit range (optional)</Label>
              <Input id="credit" name="credit" placeholder="e.g. 680–720" />
            </div>
          </div>
        }
      />
    </main>
  );
}
