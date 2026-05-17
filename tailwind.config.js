/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E8571E',
          dark: '#C8430F',
        },
        blue: {
          DEFAULT: '#2BA8E0',
          dark: '#1d8cc1',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3D3D3D',
          muted: '#6B6B6B',
          faint: '#999999',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          warm: '#F4EEE8',
          warmer: '#ECE3D8',
          deep: '#E5D9C8',
        },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        'pulse-dot': 'pulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
