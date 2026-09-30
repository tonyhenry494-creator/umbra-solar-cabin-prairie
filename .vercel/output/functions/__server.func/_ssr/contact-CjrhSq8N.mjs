import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as HOURS, i as DEALER } from "./router-B609BWld.mjs";
import { r as LeadForm } from "./lead-form-CttGzFDA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CjrhSq8N.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold text-navy",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-1",
						children: [
							DEALER.address,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							DEALER.city
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: DEALER.phoneHref,
							className: "text-blue",
							children: DEALER.phone
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 space-y-1",
						children: HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: h.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.hours })]
						}, h.day))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: DEALER.maps,
				className: "mt-6 inline-block text-sm text-blue",
				target: "_blank",
				rel: "noreferrer",
				children: "Open in Google Maps"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
			kind: "contact",
			submitLabel: "Send message"
		})]
	});
}
//#endregion
export { ContactPage as component };
