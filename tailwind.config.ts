import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-light': '2px 2px 6px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.02)', // Customize as needed
        'custom-very-light': '2px 2px 4px rgba(0, 0, 0, 0.05), -1px -1px 1px rgba(0, 0, 0, 0.01)', // More subtle shadows
      },
    },
  },
  plugins: [],
};
export default config;
