import { MAX_SEARCH_LIMIT } from '../constants';
import { isEmptyObj } from './objects';

interface IParams {
  category?: string;
  page?: number;
  q?: string;
  tag?: string;
}

export const encodeQuery = (query: string) => encodeURIComponent(query);

export const decodeQuery = (query?: string | null) => (query ? decodeURIComponent(query) : '');

export const buildApiQueryString = (params: IParams) => {
  const searchParams = new URLSearchParams();
  searchParams.set('limit', MAX_SEARCH_LIMIT.toString());

  if (isEmptyObj(params)) {
    return searchParams.toString();
  }

  const category = params.category || params.tag;
  if (!category && params.q) {
    searchParams.append('q', decodeQuery(params.q));
  }

  const page = Number(params.page) || 1;
  if (page > 1) {
    const skip = (page - 1) * MAX_SEARCH_LIMIT;
    searchParams.append('skip', skip.toString());
  }

  return searchParams.toString();
};
