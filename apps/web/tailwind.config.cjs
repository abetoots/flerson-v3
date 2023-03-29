/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindColors = require("tailwindcss/colors");

const colors = {
  primary: "var(--primary)",
  "accent-1": "var(--accent-1)",
  "accent-2": "var(--accent-2)",
  "primary-bg": "var(--primary-bg)",
  "accent-bg": "var(--accent-bg)",
  ...tailwindColors,
};

//just add some max-width screens
const screens = {
  "sm-max": { max: "640px" },
  ...defaultTheme.screens,
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors,
    screens,
  },
  plugins: [],
};

module.exports = config;
