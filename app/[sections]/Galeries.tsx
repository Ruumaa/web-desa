import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Image from 'next/image';

const Galeries = () => {
  const imgClass =
    'size-full object-cover object-center rounded-xl shadow-lg shadow-amber-200/40';

  return (
    <>
      <BaseLayout>
        <div
          id="galeries"
          className="min-h-screen  flex flex-col items-center justify-center py-20"
        >
          <div className="text-center max-w-xl mb-10">
            <h1 className="text-main text-3xl font-extrabold my-3">
              Galeri Desa Bawu
            </h1>
            <p className="text-sm text-gray-600">
              Jelajahi koleksi foto menarik keindahan alam, budaya, dan
              tempat-tempat ikonik desa{' '}
              <span className="text-secondary font-medium">Bawu</span> dalam
              satu tempat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 size-full">
            <Image
              src="/img.jpg"
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 md:row-span-2 h-80`}
            />

            <Image
              src="/img4.jpg"
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 md:row-span-3  h-96 `}
            />

            <Image
              src="/img3.jpg"
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 md:row-span-2 h-72 `}
            />

            <Image
              src="/img5.jpg"
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 h-48`}
            />

            <Image
              src={'/img2.jpg'}
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 md:col-start-5 md:col-end-7  h-48 md:-mt-8 `}
            />
            <Image
              src={'/img.jpg'}
              alt="img"
              width={500}
              height={500}
              className={`${imgClass} md:col-span-2 md:col-start-3 md:col-end-5  h-48 md:-mt-36 `}
            />
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Galeries;
