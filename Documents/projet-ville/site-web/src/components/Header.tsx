'use client';

import React, { useState } from 'react';
import SlideInMenu from './SlideInMenu';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white shadow-md flex items-center justify-between px-4">
      <button onClick={toggleMenu} className="text-2xl">
        <HiOutlineMenu />
      </button>
      <div className="text-xl font-bold">PROJET SKP</div>
      <button className="text-xl">
        <FiSearch />
      </button>
      <SlideInMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;

