import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link
    className="max-w-[12rem]"
    href="/"
  >
    <Image
      src="/images/logo.svg"
      alt="Logo"
      width={200}
      height={140}
    />
  </Link>
);

export default Logo;
