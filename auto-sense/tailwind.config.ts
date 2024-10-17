import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: "#98C1D9",
        borda: "#752E2B",
        bgGrad: "#6AB2DC",
        bgGrad2: "#A22C29",
        bgDia: "#6AB2DC"
      },
      spacing:{
        '99': '470px',
        '100': '520px',
        '110': '40vw',
        '115': '50vw',
        '120': '100vw',
        '125': '60vw',
        '130': '70vw',
      },
      borderRadius: {
        '4xl': '400px',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
