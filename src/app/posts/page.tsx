import { Suspense } from 'react';
import { buildApiQueryString } from '@/lib/utils.ts';
import { FiltersSkeleton } from '@/feature/search/FiltersUI';
import { IPost, SearchParamsType } from '@/lib/types';
import { postsApi } from '@/lib/api';
import Post, { SkeletonPost } from '@/feature/posts/Post';
import PostFilters from '@/feature/posts/PostsFilters';
import SearchInput from '@/feature/search/SearchInput';
import SearchResult, { SearchResultSkeleton } from '@/feature/search/SearchResult';
import Typography from '@/components/Typography';

const PostsSearchPage = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  const params = await searchParams;
  const query = buildApiQueryString(params);

  const tagsRequest = postsApi.tags();
  const request = params?.tag ? postsApi.searchByTag(params.tag, query) : postsApi.search(query);

  return (
    <>
      <Typography
        variant="h1"
        className="mb-8"
      >
        Posts Search
      </Typography>
      <SearchInput />
      <Suspense fallback={<FiltersSkeleton />}>
        <PostFilters tagsRequest={tagsRequest} />
      </Suspense>
      <Suspense
        key={JSON.stringify(params)}
        fallback={<SearchResultSkeleton renderItem={(i) => <SkeletonPost key={i} />} />}
      >
        <SearchResult<IPost>
          entity="posts"
          request={request}
          renderCard={({ card }) => (
            <Post
              key={card?.id}
              post={card}
            />
          )}
        />
      </Suspense>
    </>
  );
};

export default PostsSearchPage;
