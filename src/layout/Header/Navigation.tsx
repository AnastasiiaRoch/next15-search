'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { routes } from '@/lib/routes';

const navLinks = [
  {
    href: routes.products,
    label: 'Products',
  },
  {
    href: routes.posts,
    label: 'Posts',
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-x-5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn('border-b-[1px] border-solid border-transparent hover:border-white', {
                'border-white': pathname?.endsWith(link?.href),
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
