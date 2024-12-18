/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect } from 'react';

interface IProps {
  callback: VoidFunction;
  elementRef: React.RefObject<HTMLElement>;
  isOpen?: boolean;
}

const useClickOutside = ({ elementRef, callback, isOpen = true }: IProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: any) => {
      if (elementRef?.current && !elementRef?.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, elementRef, isOpen]);
};

export { useClickOutside };