module.exports = {
  
  theme: {
    

    extend: {

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  
      height: theme => ({
        "screen/2": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-85": "85vh",
        "screen-90": "90vh"
      }),

      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif', ]
      }
    },
  },
  variants: {
    
  },
  plugins: [],
};
