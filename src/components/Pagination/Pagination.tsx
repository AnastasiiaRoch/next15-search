'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import { IComponent } from '@/lib/types';
import PaginationLink from './PaginationLink';
import PaginationArrow from './PaginationArrow';

interface IProps extends Pick<IComponent, 'className'> {
  itemsPerPage?: number;
  totalItems: number;
}

const MAX_LIMIT = 5;

const Pagination = ({ className, itemsPerPage = 12, totalItems }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPageNumber = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.delete('page');
    params.append('page', pageNumber?.toString());

    return `${pathname}?${params.toString()}`;
  };

  const handlePrevious = () => {
    const numPage = currentPage - 1;
    if (numPage < 1) return 0;
    router.push(createPageURL(numPage));
  };

  const handleNext = () => {
    const numPage = currentPage + 1;
    if (numPage > totalPageNumber) return 0;
    router.push(createPageURL(numPage));
  };

  const visiblePages = () => {
    if (totalPageNumber <= 5) {
      return Array.from({ length: totalPageNumber }).map((_, i) => i + 1);
    }

    return Array.from({ length: MAX_LIMIT }).map((_, i) => {
      if (currentPage <= 2) {
        return i + 1;
      }

      if (currentPage >= totalPageNumber - 1) {
        return totalPageNumber - MAX_LIMIT + i + 1;
      }

      return i + currentPage - Math.floor((MAX_LIMIT - 1) / 2);
    });
  };

  if (totalPageNumber <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="pagination"
      className={cn('mx-6', className)}
    >
      <ul className="flex items-center justify-center gap-x-2">
        <li>
          <PaginationArrow
            disabled={currentPage === 1}
            onClick={handlePrevious}
            variant="prev"
          />
        </li>
        {visiblePages().map((pageNumber) => (
          <li key={pageNumber}>
            <PaginationLink
              isSelected={currentPage === pageNumber}
              pageNumber={pageNumber}
              pageUrl={createPageURL(pageNumber)}
            />
          </li>
        ))}
        <li>
          <PaginationArrow
            disabled={currentPage === totalPageNumber}
            onClick={handleNext}
            variant="next"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
