import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { OccasionId, VehicleId } from "./fleet";
import { getVehicle, getOccasion, quoteTotal } from "./fleet";

export type BookingStatus = "confirmed" | "cancelled";

export type Booking = {
  id: string;
  createdAt: string;
  status: BookingStatus;
  occasion: OccasionId;
  vehicle: VehicleId;
  city: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  hours: number;
  passengers: number;
  name: string;
  phone: string;
  email: string;
  notes: string;
  total: number;
};

export type Draft = {
  occasion: OccasionId;
  vehicle: VehicleId;
  city: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  hours: number;
  passengers: number;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const defaultDraft: Draft = {
  occasion: "airport",
  vehicle: "s-class",
  city: "New York",
  pickup: "",
  dropoff: "",
  date: "",
  time: "09:00",
  hours: 3,
  passengers: 2,
  name: "",
  phone: "",
  email: "",
  notes: "",
};

function refId() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `AU-${n}`;
}

type Store = {
  bookings: Booking[];
  draft: Draft;
  setDraft: (partial: Partial<Draft>) => void;
  resetDraft: () => void;
  confirmDraft: () => Booking | null;
  cancel: (id: string) => void;
};

export const useBookings = create<Store>()(
  persist(
    (set, get) => ({
      bookings: [],
      draft: defaultDraft,
      setDraft: (partial) =>
        set((s) => ({ draft: { ...s.draft, ...partial } })),
      resetDraft: () => set({ draft: defaultDraft }),
      confirmDraft: () => {
        const d = get().draft;
        const vehicle = getVehicle(d.vehicle);
        const occasion = getOccasion(d.occasion);
        if (!vehicle || !occasion) return null;
        if (!d.pickup || !d.date || !d.time || !d.name || !d.email) return null;
        const booking: Booking = {
          id: refId(),
          createdAt: new Date().toISOString(),
          status: "confirmed",
          occasion: d.occasion,
          vehicle: d.vehicle,
          city: d.city,
          pickup: d.pickup,
          dropoff: d.dropoff,
          date: d.date,
          time: d.time,
          hours: d.hours,
          passengers: d.passengers,
          name: d.name,
          phone: d.phone,
          email: d.email,
          notes: d.notes,
          total: quoteTotal({
            vehicle,
            occasion: d.occasion,
            hours: d.hours,
          }),
        };
        set((s) => ({ bookings: [booking, ...s.bookings] }));
        return booking;
      },
      cancel: (id) =>
        set((s) => ({
          bookings: s.bookings.map((b) =>
            b.id === id ? { ...b, status: "cancelled" } : b,
          ),
        })),
    }),
    { name: "aurelia-bookings" },
  ),
);
