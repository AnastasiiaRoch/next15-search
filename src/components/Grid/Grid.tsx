import React from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IComponent } from '@/lib/types';
import { gridVariants } from './gridVariants';
import { GridVariantType } from './types';

interface IProps extends IComponent {
  variant?: GridVariantType;
}

const Grid = ({ children, className, variant = 'fourCalls' }: IProps) => {
  const classes = twMerge(
    cn(
      'grid grid-cols-1 gap-x-6 gap-y-10 xl:gap-x-8',
      {
        [`${gridVariants[variant]}`]: variant,
      },
      className,
    ),
  );

  return <div className={classes}>{children}</div>;
};

export default Grid;
