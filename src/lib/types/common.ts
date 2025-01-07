import { ElementType } from 'react';

export interface IComponent {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

export type SearchParamsType = Promise<{ [key: string]: string | string[] | undefined }>;

export interface IApiResponse {
  total: number;
  skip: number;
  limit: number;
}
