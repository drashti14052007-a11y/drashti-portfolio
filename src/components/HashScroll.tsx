"use client";

import { useEffect } from "react";

/** Scroll to the URL hash once the home sections are mounted. */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Wait a tick so layout + images don't fight the first paint
    const t = window.setTimeout(scroll, 60);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
