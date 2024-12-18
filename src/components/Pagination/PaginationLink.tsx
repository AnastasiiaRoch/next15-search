import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

interface IProps {
  isSelected?: boolean;
  pageNumber: number;
  pageUrl: string;
}

const PaginationLink = ({ isSelected, pageNumber, pageUrl }: IProps) => (
  <Link
    className={cn('w-8 h-8 leading-8 block text-sm text-center hover:bg-primary hover:text-white', {
      'bg-primary text-white': isSelected,
    })}
    href={pageUrl}
  >
    <span className="visually-hidden">page</span> {pageNumber}
  </Link>
);

export default PaginationLink;
