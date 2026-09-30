import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LeadKind = "visit" | "finance" | "trade" | "service" | "contact";

export type Lead = {
  id: string;
  kind: LeadKind;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  note: string;
};

type Store = {
  leads: Lead[];
  add: (lead: Omit<Lead, "id" | "createdAt">) => Lead;
};

export const useLeads = create<Store>()(
  persist(
    (set) => ({
      leads: [],
      add: (lead) => {
        const row: Lead = {
          ...lead,
          id: `CB-${Math.floor(100000 + Math.random() * 900000)}`,
          createdAt: new Date().toISOString(),
        };
        set((s) => ({ leads: [row, ...s.leads] }));
        return row;
      },
    }),
    { name: "cars-blu-leads" },
  ),
);
