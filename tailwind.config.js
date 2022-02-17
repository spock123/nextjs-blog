module.exports = {
  important: true,
  prefix: '',
  content: ['./src/**/*.{html,ts, scss, txs, vue,}'],
  darkMode: 'class',
  purge: [
    './pages/**/*.js',
    './pages/**/*.tsx',
    './components/**/*.js'
  ],
  plugins: [require('@tailwindcss/typography')]

}