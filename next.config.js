/** @type {import('nextra').NextraConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  readingTime: true,
  latex: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
};

module.exports = withNextra(nextConfig);