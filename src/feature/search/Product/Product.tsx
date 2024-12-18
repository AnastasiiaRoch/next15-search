import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/lib/types';
import { routes } from '@/lib/routes';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => (
  <div className="group relative">
    <Link href={routes.product(product?.id)}>
      <Image
        src={product?.thumbnail}
        alt={product?.title}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        width={300}
        height={140}
      />
    </Link>
    <div className="mt-4 flex justify-between gap-2">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link
            className="hover:text-primary"
            href={routes.product(product?.id)}
          >
            {product?.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product?.brand}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">${product?.price}</p>
    </div>
  </div>
);

export default Product;
