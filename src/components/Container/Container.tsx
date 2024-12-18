import React from 'react';
import { IComponent } from '@/lib/types';

const Container = ({ children }: IComponent) => (
  <div className="max-w-5xl mx-auto px-6">{children}</div>
);

export default Container;
