import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as vehicleTitle, i as DEALER, r as Route$1, s as getVehicle } from "./router-B609BWld.mjs";
import { n as Label, r as LeadForm, t as Input } from "./lead-form-CttGzFDA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-DpqMKNDl.js
var import_jsx_runtime = require_jsx_runtime();
function VisitPage() {
	const { vehicle } = Route$1.useSearch();
	const v = getVehicle(vehicle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold text-navy",
				children: "Book a visit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"Come see a vehicle at ",
					DEALER.address,
					", ",
					DEALER.city,
					". We will hold it on the floor for your appointment."
				]
			}),
			v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 border border-line bg-white px-4 py-3 text-sm",
				children: ["Interested in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: vehicleTitle(v) })]
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
			kind: "visit",
			submitLabel: "Book this visit",
			extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "vehicleId",
				value: v?.id ?? ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "when",
				children: "Preferred date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "when",
				name: "when",
				type: "date"
			})] })] })
		})]
	});
}
//#endregion
export { VisitPage as component };
