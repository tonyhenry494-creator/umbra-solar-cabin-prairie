import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Label, r as LeadForm, t as Input } from "./lead-form-CttGzFDA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-B3g2DxLf.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold text-navy",
			children: "Service"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted",
			children: "Oil, brakes, diagnostics, and scheduled maintenance. Drop a request and we will confirm a bay time. Service follows dealer hours."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
			kind: "service",
			submitLabel: "Request a service appointment",
			extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "vehicle",
					children: "Vehicle"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "vehicle",
					name: "vehicle",
					placeholder: "Year make model"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "pref",
					children: "Preferred date"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "pref",
					name: "pref",
					type: "date"
				})] })]
			})
		})]
	});
}
//#endregion
export { ServicePage as component };
