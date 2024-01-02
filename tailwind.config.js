/** @type {import('tailwindcss').Config} */

function withOpacity(colorVariable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${colorVariable}), ${opacityValue})`
    }
    return `rgb(var(${colorVariable}))`
  }
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'base': withOpacity('--color-text-base')
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
