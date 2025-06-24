import { GrMapLocation } from 'react-icons/gr';
import BaseLayout from '../components/layouts/BaseLayout';
import MapEmbed from '../components/MapEmbed';
import RadialBgIcon from '../components/RadialBgIcon';
import { TiLightbulb } from 'react-icons/ti';
import {
  TextReveal,
  WordReveal,
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  ScaleReveal,
  SlideReveal,
} from '../components/animations/TextReveal';

const Location = () => {
  return (
    <div
      id="location"
      className="min-h-screen bg-secondary flex flex-col items-center justify-center py-20"
    >
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-3 md:gap-x-5 text-white">
          {/* Text Content */}
          <StaggerContainer stagger={0.2}>
            {/* Slogan */}
            <StaggerItem>
              <h3 className="text-amber-400 text-sm md:text-base font-semibold">
                Mudah Dijangkau, Dikelilingi Alam
              </h3>
            </StaggerItem>

            {/* Title */}
            <StaggerItem>
              <WordReveal
                text="Lokasi Strategis Desa Bawu"
                stagger={0.1}
                className="font-bold text-xl md:text-3xl text-main md:mt-2"
              />
            </StaggerItem>

            {/* Info Cards */}
            <StaggerItem className="mt-5 space-y-5 md:mt-5 md:space-y-5">
              {/* Location Card */}
              <SlideReveal
                delay={0.4}
                direction="left"
                className="grid grid-cols-3 md:grid-cols-3 md:gap-4"
              >
                <div className="flex flex-col md:items-center justify-center">
                  <ScaleReveal delay={0.6}>
                    <div className="relative size-20 md:size-30 rounded-full flex items-center justify-center">
                      <RadialBgIcon />
                      <div className="relative z-10">
                        <GrMapLocation size={75} className="text-main" />
                      </div>
                    </div>
                  </ScaleReveal>
                </div>
                <div className="flex flex-col col-span-2">
                  <TextReveal delay={0.8}>
                    <h1 className="font-bold text-accent">Lokasi</h1>
                  </TextReveal>
                  <BlurReveal delay={1} duration={0.8}>
                    <p className="text-xs md:pr-5">
                      Desa Bawu terletak di Kecamatan Kemusu, Kabupaten
                      Boyolali, Jawa Tengah. Berada di perbukitan utara dengan
                      akses darat yang terus berkembang, desa ini dikelilingi
                      oleh hamparan sawah dan udara sejuk khas pedesaan.
                    </p>
                  </BlurReveal>
                </div>
              </SlideReveal>

              {/* Potential Card */}
              <SlideReveal
                delay={0.6}
                direction="left"
                className="grid grid-cols-3 md:grid-cols-3 md:gap-4"
              >
                <div className="flex flex-col md:items-center justify-center">
                  <ScaleReveal delay={0.8}>
                    <div className="relative flex items-center justify-center size-20 md:size-30 rounded-full">
                      <RadialBgIcon />
                      <div className="relative z-10">
                        <TiLightbulb size={75} className="text-main" />
                      </div>
                    </div>
                  </ScaleReveal>
                </div>
                <div className="flex flex-col col-span-2">
                  <TextReveal delay={1}>
                    <h1 className="font-bold text-accent">Potensi Desa</h1>
                  </TextReveal>
                  <BlurReveal delay={1.2} duration={0.8}>
                    <p className="text-xs leading-3.5 md:pr-5">
                      Bawu tumbuh sebagai desa agraris dengan sektor utama
                      pertanian dan peternakan rakyat. Warga juga aktif
                      mengembangkan UMKM seperti pengolahan hasil tani dan
                      makanan lokal, menjadikan desa ini pusat ekonomi berbasis
                      gotong royong dan kearifan lokal.
                    </p>
                  </BlurReveal>
                </div>
              </SlideReveal>
            </StaggerItem>
          </StaggerContainer>

          {/* Map */}
          <SlideReveal delay={1} direction="right" className="mt-10">
            <MapEmbed />
          </SlideReveal>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Location;
