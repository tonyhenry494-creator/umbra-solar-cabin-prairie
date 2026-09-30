import { C as require_jsx_runtime, Y as notFound, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as vehicleTitle, d as formatUsd, l as Button, n as Route, s as getVehicle } from "./router-B609BWld.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inventory._id-C_l8Hfxy.js
var import_jsx_runtime = require_jsx_runtime();
function Detail() {
	const { id } = Route.useParams();
	const v = getVehicle(id);
	if (!v) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/inventory",
			className: "text-sm text-blue",
			children: "All inventory"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: v.image,
					alt: vehicleTitle(v),
					className: "aspect-[16/10] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: [
						v.condition,
						" · ",
						v.category
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl font-semibold text-navy",
					children: vehicleTitle(v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						v.trim,
						" · ",
						v.color
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-3xl font-medium text-fg",
					children: formatUsd(v.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 grid grid-cols-2 gap-px border border-line bg-line",
					children: [
						["Miles", v.miles.toLocaleString()],
						["Economy", v.mpg],
						["Condition", v.condition],
						["Color", v.color]
					].map(([k, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-subtle",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm",
							children: val
						})]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 flex flex-wrap gap-2",
					children: v.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-line bg-white px-3 py-1.5 text-sm text-muted",
						children: h
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/visit",
								search: { vehicle: v.id },
								children: "Book a visit"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/finance",
								children: "Apply for finance"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/trade-in",
								children: "Start a trade-in"
							})
						})
					]
				})
			] })]
		})]
	});
}
//#endregion
export { Detail as component };
