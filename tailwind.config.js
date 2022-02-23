module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('/src/Assets/bg4.jpg')"
      })
    },
    borderRadius: {
      'xx': '20rem',
      'md': '0.375rem',
      'full': '9999px',
      'lg': '0.75rem',
      'xl': '2rem',
      'xxl': '4rem'
    },
    scale: {
      '95': '.95',
      '105': '1.05'
    }
  },
  variants: {
    extend: {
      scale: ['active', 'hover', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
