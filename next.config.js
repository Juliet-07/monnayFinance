// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   future: { webpack5: true },
// };

// module.exports = nextConfig;
const withImages = require("next-images");
module.exports = withImages({
  staticPageGenerationTimeout: 900,
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/",
    domains: [
      "th.bing.com",
      "pmt-blog.s3.eu-west-1.amazonaws.com",
      "www.google.com",
      "docs.google.com",
      "/public",
    ],
  },
});
