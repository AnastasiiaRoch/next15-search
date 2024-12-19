import React from 'react';
import { IComponent } from '@/lib/types';
import Button from '@/components/Button';

interface IProps extends IComponent {
  isPending?: boolean;
  onClear?: VoidFunction;
}

const FiltersUI = ({ children, isPending, onClear }: IProps) => (
  <div
    className="mb-8"
    data-pending={isPending ? '' : undefined}
  >
    {children}
    <div className="text-center md:text-right mt-5">
      <Button
        className="w-auto text-xs"
        onClick={onClear}
        variant="text"
      >
        Clear All Filters
      </Button>
    </div>
  </div>
);

export default FiltersUI;
