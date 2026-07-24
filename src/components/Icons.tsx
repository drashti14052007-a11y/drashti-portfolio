import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Base>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Base>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </Base>
  );
}

export function Menu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </Base>
  );
}

export function X(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Base>
  );
}

export function Flask(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5.5 18a3 3 0 0 0 2.6 4.5h8a3 3 0 0 0 2.6-4.5L14 9.5V3" />
      <path d="M8.5 14h7" />
    </Base>
  );
}

export function Microscope(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 18h12" />
      <path d="M12 9v4" />
      <circle cx="12" cy="6" r="2" />
      <path d="M9 18c0-3 1.5-5 3-5s3 2 3 5" />
      <path d="M8 14h2" />
    </Base>
  );
}

export function Beaker(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 3h15" />
      <path d="M6 3v4l-2 11a2 2 0 0 0 2 2.5h12a2 2 0 0 0 2-2.5L18 7V3" />
      <path d="M7 14h10" />
    </Base>
  );
}

export function Leaf(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M11 20A17 17 0 0 1 4 7c8 0 13 5 13 13a7 7 0 0 1-6 0Z" />
      <path d="M11 20c0-6 3-10 8-12" />
    </Base>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function Lightbulb(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2a7 7 0 0 0-4-12Z" />
    </Base>
  );
}

export function Target(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </Base>
  );
}

export function Mail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </Base>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Base>
  );
}

export function Github(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 19c-4 1.5-4-2-6-2" />
      <path d="M15 22v-3.9a3.2 3.2 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5S17.3 2.8 15 4.3a9.3 9.3 0 0 0-6 0C6.7 2.8 5.3 2.1 5.3 2.1a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3.8 9c0 5.1 3.1 6.3 6.1 6.6a3.2 3.2 0 0 0-.9 2.5V22" />
    </Base>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Base>
  );
}
