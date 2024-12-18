import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { IComponent } from '@/lib/types';

interface IProps extends IComponent {
  href?: string;
  isSelected?: boolean;
  onClick?: VoidFunction;
}

const Tag = ({ children, className, href, isSelected, onClick }: IProps) => {
  const classes = cn(
    'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10',
    isSelected ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-200',
    className,
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  if (!href && onClick) {
    return (
      <button
        className={classes}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
};

export default Tag;
