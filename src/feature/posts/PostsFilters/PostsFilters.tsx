'use client';

import React, { use, useOptimistic } from 'react';
import { ICategory } from '@/lib/types';
import { useSearchFilters } from '@/feature/search/useSearchFilters';
import FiltersUI from '@/feature/search/FiltersUI';
import Tag from '@/components/Tag';

interface IProps {
  tagsRequest: Promise<ICategory[]>;
}

const PostFilters = ({ tagsRequest }: IProps) => {
  const tags = use(tagsRequest);

  const { handleCategory, handleClear, search } = useSearchFilters({
    categoryParam: 'tag',
  });

  const currentCategory = search.params.get('tag');
  const [optimisticCategory, setOptimisticCategory] = useOptimistic(
    currentCategory,
    (_, action: string) => action,
  );

  // Cut it to make it visually shorter, we can avoid it
  const transformedTags = tags?.slice(0, 36);

  return (
    <FiltersUI
      isPending={search.isPending}
      onClear={handleClear}
    >
      <div className="flex flex-wrap gap-3">
        {transformedTags?.map((tag: ICategory) => (
          <Tag
            isSelected={optimisticCategory === tag?.slug}
            key={tag?.slug}
            onClick={() => handleCategory(tag?.slug, () => setOptimisticCategory(tag?.slug))}
          >
            {tag?.name}
          </Tag>
        ))}
      </div>
    </FiltersUI>
  );
};

export default PostFilters;
