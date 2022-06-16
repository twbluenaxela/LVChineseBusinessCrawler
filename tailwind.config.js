module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./build/**/*.html"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      {
        tailwindcss: {},
        autoprefixer: {},
      },
    ],
  };