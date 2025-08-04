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
				primary: '#303540',
				secondary: '#EEAC00',
  			secondaryLight: '#EEAC00',
  			beige: '#F4F4E7',
  			lightgray: '#F5F5F5',
  		},
  		fontFamily: {
  			sans: ["var(--font-montserrat)"],
  			serif: ["var(--font-mukta)"]
  		},
  		backgroundImage: {
  			'hero-pattern': 'url("/img/svg/road-hero.svg")',
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
