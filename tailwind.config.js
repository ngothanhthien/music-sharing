
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
          'reverse':'var(--color-text-reverse)',
          'accent':'var(--color-accent)',
        }
      },
      backgroundColor:{
        skin:{
          'primary': 'var(--color-primary)',
          'primaryLight':'var(--color-primary-light)',
          'primaryDark':'var(--color-primary-dark)',
          'secondary': 'var(--color-secondary)',
          'secondaryLight':'var(--color-secondary-light)',
          'secondaryDark':'var(--color-secondary-dark)',
          'accent':'var(--color-accent)',
          'accentDark':'var(--color-accent-dark)',
          'neutral':'var(--color-neutral)',
          'neutralLight':'var(--color-neutral-light)',
        }
      },
      borderColor:{
        skin:{
          'primary':'var(--color-primary)',
          'primaryLight':'var(--color-primary-light)',
          'primaryDark':'var(--color-primary-dark)',
          'secondary':'var(--color-secondary)',
          'secondaryLight':'var(--color-secondary-light)',
          'secondaryDark':'var(--color-secondary-dark)',
          'accent':'var(--color-accent)',
          'accentDark':'var(--color-accent-dark)',
        }
      },
      ringColor:{
        skin:{
          'accent':'var(--color-accent)',
        }
      },
      accentColor:{
        skin:{
          'accent':'var(--color-accent)',
        }
      },
      gradientColorStops:{
        skin:{
          'primary':'var(--color-primary)',
          'primaryStop':'var(--color-primary-stop)',
        }
      }
    },
  },
  plugins: [],
}