import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Label, r as LeadForm, t as Input } from "./lead-form-CttGzFDA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trade-in-DZMzW7w8.js
var import_jsx_runtime = require_jsx_runtime();
function TradePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold text-navy",
			children: "Trade-in"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted",
			children: "Tell us about your current vehicle. We appraise on site at Suite 900 and can apply the value to your next car the same day."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
			kind: "trade",
			submitLabel: "Request an appraisal",
			extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "year",
						children: "Year"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "year",
						name: "year"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "make",
						children: "Make"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "make",
						name: "make"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "model",
						children: "Model"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "model",
						name: "model"
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "miles",
				children: "Miles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "miles",
				name: "miles"
			})] })] })
		})]
	});
}
//#endregion
export { TradePage as component };
