import { MAX_SEARCH_LIMIT } from '../constants';
import { isEmptyObj } from './objects';

export const encodeQuery = (query: string) => encodeURIComponent(query)?.replace(/%20|\+/g, '-');
export const decodeQuery = (query: string) => decodeURIComponent(query)?.replace(/%20|\-/g, ' ');

type ParamsType = {
  page?: number;
  q?: string;
  category?: string;
};

export const buildApiQueryString = (params: ParamsType) => {
  const limit = `?limit=${MAX_SEARCH_LIMIT}`;

  if (isEmptyObj(params)) return limit;

  const q = params?.q ? `&q=${decodeQuery(params.q)}` : '';
  const page = Number(params?.page) || 1;
  const skip = page > 1 ? `&skip=${(page - 1) * MAX_SEARCH_LIMIT}` : '';

  return params?.category ? `${limit}${skip}` : `${limit}${q}${skip}`;
};
