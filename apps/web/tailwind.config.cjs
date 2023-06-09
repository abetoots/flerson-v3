/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindColors = require("tailwindcss/colors");

// @ts-ignore
delete tailwindColors["lightBlue"];
// @ts-ignore
delete tailwindColors["warmGray"];
// @ts-ignore
delete tailwindColors["trueGray"];
// @ts-ignore
delete tailwindColors["coolGray"];
// @ts-ignore
delete tailwindColors["blueGray"];

const colors = {
  primary: "var(--primary-color)",
  "accent-1": "var(--accent-color-1)",
  "accent-2": "var(--accent-color-2)",
  "accent-bg-1": "var(--accent-bg-1)",
  "accent-bg-2": "var(--accent-bg-2)",
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
