import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as Button, u as cn } from "./router-B609BWld.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-form-CttGzFDA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full border border-line bg-white px-3 text-sm text-fg placeholder:text-subtle", "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/35", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full border border-line bg-white px-3 py-2.5 text-sm text-fg placeholder:text-subtle", "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/35", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-xs font-medium text-muted", className),
		...props
	});
}
var useLeads = create()(persist((set) => ({
	leads: [],
	add: (lead) => {
		const row = {
			...lead,
			id: `CB-${Math.floor(1e5 + Math.random() * 9e5)}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((s) => ({ leads: [row, ...s.leads] }));
		return row;
	}
}), { name: "cars-blu-leads" }));
function LeadForm({ kind, extra, submitLabel }) {
	const add = useLeads((s) => s.add);
	const [done, setDone] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") ?? "").trim();
		const email = String(fd.get("email") ?? "").trim();
		const phone = String(fd.get("phone") ?? "").trim();
		const note = String(fd.get("note") ?? "").trim();
		if (!name || !email || !phone) {
			toast.error("Name, phone, and email are required.");
			return;
		}
		const lead = add({
			kind,
			name,
			email,
			phone,
			note
		});
		setDone(lead.id);
		toast.success(`Received. Reference ${lead.id}`);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-white p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl font-semibold text-navy",
			children: "We have it."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [
				"Reference ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: done
				}),
				". A Cars Blu advisor will follow up at the number you provided."
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-4 border border-line bg-white p-5 sm:p-6",
		children: [
			extra,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: `${kind}-name`,
				children: "Full name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: `${kind}-name`,
				name: "name",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `${kind}-phone`,
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `${kind}-phone`,
					name: "phone",
					type: "tel",
					required: true
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `${kind}-email`,
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `${kind}-email`,
					name: "email",
					type: "email",
					required: true
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: `${kind}-note`,
				children: "Notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: `${kind}-note`,
				name: "note"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				size: "lg",
				children: submitLabel
			})
		]
	});
}
//#endregion
export { Label as n, LeadForm as r, Input as t };
