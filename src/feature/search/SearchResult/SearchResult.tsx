import React from 'react';
import Pagination from '@/components/Pagination';
import Grid from '@/components/Grid';

interface ICard<T> {
  card: T;
  index?: number;
}

interface IData<T> {
  total: number;
  [key: string]: T[] | number;
}

interface IProps<T> {
  entity: string;
  renderCard: ({ card, index }: ICard<T>) => React.ReactElement;
  request: Promise<IData<T>>;
}

const SearchResult = async <T,>({ entity, request, renderCard }: IProps<T>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await request;

  const entityData = data[entity] as T[] | undefined;

  if (!data || !entityData?.length) {
    return <p>No results found</p>;
  }

  return (
    <>
      <p>Search result: {data?.total}</p>
      <Grid className="mt-5">
        {entityData?.map((card: T, index: number) => renderCard({ card, index }))}
      </Grid>
      <Pagination
        className="mt-10"
        totalItems={data?.total}
      />
    </>
  );
};

export default SearchResult;
