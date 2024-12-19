import { Suspense } from 'react';
import { buildApiQueryString } from '@/lib/utils.ts';
import { FiltersSkeleton } from '@/feature/search/FiltersUI';
import { IProduct, SearchParamsType } from '@/lib/types';
import { productsApi } from '@/lib/api';
import Product, { SkeletonProduct } from '@/feature/products/Product';
import ProductFilters from '@/feature/products/ProductFilters';
import SearchInput from '@/feature/search/SearchInput';
import SearchResult, { SearchResultSkeleton } from '@/feature/search/SearchResult';
import Typography from '@/components/Typography';

const ProductsSearchPage = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  const params = await searchParams;
  const query = buildApiQueryString(params);

  const categoriesRequest = productsApi.categories();
  const request = params?.category
    ? productsApi.searchByCategory(params.category, query)
    : productsApi.search(query);

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
        <ProductFilters categoriesRequest={categoriesRequest} />
      </Suspense>
      <Suspense
        key={JSON.stringify(params)}
        fallback={<SearchResultSkeleton renderItem={(i) => <SkeletonProduct key={i} />} />}
      >
        <SearchResult<IProduct>
          entity="products"
          request={request}
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

export default ProductsSearchPage;
