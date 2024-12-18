import { get } from './fetchRequest';

export const productsApi = {
  categories: () => get('/products/categories'),
  search: (query?: string) => get(`/products/search${query}`, { cache: 'no-store' }),
  searchByCategory: (category: string | string[], query?: string) =>
    get(`/products/category/${category}${query}`, { cache: 'no-store' }),
};
