import React from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import Link from 'next/link';
import { ButtonElementType } from '@/lib/types';
import { buttonStyles } from './buttonVariants';
import { ButtonSizeType, ButtonVariantType } from './types';

interface IProps extends ButtonElementType {
  children: React.ReactNode;
  href?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
}

const Button = ({
  children,
  className,
  href,
  size = 'default',
  type = 'button',
  variant = 'primary',
  ...rest
}: IProps) => {
  const classes = twMerge(
    cn(
      'inline-block border-[1px] border-solid text-center w-full sm:w-auto min-w-[7rem]',
      {
        [`${buttonStyles.variant[variant]}`]: variant,
        [`${buttonStyles.size[size]}`]: size && variant !== 'text',
      },
      className,
    ),
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
