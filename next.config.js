/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  useTranslate: true,
  useTranslateConfig: {
    defaultLanguage: "ar",
    supportedLanguages: ["en", "ar"],
    defaultLocale: "ar",
    supportedLocales: ["en", "ar"],
  },
};

module.exports = nextConfig;
