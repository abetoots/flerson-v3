/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  transpilePackages: ["flerson-lib"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      //use url-loader instead of asset/inline
      use: ["@svgr/webpack", "url-loader"],
      type: "javascript/auto", //prevents duplicate assets
    });

    return config;
  },
  //https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg
  images: {
    dangerouslyAllowSVG: true,
    domains: ["example.com"],
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
export default config;
