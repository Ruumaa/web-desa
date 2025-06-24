'use client';

import { handleNavigation, navMenus } from '@/lib/navMenus';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import BaseLayout from './layouts/BaseLayout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <BaseLayout>
      <nav className="w-full h-20 flex items-center justify-between py-4">
        <div className="w-fit">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:justify-around md:font-medium md:gap-x-5">
          {navMenus.map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavigation(item.href)}
              className="cursor-pointer hover:text-secondary duration-300 transform hover:scale-105"
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button className="w-fit h-10 md:hidden z-50" onClick={handleOpen}>
          {isOpen ? <FaTimes /> : <FaGripLines />}
        </Button>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
              onClick={handleOpen}
            />

            <div className="fixed top-16 right-12 w-60 bg-background rounded-lg shadow-2xl z-50 py-2">
              <div className="px-4 py-2 border-b border-gray-200 mb-2">
                <p className="text-amber-400 font-bold text-lg">
                  Menu Navigasi
                </p>
              </div>

              <div className="space-y-1">
                {navMenus.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      handleNavigation(item.href);
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-main font-medium"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </BaseLayout>
  );
};

export default Navbar;
