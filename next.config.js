/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images:{
    disableStaticImages:false,
    path:'/'
  }
};
module.exports = nextConfig;

// const withImages = require("next-images");
// module.exports = withImages();
