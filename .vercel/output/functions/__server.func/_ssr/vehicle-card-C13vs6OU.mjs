import { C as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as vehicleTitle, d as formatUsd, l as Button } from "./router-B609BWld.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vehicle-card-C13vs6OU.js
var import_jsx_runtime = require_jsx_runtime();
function VehicleCard({ vehicle: v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden border border-line bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/inventory/$id",
			params: { id: v.id },
			className: "relative block aspect-[16/10] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: v.image,
				alt: vehicleTitle(v),
				className: "size-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 bg-navy px-2 py-1 text-[10px] uppercase tracking-wide text-white",
				children: v.condition
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-navy",
					children: vehicleTitle(v)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						v.trim,
						" · ",
						v.color
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-medium text-fg",
					children: formatUsd(v.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle",
					children: [
						v.miles.toLocaleString(),
						" mi · ",
						v.mpg
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inventory/$id",
							params: { id: v.id },
							children: "Details"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							search: { vehicle: v.id },
							children: "Visit"
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { VehicleCard as t };
