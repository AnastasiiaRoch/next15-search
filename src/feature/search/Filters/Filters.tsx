'use client';

import React, { use, useOptimistic, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { encodeQuery } from '@/lib/utils.ts';
import { ICategory } from '@/lib/types';
import Button from '@/components/Button';
import Tag from '@/components/Tag';

interface IProps {
  categoriesRequest: Promise<ICategory[]>;
}

const Filters = ({ categoriesRequest }: IProps) => {
  const categories = use(categoriesRequest);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const currentCategory = searchParams.get('category');

  const [isPending, startTransition] = useTransition();
  const [optimisticCategory, setOptimisticCategory] = useOptimistic(
    currentCategory,
    (_, action: string) => action,
  );

  const handleClear = () => {
    const keys = [...params.keys()];

    for (const key of keys) {
      params.delete(key);

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    }
  };

  const createPageURL = (key: string) => {
    params.delete('page');
    params.delete('q');
    params.set('category', encodeQuery(key));
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div
      className="mb-8"
      data-pending={isPending ? '' : undefined}
    >
      <div className="flex flex-wrap gap-3">
        {categories?.map((category: ICategory) => (
          <Tag
            isSelected={optimisticCategory === category?.slug}
            href={createPageURL(category?.slug)}
            key={category?.slug}
            onClick={() => startTransition(() => setOptimisticCategory(category?.slug))}
          >
            {category?.name}
          </Tag>
        ))}
      </div>
      <div className="text-right mt-5">
        <Button
          className="text-xs"
          onClick={handleClear}
          variant="text"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
