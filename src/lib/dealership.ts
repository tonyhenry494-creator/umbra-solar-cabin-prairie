export const DEALER = {
  name: "Cars Blu LLC",
  short: "Cars Blu",
  tagline: "Miami’s full-service dealership",
  address: "66 W Flagler St, Suite 900",
  city: "Miami, FL 33130",
  phone: "(754) 349-5960",
  phoneHref: "tel:+17543495960",
  maps: "https://maps.google.com/?q=66+W+Flagler+St+Suite+900+Miami+FL+33130",
  email: "sales@carsblu.com",
} as const;

export const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "9 AM – 12 AM" },
  { day: "Tuesday", hours: "12–6 AM, 9 AM–6 PM" },
  { day: "Wednesday", hours: "9 AM – 6 PM" },
  { day: "Thursday", hours: "9 AM – 6 PM" },
  { day: "Friday", hours: "9 AM – 6 PM" },
  { day: "Saturday", hours: "10 AM – 7 PM" },
  { day: "Sunday", hours: "Closed" },
];

export type Condition = "New" | "Used";
export type Category = "Sedan" | "SUV" | "Truck" | "Luxury" | "Electric";

export type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  condition: Condition;
  category: Category;
  price: number;
  miles: number;
  mpg: string;
  color: string;
  image: string;
  highlights: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    id: "camry-25",
    year: 2025,
    make: "Toyota",
    model: "Camry",
    trim: "XSE",
    condition: "New",
    category: "Sedan",
    price: 33990,
    miles: 12,
    mpg: "44 combined",
    color: "Blueprint",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Hybrid", "Safety Sense 3.0", "Wireless CarPlay"],
  },
  {
    id: "crv-25",
    year: 2025,
    make: "Honda",
    model: "CR-V",
    trim: "EX-L",
    condition: "New",
    category: "SUV",
    price: 36450,
    miles: 8,
    mpg: "30 combined",
    color: "Platinum White",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
    highlights: ["AWD", "Leather", "Honda Sensing"],
  },
  {
    id: "tucson-25",
    year: 2025,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL",
    condition: "New",
    category: "SUV",
    price: 31200,
    miles: 5,
    mpg: "26 combined",
    color: "Amazon Gray",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Warranty", "Apple CarPlay", "Blind-spot"],
  },
  {
    id: "silverado-24",
    year: 2024,
    make: "Chevrolet",
    model: "Silverado 1500",
    trim: "LT",
    condition: "New",
    category: "Truck",
    price: 48990,
    miles: 18,
    mpg: "20 combined",
    color: "Northsky Blue",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Crew Cab", "Towing package", "Bed liner"],
  },
  {
    id: "sportage-25",
    year: 2025,
    make: "Kia",
    model: "Sportage",
    trim: "SX",
    condition: "New",
    category: "SUV",
    price: 33750,
    miles: 9,
    mpg: "28 combined",
    color: "Gravity Blue",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Panoramic roof", "Harman Kardon", "AWD"],
  },
  {
    id: "bmw-3",
    year: 2024,
    make: "BMW",
    model: "330i",
    trim: "xDrive",
    condition: "Used",
    category: "Luxury",
    price: 42900,
    miles: 18420,
    mpg: "29 combined",
    color: "Alpine White",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
    highlights: ["AWD", "Live Cockpit", "Certified"],
  },
  {
    id: "c300",
    year: 2023,
    make: "Mercedes-Benz",
    model: "C 300",
    trim: "4MATIC",
    condition: "Used",
    category: "Luxury",
    price: 39850,
    miles: 22110,
    mpg: "27 combined",
    color: "Obsidian Black",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80",
    highlights: ["MBUX", "Burmester", "One owner"],
  },
  {
    id: "model-y",
    year: 2024,
    make: "Tesla",
    model: "Model Y",
    trim: "Long Range",
    condition: "Used",
    category: "Electric",
    price: 39990,
    miles: 15200,
    mpg: "122 MPGe",
    color: "Deep Blue Metallic",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Autopilot", "White interior", "Full charge ~310 mi"],
  },
  {
    id: "cayenne",
    year: 2021,
    make: "Porsche",
    model: "Cayenne",
    trim: "S",
    condition: "Used",
    category: "Luxury",
    price: 62900,
    miles: 31880,
    mpg: "20 combined",
    color: "Jet Black",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Sport Chrono", "Air suspension", "Clean Carfax"],
  },
  {
    id: "rx350",
    year: 2023,
    make: "Lexus",
    model: "RX 350",
    trim: "Premium",
    condition: "Used",
    category: "Luxury",
    price: 47950,
    miles: 19840,
    mpg: "25 combined",
    color: "Eminent White",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Mark Levinson", "Safety System+", "AWD"],
  },
  {
    id: "f150",
    year: 2022,
    make: "Ford",
    model: "F-150",
    trim: "XLT",
    condition: "Used",
    category: "Truck",
    price: 36800,
    miles: 41200,
    mpg: "22 combined",
    color: "Atlas Blue",
    image:
      "https://images.unsplash.com/photo-1595754307346-c1d5b3f4c1c0?auto=format&fit=crop&w=1400&q=80",
    highlights: ["5.0 V8", "SuperCrew", "Tow package"],
  },
  {
    id: "a4",
    year: 2020,
    make: "Audi",
    model: "A4",
    trim: "Premium Plus",
    condition: "Used",
    category: "Sedan",
    price: 24990,
    miles: 48600,
    mpg: "30 combined",
    color: "Navarra Blue",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Quattro", "Virtual cockpit", "Service records"],
  },
];

export function getVehicle(id: string | undefined) {
  return VEHICLES.find((v) => v.id === id);
}

export function vehicleTitle(v: Vehicle) {
  return `${v.year} ${v.make} ${v.model}`;
}
