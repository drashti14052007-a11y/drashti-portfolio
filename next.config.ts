import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Prevent Turbopack from picking a parent folder lockfile (e.g. C:\Users\DELL)
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
