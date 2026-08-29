/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          muted: "#1A2336",
          soft: "#2A3548",
        },
        paper: {
          DEFAULT: "#F7F5F1",
          raised: "#FFFcf7",
          muted: "#EDEAE3",
        },
        mist: "#C9C4B8",
        accent: {
          DEFAULT: "#3D6EFF",
          dim: "#2C54C9",
          faint: "rgba(61, 110, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.1rem, 4.4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(1.65rem, 2.8vw, 2.4rem)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        site: "1180px",
        prose: "40rem",
        wide: "1320px",
      },
      boxShadow: {
        shot: "0 24px 80px -32px rgba(11, 18, 32, 0.45)",
        lift: "0 18px 50px -28px rgba(11, 18, 32, 0.28)",
      },
    },
  },
  plugins: [],
};
