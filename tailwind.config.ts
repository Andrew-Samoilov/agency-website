import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-sky': '#0369a1', //sky-700
      },
      backgroundImage: {
        'bg-drop': "url('/images/bg-drop.svg')",
      },
    },
    plugins: [],
  }
}

export default config
