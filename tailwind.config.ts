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
        rotateClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateAntiClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        gradient1: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
        animation: {
          gradient:" gradient1 4s ease infinite", // Gradient animation
          "rotate-clockwise": "rotateClockwise 4s linear infinite",
          "rotate-anti-clockwise": "rotateAntiClockwise 4s linear infinite",
      },
    
  },
  },
  plugin:[],
}