"use client";

import Link from "next/link";
import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type RefObject,
} from "react";
import { cn } from "@/lib/cn";

type Common = {
  className?: string;
  magnetic?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill border border-lab-ink/25 bg-transparent px-5 py-2.5 text-sm font-medium text-lab-ink transition-all duration-200 ease-outCubic hover:border-lab-teal hover:text-lab-teal hover:shadow-lift focus-visible:border-lab-teal";

function useMagnetic(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return { ref, onMove, onLeave };
}

export function GhostButton({
  className,
  magnetic = true,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Common) {
  const { ref, onMove, onLeave } = useMagnetic(magnetic);
  return (
    <button
      {...props}
      ref={ref as RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, className)}
    />
  );
}

export function GhostLink({
  href,
  className,
  magnetic = true,
  external,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  Common & { href: string; external?: boolean }) {
  const { ref, onMove, onLeave } = useMagnetic(magnetic);
  const classes = cn(base, className);

  if (external) {
    return (
      <a
        {...props}
        href={href}
        ref={ref as RefObject<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      {...props}
      href={href}
      ref={ref as RefObject<HTMLAnchorElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={classes}
    >
      {children}
    </Link>
  );
}
