"use client";

import { useEffect } from "react";

const sectionIds = ["home", "about", "work", "experience", "contact"] as const;

/** Smooth-scroll to hash on load / hashchange, accounting for sticky nav. */
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id || !sectionIds.includes(id as (typeof sectionIds)[number])) return;
      const el = document.getElementById(id);
      if (!el) return;
      // Defer so layout + images settle
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
