import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { cspHeaders } from "./next.config.csp";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  async headers() {
    return cspHeaders;
  },
};

export default withAnalyzer(nextConfig);
