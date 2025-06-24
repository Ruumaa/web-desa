import { GrMapLocation } from 'react-icons/gr';
import BaseLayout from '../components/layouts/BaseLayout';
import MapEmbed from '../components/MapEmbed';
import RadialBgIcon from '../components/RadialBgIcon';
import { TiLightbulb } from 'react-icons/ti';

const Location = () => {
  return (
    <div
      id="location"
      className="min-h-screen bg-secondary flex flex-col items-center justify-center py-20"
    >
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-3 md:gap-x-5 text-white">
          <div>
            {/* slogan */}
            <h3 className="text-amber-400 text-sm md:text-base font-semibold">
              Mudah Dijangkau, Dikelilingi Alam
            </h3>
            {/* title */}
            <h1 className="font-bold text-xl md:text-3xl text-main md:mt-2">
              Lokasi Strategis Desa Bawu
            </h1>

            <div className="mt-5 space-y-5 md:mt-5 md:space-y-5">
              <div className="grid grid-cols-3 md:grid-cols-3 md:gap-4">
                <div className="flex flex-col md:items-center justify-center">
                  <div className="relative size-20 md:size-30 rounded-full flex items-center justify-center">
                    <RadialBgIcon />
                    <div className="relative z-10">
                      <GrMapLocation size={75} className="text-main" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col col-span-2">
                  <h1 className="font-bold text-accent">Lokasi</h1>
                  <p className="text-xs md:pr-5">
                    Desa Bawu terletak di Kecamatan Kemusu, Kabupaten Boyolali,
                    Jawa Tengah. Berada di perbukitan utara dengan akses darat
                    yang terus berkembang, desa ini dikelilingi oleh hamparan
                    sawah dan udara sejuk khas pedesaan.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 md:gap-4">
                <div className="flex flex-col md:items-center justify-center ">
                  <div className="relative flex items-center justify-center size-20 md:size-30 rounded-full">
                    <RadialBgIcon />
                    <div className="relative z-10">
                      <TiLightbulb size={75} className="text-main" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col col-span-2 ">
                  <h1 className="font-bold text-accent">Potensi Desa</h1>
                  <p className="text-xs leading-3.5 md:pr-5">
                    Bawu tumbuh sebagai desa agraris dengan sektor utama
                    pertanian dan peternakan rakyat. Warga juga aktif
                    mengembangkan UMKM seperti pengolahan hasil tani dan makanan
                    lokal, menjadikan desa ini pusat ekonomi berbasis gotong
                    royong dan kearifan lokal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Location;
