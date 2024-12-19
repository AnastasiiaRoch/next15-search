import React from 'react';
import Skeleton from '@/components/Skeleton';

const SkeletonPost = () => (
  <div
    className="max-w-sm animate-pulse dark:border-gray-700"
    role="status"
  >
    <div className="flex items-center gap-x-2 mb-4">
      <Skeleton className="w-4/12" />
      <Skeleton className="w-4/12" />
      <Skeleton className="w-4/12" />
    </div>
    <div className="group relative">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-8 w-full mt-2" />
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

export default SkeletonPost;
