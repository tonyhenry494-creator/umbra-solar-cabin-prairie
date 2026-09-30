export type OccasionId =
  | "airport"
  | "hourly"
  | "wedding"
  | "corporate"
  | "nightlife"
  | "special";

export type VehicleId =
  | "s-class"
  | "escalade"
  | "phantom"
  | "sprinter"
  | "flying-spur"
  | "stretch";

export type Occasion = {
  id: OccasionId;
  name: string;
  blurb: string;
  note: string;
};

export type Vehicle = {
  id: VehicleId;
  name: string;
  maker: string;
  class: string;
  seats: number;
  luggage: number;
  hourly: number;
  transfer: number;
  image: string;
  interior: string;
  description: string;
  amenities: string[];
};

export const OCCASIONS: Occasion[] = [
  {
    id: "airport",
    name: "Airport transfer",
    blurb: "Flight tracking, meet-and-greet, and a quiet cabin to the curb.",
    note: "Fixed city-rate, billed as a transfer.",
  },
  {
    id: "hourly",
    name: "Hourly charter",
    blurb: "A chauffeur on your time. Three-hour minimum.",
    note: "Billed hourly from garage to garage.",
  },
  {
    id: "wedding",
    name: "Wedding",
    blurb: "Arrival, ceremony, portraits, and send-off, timed to the minute.",
    note: "Four-hour minimum. Champagne service on request.",
  },
  {
    id: "corporate",
    name: "Corporate",
    blurb: "Board meetings, roadshows, and discreet executive movement.",
    note: "Invoices available. NDA-trained chauffeurs.",
  },
  {
    id: "nightlife",
    name: "Evening",
    blurb: "Dinner, theatre, and a car that never leaves the block.",
    note: "Four-hour evening minimum after 7pm.",
  },
  {
    id: "special",
    name: "Private occasion",
    blurb: "Anniversaries, proposals, and anything that should feel considered.",
    note: "Custom routing and florals arranged on request.",
  },
];

export const VEHICLES: Vehicle[] = [
  {
    id: "s-class",
    name: "S-Class",
    maker: "Mercedes-Maybach",
    class: "Executive sedan",
    seats: 3,
    luggage: 3,
    hourly: 145,
    transfer: 185,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    description:
      "The quiet flagship. Rear-seat recline, four-zone climate, and a cabin designed for calls that should not be overheard.",
    amenities: ["Rear executive seats", "Wi-Fi", "Privacy glass", "Bottled water"],
  },
  {
    id: "escalade",
    name: "Escalade ESV",
    maker: "Cadillac",
    class: "Full-size SUV",
    seats: 6,
    luggage: 5,
    hourly: 165,
    transfer: 210,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1486496146582-9e11ad26d5f5?auto=format&fit=crop&w=1600&q=80",
    description:
      "Presence without theatre. Captain’s chairs, a high ride, and room for luggage that would not fit a sedan.",
    amenities: ["Captain chairs", "Wi-Fi", "USB-C", "Climate zones"],
  },
  {
    id: "phantom",
    name: "Phantom",
    maker: "Rolls-Royce",
    class: "State sedan",
    seats: 3,
    luggage: 3,
    hourly: 320,
    transfer: 390,
    image:
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    description:
      "Reserved for arrivals that must be remembered. Starlight headliner, gallery, and a chauffeur in full livery.",
    amenities: ["Starlight roof", "Champagne cooler", "Gallery", "White-glove"],
  },
  {
    id: "sprinter",
    name: "Sprinter Luxe",
    maker: "Mercedes-Benz",
    class: "Executive van",
    seats: 10,
    luggage: 10,
    hourly: 195,
    transfer: 260,
    image:
      "https://images.unsplash.com/photo-1464219782433-26bb3c2338c4?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
    description:
      "The boardroom that moves. Conference seating for ten, a galley, and enough hold for a touring party.",
    amenities: ["Conference seats", "Galley", "Wi-Fi", "Privacy cabin"],
  },
  {
    id: "flying-spur",
    name: "Flying Spur",
    maker: "Bentley",
    class: "Grand tourer",
    seats: 3,
    luggage: 3,
    hourly: 245,
    transfer: 310,
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80",
    description:
      "Coachwork and a W12 hush. Chosen when the journey is part of the evening, not merely the way there.",
    amenities: ["Mulliner cabin", "Wi-Fi", "Massage seats", "Privacy curtains"],
  },
  {
    id: "stretch",
    name: "Stretch",
    maker: "Lincoln",
    class: "Formal limousine",
    seats: 8,
    luggage: 4,
    hourly: 185,
    transfer: 240,
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80",
    interior:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
    description:
      "The classic silhouette. Fiber lighting, a bar, and a partition that keeps the night private.",
    amenities: ["Bar", "Partition", "Fiber lighting", "Sound system"],
  },
];

export const CITIES = [
  "New York",
  "Los Angeles",
  "Miami",
  "Chicago",
  "San Francisco",
  "Las Vegas",
] as const;

export function getVehicle(id: string | undefined) {
  return VEHICLES.find((v) => v.id === id);
}

export function getOccasion(id: string | undefined) {
  return OCCASIONS.find((o) => o.id === id);
}

export function quoteTotal(opts: {
  vehicle: Vehicle;
  occasion: OccasionId;
  hours: number;
}) {
  if (opts.occasion === "airport") return opts.vehicle.transfer;
  const minHours =
    opts.occasion === "hourly" ? 3 : opts.occasion === "nightlife" || opts.occasion === "wedding" ? 4 : 3;
  const hours = Math.max(opts.hours, minHours);
  return hours * opts.vehicle.hourly;
}

export function minHoursFor(occasion: OccasionId) {
  if (occasion === "airport") return 0;
  if (occasion === "nightlife" || occasion === "wedding") return 4;
  return 3;
}
