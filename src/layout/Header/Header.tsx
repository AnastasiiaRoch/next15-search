import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';

const Header = () => (
  <header className="bg-dark py-3 text-slate-50 [grid-area:header]">
    <Container>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={200}
          height={140}
        />
      </Link>
    </Container>
  </header>
);

export default Header;
