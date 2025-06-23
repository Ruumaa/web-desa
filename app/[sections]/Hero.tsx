'use client';
import { handleNavigation } from '@/lib/navMenus';
import Button from '../components/Button';
import BaseLayout from '../components/layouts/BaseLayout';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <div
      className="w-full h-screen relative bg-[url(/img.jpg)] bg-cover [background-position:80%_30%] bg-blend-overlay bg-black/50 text-white"
      id="home"
    >
      <Navbar />
      <BaseLayout>
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center space-y-2 md:space-y-5 -mt-32 md:-mt-28">
            <div className="rounded-full bg-gradient-to-b bg-white/10 w-fit px-5 h-10 flex items-center justify-center mb-20 text-xs md:text-base">
              Desa Bawu - Kemusu, Boyolali
            </div>

            <h1 className="text-3xl md:text-5xl font-bold">
              Selamat Datang di{' '}
              <span className="bg-gradient-to-bl from-main via-secondary to-accent bg-clip-text text-transparent">
                {' '}
                Desa Bawu
              </span>
            </h1>

            <p className="max-w-xl text-xs mt-2 mb-4 md:my-0 md:text-sm text-background">
              Desa yang asri dan penuh kebersamaan di lereng timur Gunung
              Merbabu. Temukan informasi seputar pemerintahan, potensi desa, dan
              kegiatan masyarakat kami.
            </p>

            <Button
              onClick={() => handleNavigation('#about')}
              className="mt-3 text-sm md:text-base md:mt-5"
            >
              Tentang Kami
            </Button>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Hero;
