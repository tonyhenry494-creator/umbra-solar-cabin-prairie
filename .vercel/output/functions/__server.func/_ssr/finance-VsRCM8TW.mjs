import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Label, r as LeadForm, t as Input } from "./lead-form-CttGzFDA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-VsRCM8TW.js
var import_jsx_runtime = require_jsx_runtime();
function FinancePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold text-navy",
			children: "Financing"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted",
			children: "Apply with Cars Blu. We work with local and national lenders for new, used, and luxury purchases. Submit this form and a finance manager will call you."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
			kind: "finance",
			submitLabel: "Submit application",
			extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "amount",
					children: "Requested amount"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "amount",
					name: "amount",
					placeholder: "$"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "credit",
					children: "Credit range (optional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "credit",
					name: "credit",
					placeholder: "e.g. 680–720"
				})] })]
			})
		})]
	});
}
//#endregion
export { FinancePage as component };
