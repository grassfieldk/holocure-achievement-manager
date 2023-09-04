import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // 例
        primary: {
          light: '#59d3d4',
          DEFAULT: '#4abef9',
          dark: '#008c8d'
        }
      }
    }
  },
  plugins: []
};
export default config;
