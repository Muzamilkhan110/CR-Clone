import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '0.5':'0.5px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bguseclass: "linear-gradient(44deg, 	#f57f3d 20%, #d7392f 35%, #d7392f 60%, #f57f3d 100%)", // Custom gradient
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        gradient1: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
        animation: {
          gradient:" gradient1 4s ease infinite", // Gradient animation
      },
    
  },
  },
  plugin:[],
}