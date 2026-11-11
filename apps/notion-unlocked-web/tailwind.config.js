/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: "#FAF9F6",
          subtle: "#F4F3EF",
          card: "#FFFFFF",
          border: "#E9E8E3",
          borderHover: "#D7D6CF",
          text: "#191919",
          muted: "#6B6A65",
          faint: "#9C9B95",
          accent: "#2383E2",
        },
        nerd: {
          black: "#0D0E11",
          charcoal: "#16171B",
          darkCard: "#1D1F24",
          darkBorder: "#2A2D35",
          green: "#10B981",
          lime: "#22C55E",
          emerald: "#059669",
          mint: "#E6F7F0",
        },
        tag: {
          gray: { bg: "#F1F1EF", text: "#787774" },
          brown: { bg: "#F3EEEE", text: "#976D57" },
          orange: { bg: "#F8ECDF", text: "#CC782F" },
          yellow: { bg: "#FAF3DD", text: "#C29219" },
          green: { bg: "#EEF3ED", text: "#447D55" },
          blue: { bg: "#EBF3F7", text: "#387CA5" },
          purple: { bg: "#F4EFF6", text: "#9065B0" },
          pink: { bg: "#F9EFF3", text: "#C14C8A" },
          red: { bg: "#FBECEB", text: "#D44C47" },
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Newsreader',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      boxShadow: {
        'notion': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'notion-hover': '0 10px 30px -4px rgba(0, 0, 0, 0.08), 0 3px 8px -2px rgba(0, 0, 0, 0.04)',
        'nerd-glow': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite 1s',
        'float-alt': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}

