import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gradient-start': "var(--gradient-start)",
        'gradient-end': "var(--gradient-end)",
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '0.4',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
