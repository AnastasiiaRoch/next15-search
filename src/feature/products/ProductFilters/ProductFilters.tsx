'use client';

import React, { use, useOptimistic } from 'react';
import { ICategory } from '@/lib/types';
import { useSearchFilters } from '@/feature/search/useSearchFilters';
import FiltersUI from '@/feature/search/FiltersUI';
import Tag from '@/components/Tag';

interface IProps {
  categoriesRequest: Promise<ICategory[]>;
}

const ProductFilters = ({ categoriesRequest }: IProps) => {
  const categories = use(categoriesRequest);

  const { handleCategory, handleClear, params } = useSearchFilters({
    categoryParam: 'category',
  });

  const currentCategory = params.get('category');
  const [optimisticCategory, setOptimisticCategory] = useOptimistic(
    currentCategory,
    (_, action: string) => action,
  );

  return (
    <FiltersUI onClear={handleClear}>
      <div className="flex flex-wrap gap-3">
        {categories?.map((category: ICategory) => (
          <Tag
            isSelected={optimisticCategory === category?.slug}
            key={category?.slug}
            onClick={() =>
              handleCategory(category?.slug, () => setOptimisticCategory(category?.slug))
            }
          >
            {category?.name}
          </Tag>
        ))}
      </div>
    </FiltersUI>
  );
};

export default ProductFilters;
