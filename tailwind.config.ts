export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        darkLava: 'var(--color-DarkLava)',
        sageGray: 'var(--color-SageGray)',
        gold: 'var(--color-gold)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [],
};
