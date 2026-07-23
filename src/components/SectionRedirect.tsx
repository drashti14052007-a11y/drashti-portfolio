"use client";

import { useEffect } from "react";

/** Client redirect that preserves the hash (server redirects drop it). */
export function SectionRedirect({ section }: { section: string }) {
  useEffect(() => {
    window.location.replace(`/#${section}`);
  }, [section]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 text-sm text-lab-muted">
      Taking you to {section}…
    </div>
  );
}
