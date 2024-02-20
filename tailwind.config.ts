import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#482096",
        darkPurple: "#120822",
        customPink: "#C53EA9",
        customYellow: "#E8AA3D",
        littleGray: "#E8E5E4",
      },
      backgroundImage: {
        mainBGmd: "url('../public/images/bg-image-md.png')",
        mainBGlg: "url('../public/images/bg-image-lg.png')",
        mainBGxl: "url('../public/images/bg-image-xl.png')",
      },
    },
  },
  plugins: [],
};
export default config;
