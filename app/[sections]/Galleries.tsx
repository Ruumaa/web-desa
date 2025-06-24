import BaseLayout from '../components/layouts/BaseLayout';
import Image from 'next/image';
import {
  WordReveal,
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  ImageReveal,
} from '../components/animations/TextReveal';

const Galleries = () => {
  const imgClass =
    'size-full object-cover object-center rounded-xl shadow-lg shadow-amber-200/40';

  const images = [
    {
      src: '/img.jpg',
      alt: 'Desa Bawu',
      className: `${imgClass} md:col-span-2 md:row-span-2 h-80`,
      delay: 0.1,
    },
    {
      src: '/img4.jpg',
      alt: 'Pemandangan Desa',
      className: `${imgClass} md:col-span-2 md:row-span-3 h-96`,
      delay: 0.2,
    },
    {
      src: '/img3.jpg',
      alt: 'Aktivitas Warga',
      className: `${imgClass} md:col-span-2 md:row-span-2 h-72`,
      delay: 0.3,
    },
    {
      src: '/img5.jpg',
      alt: 'Budaya Lokal',
      className: `${imgClass} md:col-span-2 h-48`,
      delay: 0.4,
    },
    {
      src: '/img2.jpg',
      alt: 'Tradisi Desa',
      className: `${imgClass} md:col-span-2 md:col-start-5 md:col-end-7 h-48 md:-mt-8`,
      delay: 0.5,
    },
    {
      src: '/img6.jpg',
      alt: 'Keindahan Alam',
      className: `${imgClass} md:col-span-2 md:col-start-3 md:col-end-5 h-48 md:-mt-36`,
      delay: 0.6,
    },
  ];

  return (
    <>
      <BaseLayout>
        <div
          id="galeries"
          className="min-h-screen flex flex-col items-center justify-center py-20"
        >
          {/* Header Section */}
          <StaggerContainer
            stagger={0.2}
            className="text-center max-w-xl mb-10"
          >
            <StaggerItem>
              <WordReveal
                text="Galeri Desa Bawu"
                stagger={0.1}
                className="text-main text-3xl font-extrabold my-3"
              />
            </StaggerItem>

            <StaggerItem>
              <BlurReveal duration={0.8}>
                <p className="text-sm text-gray-600">
                  Jelajahi koleksi foto menarik keindahan alam, budaya, dan
                  tempat-tempat ikonik desa{' '}
                  <span className="text-secondary font-medium">Bawu</span> dalam
                  satu tempat.
                </p>
              </BlurReveal>
            </StaggerItem>
          </StaggerContainer>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 size-full">
            {images.map((image, index) => (
              <ImageReveal
                key={index}
                delay={image.delay}
                duration={0.8}
                className={image.className}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="size-full object-cover object-center rounded-xl"
                  loading="lazy"
                />
              </ImageReveal>
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Galleries;
