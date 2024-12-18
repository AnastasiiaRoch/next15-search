'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FiX } from 'react-icons/fi';
import { decodeQuery, encodeQuery } from '@/lib/utils.ts';
import { InputChangeType } from '@/lib/types';
import Button from '@/components/Button';
import InputField from '@/components/InputField/InputField';
import Spinner from '@/components/Spinner';

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const initialValue = decodeQuery(q) || '';
  const [inputValue, setInputValue] = useState(initialValue);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: InputChangeType) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');
    params.delete('category');

    if (!inputValue) {
      params.delete('q');
    } else {
      params.set('q', encodeQuery(inputValue));
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  return (
    <form
      className="flex align-center gap-x-2 mb-6 children:mb-0"
      role="search"
    >
      <InputField
        buttonClick={handleClear}
        containerClassName="w-full"
        icon={inputValue ? <FiX size={26} /> : undefined}
        isLabelHidden
        label="Keywords"
        name="q"
        onChange={handleChange}
        placeholder="e.g. Phone"
        value={inputValue}
        variant="input"
      />
      <Button
        onClick={handleSearch}
        type="button"
      >
        {isPending ? <Spinner /> : 'Search'}
      </Button>
    </form>
  );
};

export default SearchInput;
