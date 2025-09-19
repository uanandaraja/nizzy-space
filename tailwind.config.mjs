/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        rp: {
          base: "#191724",
          surface: "#1f1d2e",
          overlay: "#26233a",
          text: "#e0def4",
          subtle: "#908caa",
          muted: "#6e6a86",
          love: "#eb6f92",
          gold: "#f6c177",
          rose: "#ebbcba",
          pine: "#31748f",
          foam: "#9ccfd8",
          iris: "#c4a7e7",
        },
      },
      fontFamily: {
        mono: ["Fira Code", "JetBrains Mono", "Menlo", "Monaco", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
