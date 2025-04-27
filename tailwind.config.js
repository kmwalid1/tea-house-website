/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        colors: {
          clifford: '#da373d', // example custom color
        },
      },
    },
    plugins: [],
  }
  