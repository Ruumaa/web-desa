import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { GiFarmer, GiGoat } from 'react-icons/gi';
import { IoSchool } from 'react-icons/io5';
import RadialBgIcon from '../components/RadialBgIcon';

const Features = () => {
  const features = [
    {
      icon: <IoSchool size={65} className="text-main" />,
      title: 'Pendidikan Anak yang Merata',
      description:
        'Desa Bawu berkomitmen menyediakan akses pendidikan dasar yang merata bagi seluruh anak, demi masa depan yang lebih cerah dan berdaya saing.',
    },
    {
      icon: <GiFarmer size={65} className="text-main" />,
      title: 'Pertanian Sebagai Nafas Kehidupan',
      description:
        'Pertanian menjadi tulang punggung perekonomian desa, dengan lahan subur dan semangat kerja keras yang diwariskan dari generasi ke generasi',
    },
    {
      icon: <GiGoat size={65} className="text-main" />,
      title: 'Peternakan yang Terintegrasi',
      description:
        'Peternakan di Desa Bawu menjadi bagian penting dalam mendukung ekonomi warga, dengan sistem yang mulai terintegrasi antara pakan lokal, kandang sehat, dan hasil ternak yang produktif.',
    },
  ];
  return (
    <div
      id="features"
      className="min-h-screen w-full flex flex-col items-center justify-center pb-20 md:pb-0"
    >
      <BaseLayout>
        <div className="text-center">
          {/* slogan */}
          <h5 className="text-amber-400 text-sm mx-8 leading-3.5 md:text-base md:leading-none md:mx-0 font-medium md:font-semibold">
            Bawu: Permata Alam di Ujung Utara Boyolali
          </h5>
          {/* title */}
          <h1 className="text-main text-xl md:text-3xl font-extrabold my-2 md:my-3">
            Tiga Pilar Kehidupan Desa Bawu
          </h1>
          {/* subtitle */}
          <p className="text-xs md:text-sm max-w-md mx-auto">
            Mengakar pada nilai pendidikan, pertanian yang lestari, dan tradisi
            yang dijaga turun-temurun.
          </p>
          {/* features */}
          <div className="w-full max-w-4xl mx-auto h-fit p-5 xl:p-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 bg-amber-200/60 rounded-2xl mt-10 text-center md:text-left">
            {features.map((feature, i) => (
              <div key={i}>
                <div className="relative mx-auto md:mx-0 size-16 md:size-24 flex items-center justify-center">
                  <RadialBgIcon />
                  {/* Icon */}
                  <div className="relative z-10">{feature.icon}</div>
                </div>

                <h3 className="text-base md:text-xl leading-5 font-semibold my-2 md:my-4">
                  {feature.title}
                </h3>
                <p className="text-xs md:pr-5 px-3 md:px-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Features;
