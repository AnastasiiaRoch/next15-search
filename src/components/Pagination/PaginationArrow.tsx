import React from 'react';
import { TbChevronRight, TbChevronLeft } from 'react-icons/tb';
import cn from 'classnames';
import { ButtonElementType } from '@/lib/types';

interface IProps extends ButtonElementType {
  onClick?: VoidFunction;
  variant: 'prev' | 'next';
}

const PaginationArrow = ({ disabled, onClick, variant, ...props }: IProps) => {
  const isNext = variant === 'next';
  const iconClasses = 'inline-block text-lg';

  return (
    <button
      className={cn('w-8 h-8 leading-8 block bg-white text-center', {
        'opacity-60': disabled,
      })}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      {isNext ? (
        <TbChevronRight className={iconClasses} />
      ) : (
        <TbChevronLeft className={iconClasses} />
      )}
      <span className="visually-hidden">{isNext ? 'Next' : 'Previous'} page</span>
    </button>
  );
};

export default PaginationArrow;
