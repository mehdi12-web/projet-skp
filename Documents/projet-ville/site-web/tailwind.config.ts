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
        'skp-black': "#1A1A2E",
        'skp-turquoise': "#007B8F",
        'skp-light': "#D4F4F7",
        'skp-gray': "#6B7280",
      },
      borderRadius: {
        xl: "16px",
        skp: "16px",
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
