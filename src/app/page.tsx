import { Suspense } from 'react';
import { buildApiQueryString } from '@/lib/utils.ts';
import { productsApi } from '@/lib/api/products';
import { IProduct, SearchParamsType } from '@/lib/types';
import Filters, { FiltersSkeleton } from '@/feature/search/Filters';
import Product, { SkeletonProduct } from '@/feature/search/Product';
import SearchInput from '@/feature/search/SearchInput';
import SearchResult, { SearchResultSkeleton } from '@/feature/search/SearchResult';
import Typography from '@/components/Typography';

const Home = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  const params = await searchParams;
  const query = buildApiQueryString(params);

  const categories = productsApi.categories();

  return (
    <>
      <Typography
        variant="h1"
        className="mb-8"
      >
        Products Search
      </Typography>
      <SearchInput />
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters categoriesRequest={categories} />
      </Suspense>
      <Suspense
        key={JSON.stringify(params)}
        fallback={<SearchResultSkeleton renderItem={(i) => <SkeletonProduct key={i} />} />}
      >
        <SearchResult<IProduct>
          entity="products"
          request={
            params?.category
              ? productsApi.searchByCategory(params.category, query)
              : productsApi.search(query)
          }
          renderCard={({ card }) => (
            <Product
              key={card?.id}
              product={card}
            />
          )}
        />
      </Suspense>
    </>
  );
};

export default Home;
