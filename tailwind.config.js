
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          'base': 'var(--color-text-base)',
          'muted':'var(--color-text-muted)',
          'inverted': 'var(--color-text-inverted)',
        }
      },
      backgroundColor:{
        skin:{
          'fill': 'var(--color-fill)',
        }
      },
      borderColor:{
        skin:{
          'default':'var(--color-fill)',
        }
      },
      gradientColorStops:{
        skin:{
          'fillFrom':'var(--color-fill)',
          'fillStop':'var(--color-fill-stop)'
        }
      }
    },
  },
  plugins: [],
}