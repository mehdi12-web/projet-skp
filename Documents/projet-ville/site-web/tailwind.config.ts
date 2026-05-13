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
        primary: "#00B4C8",
        secondary: "#E0F7FA",
        background: "#F8FAFB",
        text: "#1A1A2E",
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
