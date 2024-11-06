import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#00a896",
          
"primary-content": "#000a08",
          
"secondary": "#0000ff",
          
"secondary-content": "#c6dbff",
          
"accent": "#3978ff",
          
"accent-content": "#010516",
          
"neutral": "#0d0807",
          
"neutral-content": "#c8c6c6",
          
"base-100": "#27212b",
          
"base-200": "#201b24",
          
"base-300": "#1a161d",
          
"base-content": "#cfcdd0",
          
"info": "#0067e4",
          
"info-content": "#d1e2fd",
          
"success": "#009a6e",
          
"success-content": "#000904",
          
"warning": "#f6ad00",
          
"warning-content": "#150b00",
          
"error": "#ba0427",
          
"error-content": "#f8d4d2",
          },
        }, 
        "cupcake", "light", "dark"
      ],
    },
  plugins: [
    daisyui,
  ],
};
export default config;
