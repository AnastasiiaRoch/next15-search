import React from 'react';
import cn from 'classnames';
import { IComponent } from '@/lib/types';

const Skeleton = ({ className }: Omit<IComponent, 'children'>) => (
  <div className={cn('h-2.5 bg-gray-200 rounded-full dark:bg-gray-700', className)} />
);

export default Skeleton;
