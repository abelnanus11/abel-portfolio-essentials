// Lightweight analytics helper.
// Lovable's built-in analytics captures page views automatically on the
// published site (no setup needed). This helper adds custom event tracking
// for key interactions and safely no-ops when no analytics layer is present.
type EventProps = Record<string, unknown>;

export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as {
      dataLayer?: unknown[];
      lovable?: { track?: (n: string, p?: EventProps) => void };
    };
    w.dataLayer?.push({ event: name, ...props });
    w.lovable?.track?.(name, props);
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, props ?? {});
    }
  } catch {
    /* analytics must never break the app */
  }
}
