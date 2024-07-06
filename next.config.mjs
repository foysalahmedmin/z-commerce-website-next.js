import path from "path";

/** @type {import("next").NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.dirname(new URL(import.meta.url).pathname), "styles"],
  },
};

export default nextConfig;
