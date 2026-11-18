import type { ReactNode } from "react";

/**
 * CSS-only reveal (see .reveal in globals.css). Content is fully visible in the HTML,
 * so it works without JS, for crawlers and with reduced motion. Browsers with
 * scroll-driven animations fade and rise the block as it enters the viewport.
 */
export function Reveal({ children }: { children: ReactNode }) {
  return <div className="reveal">{children}</div>;
}
