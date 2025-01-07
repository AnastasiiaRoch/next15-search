import { MAX_SEARCH_LIMIT } from '../constants';
import { isEmptyObj } from './objects';

interface IParams {
  category?: string;
  page?: number;
  q?: string;
  tag?: string;
}

export const encodeQuery = (query: string) => encodeURIComponent(query);

export const decodeQuery = (query: string | null) =>
  query ? decodeURIComponent(query) : undefined;

export const buildApiQueryString = (params: IParams) => {
  const limit = `?limit=${MAX_SEARCH_LIMIT}`;

  if (isEmptyObj(params)) return limit;

  const q = params?.q ? `&q=${decodeQuery(params.q)}` : '';
  const page = Number(params?.page) || 1;
  const skip = page > 1 ? `&skip=${(page - 1) * MAX_SEARCH_LIMIT}` : '';
  const category = params?.category || params?.tag;

  return category ? `${limit}${skip}` : `${limit}${q}${skip}`;
};
