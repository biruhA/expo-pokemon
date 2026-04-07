/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-variant": "var(--color-surface-variant)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-primary-dark": "var(--color-text-primary-dark)",
        types: {
          grass: "var(--color-type-grass)",
          poison: "var(--color-type-poison)",
          fire: "var(--color-type-fire)",
          water: "var(--color-type-water)",
          electric: "var(--color-type-electric)",
          flying: "var(--color-type-flying)",
          normal: "var(--color-type-normal)",
        },
      },
      spacing: {
        "screen-edge": "var(--spacing-screen-edge)",
        "card-gap": "var(--spacing-card-gap)",
        "section-gap": "var(--spacing-section-gap)",
      },
      borderRadius: {
        small: "var(--radius-small)",
        medium: "var(--radius-medium)",
        large: "var(--radius-large)",
      },
      fontFamily: {
        primary: ["var(--font-family-primary)"],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },
      fontWeight: {
        bold: "var(--font-weight-bold)",
        black: "var(--font-weight-black)",
      },
    },
  },
  plugins: [],
};
