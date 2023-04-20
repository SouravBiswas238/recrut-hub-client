module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {

  },
  plugins: [require("daisyui"),
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
    addVariant('xs', '@media (max-width: 639px){}');

  }
  ],
}

// dark mode 