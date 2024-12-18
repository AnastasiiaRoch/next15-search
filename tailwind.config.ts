import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--main)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
      },
      gridTemplateRows: {
        layout: 'max-content auto max-content',
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, option: string) => void }) {
      addVariant('first', '&:first-child');
      addVariant('onlyChild', '&:only-child');
      addVariant('last', '&:last-child');
      addVariant('children', '& > *');
    },
  ],
} satisfies Config;
