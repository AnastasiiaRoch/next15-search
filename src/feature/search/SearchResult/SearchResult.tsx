import React from 'react';
import Pagination from '@/components/Pagination';
import Grid from '@/components/Grid';

interface ICard<T> {
  card: T;
  index?: number;
}

interface IProps<T> {
  entity: string;
  renderCard: ({ card, index }: ICard<T>) => React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: Promise<any>;
}

const SearchResult = async <T,>({ entity, request, renderCard }: IProps<T>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await request;

  if (!data || !data?.[entity]?.length) {
    return <p>No results found</p>;
  }

  return (
    <>
      <p className="text-sm">Search result: {data?.total}</p>
      <Grid className="mt-4">
        {data?.[entity]?.map((card: T, index: number) => renderCard({ card, index }))}
      </Grid>
      <Pagination
        className="mt-10"
        totalItems={data?.total}
      />
    </>
  );
};

export default SearchResult;
