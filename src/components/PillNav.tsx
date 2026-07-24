"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navRowRef = useRef<HTMLDivElement | null>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Seed active from hash when on home
  useEffect(() => {
    if (!onHome) {
      if (pathname.startsWith("/work")) setActive("work");
      else setActive("");
      return;
    }
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash as (typeof sectionIds)[number])) {
      setActive(hash);
    } else {
      setActive("home");
    }
  }, [onHome, pathname]);

  // Scroll spy — all Home slides live under #home, so Home stays active until About
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
          const id = visible[0].target.id;
          setActive(id);
          const nextHash = `#${id}`;
          if (window.location.hash !== nextHash) {
            window.history.replaceState(null, "", nextHash);
          }
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  const updateUnderline = useCallback(() => {
    const row = navRowRef.current;
    const link = linkRefs.current[active];
    if (!row || !link) {
      setUnderline((u) => ({ ...u, opacity: 0 }));
      return;
    }
    const rowRect = row.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setUnderline({
      left: linkRect.left - rowRect.left + 12,
      width: Math.max(linkRect.width - 24, 12),
      opacity: 1,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateUnderline();
  }, [updateUnderline, open]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  const scrollTo = useCallback(
    (id: string) => {
      setOpen(false);

      if (!onHome) {
        window.location.href = `/#${id}`;
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;
      setActive(id);
      window.history.replaceState(null, "", `#${id}`);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [onHome],
  );

  return (
    <>
      <a
        href="#main"
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

          <div
            ref={navRowRef}
            className="relative hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  ref={(el) => {
                    linkRefs.current[item.id] = el;
                  }}
                  href={`/#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className={cn(
                    "relative rounded-pill px-3 py-2 text-sm text-lab-muted transition-colors duration-200 ease-outCubic hover:text-lab-ink",
                    isActive && "text-lab-ink",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-0.5 h-px bg-lab-teal transition-all duration-300 ease-outCubic"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.opacity,
              }}
            />
          </div>

          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="rounded-pill border border-lab-ink/20 px-3 py-2 text-sm text-lab-ink transition hover:border-lab-teal hover:text-lab-teal"
          >
            Contact
          </a>

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
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className={cn(
                  "rounded-card border border-lab-line bg-white px-4 py-3 text-lg text-lab-ink",
                  active === item.id && "border-lab-teal text-lab-teal",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
