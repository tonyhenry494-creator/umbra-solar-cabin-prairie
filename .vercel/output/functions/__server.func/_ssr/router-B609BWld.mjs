import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, S as useRouter, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, r as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B609BWld.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Logo({ className = "size-11" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 200",
		className,
		"aria-hidden": "true",
		role: "img",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "98",
				fill: "#0A2540"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "92",
				fill: "none",
				stroke: "#C5CDD6",
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "100",
				y: "52",
				textAnchor: "middle",
				fill: "#ffffff",
				fontFamily: "Arial, Helvetica, sans-serif",
				fontSize: "22",
				fontWeight: "700",
				letterSpacing: "2",
				children: "CARS BLU"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "#ffffff",
				strokeWidth: "4",
				strokeLinejoin: "round",
				strokeLinecap: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42 118 C50 98 70 90 100 90 C130 90 150 98 158 118 L168 118 C170 118 172 120 172 124 L172 132 L38 132 L38 124 C38 120 40 118 42 118 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M70 90 L80 78 L120 78 L130 90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "64",
						cy: "132",
						r: "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "136",
						cy: "132",
						r: "12"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "100",
				y: "168",
				textAnchor: "middle",
				fill: "#C5CDD6",
				fontFamily: "Arial, Helvetica, sans-serif",
				fontSize: "16",
				fontWeight: "600",
				letterSpacing: "4",
				children: "LLC"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4", {
	variants: {
		variant: {
			primary: "bg-blue text-white hover:bg-navy active:scale-[0.98]",
			navy: "bg-navy text-white hover:bg-navy-2",
			outline: "border border-line bg-white text-fg hover:border-navy/40",
			ghost: "text-muted hover:text-navy hover:bg-white"
		},
		size: {
			sm: "h-10 px-4 text-sm",
			md: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-sm tracking-wide"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var DEALER = {
	name: "Cars Blu LLC",
	short: "Cars Blu",
	tagline: "Miami’s full-service dealership",
	address: "66 W Flagler St, Suite 900",
	city: "Miami, FL 33130",
	phone: "(754) 349-5960",
	phoneHref: "tel:+17543495960",
	maps: "https://maps.google.com/?q=66+W+Flagler+St+Suite+900+Miami+FL+33130",
	email: "sales@carsblu.com"
};
var HOURS = [
	{
		day: "Monday",
		hours: "9 AM – 12 AM"
	},
	{
		day: "Tuesday",
		hours: "12–6 AM, 9 AM–6 PM"
	},
	{
		day: "Wednesday",
		hours: "9 AM – 6 PM"
	},
	{
		day: "Thursday",
		hours: "9 AM – 6 PM"
	},
	{
		day: "Friday",
		hours: "9 AM – 6 PM"
	},
	{
		day: "Saturday",
		hours: "10 AM – 7 PM"
	},
	{
		day: "Sunday",
		hours: "Closed"
	}
];
var VEHICLES = [
	{
		id: "camry-25",
		year: 2025,
		make: "Toyota",
		model: "Camry",
		trim: "XSE",
		condition: "New",
		category: "Sedan",
		price: 33990,
		miles: 12,
		mpg: "44 combined",
		color: "Blueprint",
		image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Hybrid",
			"Safety Sense 3.0",
			"Wireless CarPlay"
		]
	},
	{
		id: "crv-25",
		year: 2025,
		make: "Honda",
		model: "CR-V",
		trim: "EX-L",
		condition: "New",
		category: "SUV",
		price: 36450,
		miles: 8,
		mpg: "30 combined",
		color: "Platinum White",
		image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"AWD",
			"Leather",
			"Honda Sensing"
		]
	},
	{
		id: "tucson-25",
		year: 2025,
		make: "Hyundai",
		model: "Tucson",
		trim: "SEL",
		condition: "New",
		category: "SUV",
		price: 31200,
		miles: 5,
		mpg: "26 combined",
		color: "Amazon Gray",
		image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Warranty",
			"Apple CarPlay",
			"Blind-spot"
		]
	},
	{
		id: "silverado-24",
		year: 2024,
		make: "Chevrolet",
		model: "Silverado 1500",
		trim: "LT",
		condition: "New",
		category: "Truck",
		price: 48990,
		miles: 18,
		mpg: "20 combined",
		color: "Northsky Blue",
		image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Crew Cab",
			"Towing package",
			"Bed liner"
		]
	},
	{
		id: "sportage-25",
		year: 2025,
		make: "Kia",
		model: "Sportage",
		trim: "SX",
		condition: "New",
		category: "SUV",
		price: 33750,
		miles: 9,
		mpg: "28 combined",
		color: "Gravity Blue",
		image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Panoramic roof",
			"Harman Kardon",
			"AWD"
		]
	},
	{
		id: "bmw-3",
		year: 2024,
		make: "BMW",
		model: "330i",
		trim: "xDrive",
		condition: "Used",
		category: "Luxury",
		price: 42900,
		miles: 18420,
		mpg: "29 combined",
		color: "Alpine White",
		image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"AWD",
			"Live Cockpit",
			"Certified"
		]
	},
	{
		id: "c300",
		year: 2023,
		make: "Mercedes-Benz",
		model: "C 300",
		trim: "4MATIC",
		condition: "Used",
		category: "Luxury",
		price: 39850,
		miles: 22110,
		mpg: "27 combined",
		color: "Obsidian Black",
		image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"MBUX",
			"Burmester",
			"One owner"
		]
	},
	{
		id: "model-y",
		year: 2024,
		make: "Tesla",
		model: "Model Y",
		trim: "Long Range",
		condition: "Used",
		category: "Electric",
		price: 39990,
		miles: 15200,
		mpg: "122 MPGe",
		color: "Deep Blue Metallic",
		image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Autopilot",
			"White interior",
			"Full charge ~310 mi"
		]
	},
	{
		id: "cayenne",
		year: 2021,
		make: "Porsche",
		model: "Cayenne",
		trim: "S",
		condition: "Used",
		category: "Luxury",
		price: 62900,
		miles: 31880,
		mpg: "20 combined",
		color: "Jet Black",
		image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Sport Chrono",
			"Air suspension",
			"Clean Carfax"
		]
	},
	{
		id: "rx350",
		year: 2023,
		make: "Lexus",
		model: "RX 350",
		trim: "Premium",
		condition: "Used",
		category: "Luxury",
		price: 47950,
		miles: 19840,
		mpg: "25 combined",
		color: "Eminent White",
		image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Mark Levinson",
			"Safety System+",
			"AWD"
		]
	},
	{
		id: "f150",
		year: 2022,
		make: "Ford",
		model: "F-150",
		trim: "XLT",
		condition: "Used",
		category: "Truck",
		price: 36800,
		miles: 41200,
		mpg: "22 combined",
		color: "Atlas Blue",
		image: "https://images.unsplash.com/photo-1595754307346-c1d5b3f4c1c0?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"5.0 V8",
			"SuperCrew",
			"Tow package"
		]
	},
	{
		id: "a4",
		year: 2020,
		make: "Audi",
		model: "A4",
		trim: "Premium Plus",
		condition: "Used",
		category: "Sedan",
		price: 24990,
		miles: 48600,
		mpg: "30 combined",
		color: "Navarra Blue",
		image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
		highlights: [
			"Quattro",
			"Virtual cockpit",
			"Service records"
		]
	}
];
function getVehicle(id) {
	return VEHICLES.find((v) => v.id === id);
}
function vehicleTitle(v) {
	return `${v.year} ${v.make} ${v.model}`;
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/inventory",
		label: "Inventory"
	},
	{
		to: "/finance",
		label: "Finance"
	},
	{
		to: "/trade-in",
		label: "Trade-in"
	},
	{
		to: "/service",
		label: "Service"
	},
	{
		to: "/visit",
		label: "Book a visit"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl font-semibold tracking-wide text-navy",
							children: "CARS BLU"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] uppercase tracking-[0.18em] text-muted",
							children: "Miami · LLC"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("text-sm transition-colors duration-150", pathname === item.to ? "font-medium text-navy" : "text-muted hover:text-navy"),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: DEALER.phoneHref,
						className: "inline-flex items-center gap-1.5 text-sm text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), DEALER.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							children: "Book a visit"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center text-navy lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line bg-white px-4 py-3 lg:hidden",
			children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				onClick: () => setOpen(false),
				className: "flex min-h-11 items-center text-sm text-navy",
				children: item.label
			}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: DEALER.phoneHref,
				className: "flex min-h-11 items-center text-sm text-blue",
				children: ["Call ", DEALER.phone]
			})]
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "size-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold tracking-wide",
							children: "CARS BLU LLC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-silver",
							children: "Car dealer · Miami, Florida"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-silver",
						children: "New, used, and luxury vehicles. Sales, financing, trade-ins, and service under one roof on Flagler Street."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-silver",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: DEALER.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: DEALER.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: DEALER.phoneHref,
						className: "mt-2 block text-sm text-white underline-offset-4 hover:underline",
						children: DEALER.phone
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-silver",
					children: "Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1 text-sm text-silver",
					children: HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-white",
							children: h.hours
						})]
					}, h.day))
				})] })
			]
		})
	});
}
var styles_default = "/assets/styles-zxTy99ug.css";
var APP_NAME = "Cars Blu LLC";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Cars Blu LLC — Miami car dealer. New, used, and luxury vehicles. Sales, financing, trade-ins, and service. 66 W Flagler St, Suite 900."
			},
			{
				name: "theme-color",
				content: "#0A2540"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-paper text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-screen flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { theme: "light" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-CtzFXyPu.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./contact-CjrhSq8N.mjs");
var Route$6 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./finance-VsRCM8TW.mjs");
var Route$5 = createFileRoute("/finance")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./inventory-BkjJtpuS.mjs");
var Route$4 = createFileRoute("/inventory")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./service-B3g2DxLf.mjs");
var Route$3 = createFileRoute("/service")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./trade-in-DZMzW7w8.mjs");
var Route$2 = createFileRoute("/trade-in")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./visit-DpqMKNDl.mjs");
var Route$1 = createFileRoute("/visit")({
	validateSearch: (s) => ({ vehicle: typeof s.vehicle === "string" ? s.vehicle : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./inventory._id-C_l8Hfxy.mjs");
var Route = createFileRoute("/inventory/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var FinanceRoute = Route$5.update({
	id: "/finance",
	path: "/finance",
	getParentRoute: () => Route$8
});
var InventoryRoute = Route$4.update({
	id: "/inventory",
	path: "/inventory",
	getParentRoute: () => Route$8
});
var ServiceRoute = Route$3.update({
	id: "/service",
	path: "/service",
	getParentRoute: () => Route$8
});
var TradeInRoute = Route$2.update({
	id: "/trade-in",
	path: "/trade-in",
	getParentRoute: () => Route$8
});
var VisitRoute = Route$1.update({
	id: "/visit",
	path: "/visit",
	getParentRoute: () => Route$8
});
var InventoryRouteChildren = { InventoryIdRoute: Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => InventoryRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	FinanceRoute,
	InventoryRoute: InventoryRoute._addFileChildren(InventoryRouteChildren),
	ServiceRoute,
	TradeInRoute,
	VisitRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { HOURS as a, vehicleTitle as c, formatUsd as d, DEALER as i, Button as l, Route as n, VEHICLES as o, Route$1 as r, getVehicle as s, router_exports as t, cn as u };
