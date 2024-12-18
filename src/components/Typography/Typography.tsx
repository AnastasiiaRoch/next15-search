import React, { createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IComponent } from '@/lib/types';
import { AlignType, ColorType, TransformType, VariantType, WeightType } from './types';
import { typographyStyles } from './styles';

interface IProps extends IComponent {
  align?: AlignType;
  color?: ColorType;
  ref?: React.Ref<HTMLElement>;
  transform?: TransformType;
  weight?: WeightType;
}

const Typography = ({
  align,
  as,
  children,
  className,
  color,
  option,
  ref,
  transform,
  variant = 'p',
  weight,
  ...rest
}: IProps & VariantType) => {
  const variantStyle =
    option && typographyStyles[variant]?.options
      ? typographyStyles[variant].options?.[option]
      : typographyStyles[variant].classes;

  const classes = twMerge(
    cn({
      [variantStyle]: variant,
      [`text-${color}`]: color,
      [`${transform}`]: transform,
      [`text-${align}`]: align,
      [`font-${weight}`]: weight,
    }),
    className,
  );

  return createElement(
    as || variant,
    {
      ...rest,
      ref,
      className: classes,
    },
    children,
  );
};

export default Typography;
