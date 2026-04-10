import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        matte: "#121212",
        gold: {
            DEFAULT: "#D4AF37",
            light: "#F7E7CE",
            dark: "#996515",
            metallic: "linear-gradient(135deg, #F7E7CE 0%, #D4AF37 50%, #996515 100%)",
        },
        ivory: "#FAF9F6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         "vignette": "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.8) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
