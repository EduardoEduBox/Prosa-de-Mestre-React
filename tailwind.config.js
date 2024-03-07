/** @type {import('tailwindcss').Config} */
import textShadowPlugin from "tailwindcss-textshadow";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#ffa500",
        "custom-dark": "#1c1c1c",
      },
      textShadow: {
        darker: "0 0 12px rgba(0, 0, 0, .9)",
        evenDarker: "0 0 12px rgba(0, 0, 0, .9), 0 0 12px rgba(0, 0, 0, .9)",
      },
    },
  },
  plugins: [textShadowPlugin],
};
