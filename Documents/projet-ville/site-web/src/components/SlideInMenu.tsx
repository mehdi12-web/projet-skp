'use client';

import React from 'react';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { Home, MapPin, Ticket, Calendar, Info } from 'lucide-react';

interface SlideInMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Lieux', path: '/lieux', icon: <MapPin size={20} /> },
    { name: 'Événements', path: '/evenements', icon: <Ticket size={20} /> },
    { name: 'Calendrier', path: '/calendrier', icon: <Calendar size={20} /> },
    { name: 'Carte', path: '/carte', icon: <MapPin size={20} /> }, // Re-using MapPin for Carte as MapIcon wasn't provided
    { name: 'À Propos', path: '/a-propos', icon: <Info size={20} /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#007B8F] text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
    >
      <div className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold">PROJET SKP</div>
        <button onClick={onClose} className="text-3xl">
          ×
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center gap-4 text-lg font-medium hover:text-skp-light cursor-pointer py-2 px-4">
              <Link href={item.path} onClick={onClose}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SlideInMenu;
