import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as VEHICLES, u as cn } from "./router-B609BWld.mjs";
import { t as VehicleCard } from "./vehicle-card-C13vs6OU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inventory-BkjJtpuS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"New",
	"Used",
	"Luxury"
];
function InventoryPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => {
		if (filter === "All") return VEHICLES;
		if (filter === "Luxury") return VEHICLES.filter((v) => v.category === "Luxury");
		return VEHICLES.filter((v) => v.condition === filter);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold text-navy",
				children: "Inventory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [VEHICLES.length, " vehicles in Miami. Filter by condition or luxury."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f),
					className: cn("h-10 px-4 text-sm border", filter === f ? "border-navy bg-navy text-white" : "border-line bg-white text-fg"),
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleCard, { vehicle: v }, v.id))
			})
		]
	});
}
//#endregion
export { InventoryPage as component };
