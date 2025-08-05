// tailwind.config.ts
// import { Config } from 'tailwindcss' // Not needed in JS

const config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif']
      }
    }
  },
  plugins: []
}
module.exports = config
