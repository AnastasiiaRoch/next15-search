enum TypographyEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
}

type TypographyOptions = {
  [key: string]: string;
} | null;

interface TypographyStyle {
  classes: string;
  options?: TypographyOptions;
}

export type TypographyType = {
  [key in TypographyEnum]: TypographyStyle;
};

type ParagraphOption = 'small' | 'medium' | 'large';

export type VariantType =
  | {
      variant?: 'h1';
      option?: 'landing';
    }
  | {
      variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      option?: null;
    }
  | {
      variant?: 'p';
      option?: ParagraphOption;
    };

export type AlignType = 'left' | 'center' | 'right';
export type ColorType = 'gray-700' | 'green-700';
export type TransformType = 'uppercase' | 'lowercase' | 'capitalize';
export type WeightType = 'light' | 'normal' | 'medium' | 'bold';
