/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
    colors:{
     gary:"#ccc",
     lightgray:"#f5f5f5",
    },
    screens:{
      "sm":"480px"
    }

    },
  },
  plugins: [],
}

