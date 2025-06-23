'use client';

import BaseLayout from '../components/layouts/BaseLayout';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { handleNavigation, navMenus } from '@/lib/navMenus';
import Image from 'next/image';

const Footer = () => {
  const hoverClass = 'hover:cursor-pointer hover:text-amber-400 duration-300';

  return (
    <div className="min-h-80 bg-secondary w-full py-8 text-white">
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 size-full">
          {/* grid 1 - Company Info */}
          <div className="flex flex-col gap-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="size-16 md:size-20 bg-main rounded-full flex flex-col flex-shrink-0 mb-3 md:mb-0">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="size-full"
                />
              </div>
              <h3 className="font-extrabold text-main text-center md:text-left md:max-w-[10rem] md:ml-3">
                Permata Alam di Ujung Utara Boyolali
              </h3>
            </div>
            <div>
              <p className="leading-5 font-semibold text-sm md:text-base">
                Desa Bawu, <br />
                Kecamatan Kemusu, <br />
                Kab. Boyolali.
              </p>
            </div>
          </div>

          {/* grid 2 - Menu */}
          <div className="text-center md:text-left md:pl-14 w-fit mx-auto md:mx-0">
            <h1 className="font-extrabold text-main mb-4 text-lg">Menu</h1>
            <div className="flex flex-col gap-y-2 text-sm md:text-base">
              {navMenus.map((item) => (
                <div
                  key={item.title}
                  className={`${hoverClass} font-medium py-1`}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* grid 3 - Social Media */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-extrabold text-main mb-4 text-lg">
              Sosial Media
            </h1>
            <div className="flex gap-x-4 items-center justify-center md:justify-start">
              <div className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <FaInstagram size={24} className={hoverClass} />
              </div>
              <div className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <FaTiktok size={20} className={hoverClass} />
              </div>
            </div>

            {/* Additional contact info for mobile */}
            <div className="mt-6 md:hidden">
              <p className="text-xs text-gray-300">
                © 2024 Desa Bawu. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright for desktop */}
        <div className="hidden md:block mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-sm text-gray-300">
            © 2025 Desa Bawu. Semua hak dilindungi.
          </p>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Footer;
