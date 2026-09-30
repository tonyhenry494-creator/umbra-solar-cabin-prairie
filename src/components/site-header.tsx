import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DEALER, HOURS } from "@/lib/dealership";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/finance", label: "Finance" },
  { to: "/trade-in", label: "Trade-in" },
  { to: "/service", label: "Service" },
  { to: "/visit", label: "Book a visit" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="size-11" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-wide text-navy">
              CARS BLU
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
              Miami · LLC
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm transition-colors duration-150",
                pathname === item.to ? "font-medium text-navy" : "text-muted hover:text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={DEALER.phoneHref} className="inline-flex items-center gap-1.5 text-sm text-navy">
            <Phone className="size-4" />
            {DEALER.phone}
          </a>
          <Button asChild size="sm">
            <Link to="/visit">Book a visit</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-sm text-navy"
            >
              {item.label}
            </Link>
          ))}
          <a href={DEALER.phoneHref} className="flex min-h-11 items-center text-sm text-blue">
            Call {DEALER.phone}
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Logo className="size-12" />
            <div>
              <p className="font-display text-2xl font-semibold tracking-wide">CARS BLU LLC</p>
              <p className="text-sm text-silver">Car dealer · Miami, Florida</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver">
            New, used, and luxury vehicles. Sales, financing, trade-ins, and service
            under one roof on Flagler Street.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-silver">Visit</p>
          <p className="mt-3 text-sm">{DEALER.address}</p>
          <p className="text-sm">{DEALER.city}</p>
          <a href={DEALER.phoneHref} className="mt-2 block text-sm text-white underline-offset-4 hover:underline">
            {DEALER.phone}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-silver">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-silver">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="text-right text-white">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
