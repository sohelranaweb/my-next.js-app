import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [
  //     new URL(
  //       "https://static.vecteezy.com/system/resources/previews/021/733/912/non_2x/next-logo-icon-illustration-vector.jpg"
  //     ),
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
