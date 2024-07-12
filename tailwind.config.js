module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px', 
        md: '768px', 
        lg: '1024px', 
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
