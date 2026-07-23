"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "@/components/Icons";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";

const sectionIds = navItems.map((item) => item.id);

export function PillNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seed active from hash (home or after redirect)
  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash as (typeof sectionIds)[number])) {
      setActive(hash);
    } else {
      setActive("home");
    }
  }, [onHome]);

  useEffect(() => {
    if (!onHome) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        // Prefer the section occupying the upper-middle of the viewport
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  const scrollTo = useCallback(
    (id: string) => {
      setOpen(false);

      // Case studies / other routes → jump home to that section
      if (!onHome) {
        window.location.href = `/#${id}`;
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;
      setActive(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    },
    [onHome],
  );

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow-dock"
      >
        Skip to content
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label="Primary"
          className={cn(
            "pointer-events-auto flex items-center gap-1 rounded-pill border border-lab-line/80 bg-white/80 px-2 py-2 shadow-dock backdrop-blur-xl transition-transform duration-300 ease-outCubic",
            scrolled && "-translate-y-0.5",
          )}
        >
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="hidden rounded-pill px-3 py-2 text-xs font-semibold tracking-[0.14em] text-lab-ink sm:inline"
          >
            DP
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = onHome && active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-pill px-3 py-2 text-sm text-lab-muted transition-colors hover:text-lab-ink",
                    isActive && "text-lab-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px bg-lab-teal transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="rounded-pill border border-lab-ink/20 px-3 py-2 text-sm text-lab-ink transition hover:border-lab-teal hover:text-lab-teal"
          >
            Contact
          </button>

          <button
            type="button"
            className="rounded-pill p-2 text-lab-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-lab-bg/95 px-6 pb-10 pt-24 backdrop-blur-md md:hidden"
        >
          <p className="mb-6 text-sm tracking-[0.18em] text-lab-muted">
            {site.name.toUpperCase()}
          </p>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "rounded-card border border-lab-line bg-white px-4 py-3 text-left text-lg text-lab-ink",
                  onHome &&
                    active === item.id &&
                    "border-lab-teal text-lab-teal",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
