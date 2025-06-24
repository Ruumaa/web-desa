'use client';
import { handleNavigation } from '@/lib/navMenus';
import Button from '../components/Button';
import BaseLayout from '../components/layouts/BaseLayout';
import Navbar from '../components/Navbar';
import {
  TextReveal,
  WordReveal,
  BlurReveal,
  ScaleReveal,
} from '../components/animations/TextReveal';

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
            {/* Location badge with scale animation */}
            <ScaleReveal delay={0.2} className="mb-20">
              <div className="rounded-full bg-gradient-to-b bg-white/10 w-fit px-5 h-10 flex items-center justify-center text-xs md:text-base text-accent">
                Desa Bawu - Kemusu, Boyolali
              </div>
            </ScaleReveal>

            {/* Main title with word reveal */}
            <WordReveal
              text="Selamat Datang di Desa Bawu"
              delay={0.5}
              stagger={0.15}
              className="text-3xl md:text-5xl font-bold py-2 text-amber-300"
            />

            {/* Description with blur reveal */}
            <BlurReveal delay={1.2} duration={1}>
              <p className="max-w-xl text-xs mt-2 mb-4 md:my-0 md:text-sm text-background">
                Desa yang asri dan penuh kebersamaan di lereng timur Gunung
                Merbabu. Temukan informasi seputar pemerintahan, potensi desa,
                dan kegiatan masyarakat kami.
              </p>
            </BlurReveal>

            {/* Button with text reveal */}
            <TextReveal delay={1.6} className="mt-3 md:mt-5">
              <Button
                onClick={() => handleNavigation('#about')}
                className="text-sm md:text-base"
              >
                Tentang Desa
              </Button>
            </TextReveal>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Hero;
