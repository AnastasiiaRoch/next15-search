import { get } from './fetchRequest';

export const postsApi = {
  tags: () => get('/posts/tags'),
  search: (query?: string) => get(`/posts/search${query}`, { cache: 'no-store' }),
  searchByTag: (category: string | string[], query?: string) =>
    get(`/posts/tag/${category}${query}`, { cache: 'no-store' }),
};
