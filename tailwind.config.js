import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          accent: "#f97316",
          text: "#1e293b",
        },
        dark: {
          primary: "#374151",
          secondary: "#1E293B",
          accent: "#FF8A4C",
          text: "#FEF3C7",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
