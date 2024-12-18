import { TypographyType } from './types';

export const typographyStyles: TypographyType = {
  h1: {
    classes: 'text-4xl font-semibold leading-tight',
    options: {
      landing: 'text-6xl font-semibold',
    },
  },
  h2: {
    classes: 'text-3xl font-semibold leading-tight',
    options: null,
  },
  h3: {
    classes: 'text-2xl font-semibold',
    options: null,
  },
  h4: {
    classes: 'text-xl font-semibold',
    options: null,
  },
  h5: {
    classes: 'text-lg font-semibold',
    options: null,
  },
  h6: {
    classes: 'text-base font-semibold',
    options: null,
  },
  p: {
    classes: 'text-base',
    options: {
      small: 'text-sm',
      medium: 'text-lg',
      large: 'text-2xl',
    },
  },
};
