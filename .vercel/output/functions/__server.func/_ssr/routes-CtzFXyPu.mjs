import { C as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as BadgeCheck, n as Wrench, o as CalendarCheck, s as Banknote } from "../_libs/lucide-react.mjs";
import { i as DEALER, l as Button, o as VEHICLES } from "./router-B609BWld.mjs";
import { t as VehicleCard } from "./vehicle-card-C13vs6OU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CtzFXyPu.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80",
					alt: "Showroom cars",
					className: "absolute inset-0 size-full object-cover opacity-35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.22em] text-silver",
							children: "Cars Blu LLC · Downtown Miami"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-2xl font-display text-5xl font-semibold leading-[0.95] sm:text-6xl",
							children: "Drive it home from Flagler Street."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-base text-silver",
							children: "New, used, and luxury inventory. Financing, trade-ins, service, and scheduled visits — all from Suite 900."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/inventory",
									children: "Browse inventory"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-white/30 bg-transparent text-white hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: DEALER.phoneHref,
									children: ["Call ", DEALER.phone]
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: BadgeCheck,
						title: "Sales",
						body: "New, used, and luxury on one lot.",
						to: "/inventory"
					},
					{
						icon: Banknote,
						title: "Finance",
						body: "Apply in a few minutes. Same-day answers when we can.",
						to: "/finance"
					},
					{
						icon: CalendarCheck,
						title: "Trade-in",
						body: "Bring your current car. We appraise on site.",
						to: "/trade-in"
					},
					{
						icon: Wrench,
						title: "Service",
						body: "Maintenance and repairs by appointment.",
						to: "/service"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.to,
					className: "bg-white p-6 hover:bg-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
							className: "size-5 text-blue",
							strokeWidth: 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-semibold text-navy",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: s.body
						})
					]
				}, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: "On the lot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-4xl font-semibold text-navy",
					children: "Featured inventory"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/inventory",
					className: "text-sm text-blue",
					children: "View all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: VEHICLES.slice(0, 6).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleCard, { vehicle: v }, v.id))
			})]
		})
	] });
}
//#endregion
export { Home as component };
