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
        bgColor: "#98C1D9",
        borda: "#752E2B",
        bgGrad: "#6AB2DC",
        bgGrad2: "#A22C29",
        bgInfo: "#393939",
      },
      spacing:{
        '99': '470px',
        '100': '520px',
        '105': '40%',
        '110': '40vw',
        '115': '50vw',
        '118': '100%',
        '120': '100vw',
        '125': '1000px',
        '130': '70vw',
      },
      borderRadius: {
        '4xl': '400px',
      },
      boxShadow: {
        '3xl': '-10px 20px 5px 10px rgba(106, 178, 220)',
      },
      backgroundImage: {
        'fundo-img': "url('/logo-home.png')",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
