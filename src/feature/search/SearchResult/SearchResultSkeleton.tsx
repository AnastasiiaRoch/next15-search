import React from 'react';
import { MAX_SEARCH_LIMIT } from '@/lib/constants';
import Grid from '@/components/Grid';
import Skeleton from '@/components/Skeleton';

interface IProps {
  renderItem: (index: number) => React.ReactNode;
}

const SearchResultSkeleton = ({ renderItem }: IProps) => (
  <>
    <Skeleton className="w-32 mt-10" />
    <Grid className="mt-4">
      {Array.from({ length: MAX_SEARCH_LIMIT }, (_, i) => renderItem(i))}
    </Grid>
  </>
);

export default SearchResultSkeleton;
