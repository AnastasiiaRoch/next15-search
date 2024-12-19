import React from 'react';
import Skeleton from '@/components/Skeleton';

const FiltersSkeleton = () => (
  <>
    <Skeleton className="w-full" />
    <Skeleton className="w-full mt-3" />
    <Skeleton className="w-[50%] mt-3" />
  </>
);

export default FiltersSkeleton;
