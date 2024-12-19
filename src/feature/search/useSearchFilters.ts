import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { encodeQuery } from '@/lib/utils.ts';

interface IProps {
  categoryParam: string;
}

const useSearchFilters = ({ categoryParam }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const [isPending, startTransition] = useTransition();

  const handleCategory = (
    key: string,
    optimisticCallback?: (value?: string) => void | undefined,
  ) => {
    params.delete('page');
    params.delete('q');
    params.set(categoryParam, encodeQuery(key));

    startTransition(() => {
      if (optimisticCallback) optimisticCallback();
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleClear = () => {
    const keys = [...params.keys()];

    for (const key of keys) {
      params.delete(key);

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    }
  };

  return {
    handleCategory,
    handleClear,
    search: {
      isPending,
      params: searchParams,
    },
  };
};

export { useSearchFilters };
