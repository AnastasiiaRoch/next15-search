import React from 'react';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Navigation from './Navigation';

const Header = () => (
  <header className="bg-dark py-3 text-slate-50 [grid-area:header]">
    <Container className="flex items-center justify-between">
      <Logo />
      <Navigation />
    </Container>
  </header>
);

export default Header;
