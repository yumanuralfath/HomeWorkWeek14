/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f700ff",
          "secondary": "#00dc00",
          "accent": "#00b7ff",
          "neutral": "#1a160b",
          "base-100": "#30263c",
          "info": "#3eb5ff",
          "success": "#009b72",
          "warning": "#ca4200",
          "error": "#ff759e",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
};
