import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
import process from "node:process";

import { piped } from "remeda";

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    viewTransition: true,

    serverActions: {
      allowedOrigins: [
        "localhost:3100",
        "localhost",
        "koodijoulukalenteri.pekkis.eu"
      ]
    }
  },
  typescript: {
    ignoreBuildErrors: false
  }
};

export default piped(withBundleAnalyzer, withVanillaExtract)(nextConfig);
