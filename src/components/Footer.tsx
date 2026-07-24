import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-lab-line bg-lab-bg">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-6 py-8 text-sm text-lab-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="hover:text-lab-teal">
            Email
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-lab-teal"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-lab-teal"
          >
            GitHub
          </a>
          <Link href="/#contact" className="hover:text-lab-teal">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
