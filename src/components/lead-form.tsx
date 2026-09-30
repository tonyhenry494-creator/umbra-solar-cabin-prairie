import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { useLeads, type LeadKind } from "@/lib/leads";

export function LeadForm({
  kind,
  extra,
  submitLabel,
}: {
  kind: LeadKind;
  extra?: ReactNode;
  submitLabel: string;
}) {
  const add = useLeads((s) => s.add);
  const [done, setDone] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const note = String(fd.get("note") ?? "").trim();
    if (!name || !email || !phone) {
      toast.error("Name, phone, and email are required.");
      return;
    }
    const lead = add({ kind, name, email, phone, note });
    setDone(lead.id);
    toast.success(`Received. Reference ${lead.id}`);
  }

  if (done) {
    return (
      <div className="border border-line bg-white p-6">
        <p className="font-display text-2xl font-semibold text-navy">We have it.</p>
        <p className="mt-2 text-sm text-muted">
          Reference <span className="text-fg">{done}</span>. A Cars Blu advisor will
          follow up at the number you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-line bg-white p-5 sm:p-6">
      {extra}
      <div>
        <Label htmlFor={`${kind}-name`}>Full name</Label>
        <Input id={`${kind}-name`} name="name" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor={`${kind}-phone`}>Phone</Label>
          <Input id={`${kind}-phone`} name="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor={`${kind}-email`}>Email</Label>
          <Input id={`${kind}-email`} name="email" type="email" required />
        </div>
      </div>
      <div>
        <Label htmlFor={`${kind}-note`}>Notes</Label>
        <Textarea id={`${kind}-note`} name="note" />
      </div>
      <Button type="submit" className="w-full" size="lg">
        {submitLabel}
      </Button>
    </form>
  );
}
