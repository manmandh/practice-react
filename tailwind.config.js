/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'primary-600': ['Inter-600'],
				'primary-500': ['Inter-500'],
				'primary-400': ['Inter-400'],
			},
    },

  },
  plugins: [],
}
