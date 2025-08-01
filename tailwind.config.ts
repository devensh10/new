import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Traozom Custom Colors
        "travozom-gold": "hsl(39, 90%, 60%)",
        "travozom-dark-gold": "hsl(39, 90%, 50%)",
        "travozom-deep-brown": "hsl(20, 40%, 15%)",
        "travozom-darker-brown": "hsl(20, 30%, 20%)",
        "travozom-dark-beige": "hsl(30, 20%, 40%)",
        "travozom-beige": "hsl(30, 20%, 95%)",
        "travozom-cream": "hsl(40, 60%, 98%)",
        "travozom-bronze": "hsl(28, 40%, 30%)",
        "travozom-light-beige": "hsl(30, 20%, 70%)", // Added for dark mode text
        "travozom-medium-brown": "hsl(20, 30%, 30%)", // Added for dark mode borders
        "travozom-darkest-brown": "hsl(20, 40%, 10%)", // Added for dark mode nav/header
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
