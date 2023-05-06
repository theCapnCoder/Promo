module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "321px",
        md: "480px",
        lg: "768px",
        xl: "1920px",
      },
      padding: {
        DEFAULT: "20px",
        // sm: '30px',
        // md: '50px',
      },
    },
    extend: {
      screens: {
        sm: "321px",
        md: "481px",
        lg: "769px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
