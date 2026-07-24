"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "@/components/Icons";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function PillNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          <Link
            href="/"
            className="hidden rounded-pill px-3 py-2 text-xs font-semibold tracking-[0.14em] text-lab-ink sm:inline"
          >
            DP
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-pill px-3 py-2 text-sm text-lab-muted transition-all duration-200 ease-outCubic hover:text-lab-ink",
                    active && "text-lab-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-lab-teal transition-transform duration-300 ease-outCubic",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="rounded-pill border border-lab-ink/20 px-3 py-2 text-sm text-lab-ink transition hover:border-lab-teal hover:text-lab-teal"
          >
            Contact
          </Link>

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
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card border border-lab-line bg-white px-4 py-3 text-lg text-lab-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
