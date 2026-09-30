/**
 * Lightweight event dispatcher for user actions and conversions
 * Compatible with Google Analytics (gtag) and custom logging
 */

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined") {
    // Dispatch to standard dataLayer or gtag if available
    const win = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (...args: unknown[]) => void;
    };

    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, eventParams);
    } else if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`[Cleanora Analytics] ${eventName}:`, eventParams);
    }
  }
};

export const trackWhatsAppConversion = (source: string) => {
  trackEvent("whatsapp_click", {
    source,
    timestamp: new Date().toISOString(),
  });
};
