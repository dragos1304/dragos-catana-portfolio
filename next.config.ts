import type { NextConfig } from "next";

// Static export: the site is plain HTML/CSS/JS in `out/`, so it runs on any web host
// (Network Solutions shared hosting) with Cloudflare in front for DNS.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /servicii/ -> servicii/index.html works on any static host
  poweredByHeader: false,
  images: { unoptimized: true }, // no image server on static hosting; images are pre-optimised in /public
};

export default nextConfig;
