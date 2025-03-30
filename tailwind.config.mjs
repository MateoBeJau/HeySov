/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-left': 'slideLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right': 'slideRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-up': 'scaleUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'blob': 'blob 7s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scale': 'scale 4s ease-in-out infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'gradient-flow': 'gradient 15s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 25s linear infinite reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-flow': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        'text-shimmer': {
          '0%': {
            'background-position': '0% 50%',
          },
          '100%': {
            'background-position': '100% 50%',
          },
        },
        glow: {
          '0%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        scale: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
        'border-glow': {
          '0%': { 'border-color': 'rgba(59, 130, 246, 0.5)' },
          '100%': { 'border-color': 'rgba(59, 130, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
} 