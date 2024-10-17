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
      },
      spacing:{
        '99': '480px',
        '100': '520px',
        '110': '40vw',
        '120': '100vw',
        '130': '70vw',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
