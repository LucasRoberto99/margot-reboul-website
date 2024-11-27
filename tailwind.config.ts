import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "red-hat": ['"Red Hat Text"', "sans-serif"],
        tango: ["TangoSans", "sans-serif"],
      },
      colors: {
        "custom-lime": "#c1e4a8",
        "custom-green": "#749c75",
        "custom-darkgreen": "#35734a",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      height: {
        0.25: "0.5px",
      },
      width: {
        0.25: "0.5px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

export default config;
