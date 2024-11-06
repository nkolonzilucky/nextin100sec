import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
      require("tailwindcss-animate")
],
};
export default config;
