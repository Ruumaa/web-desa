import BaseLayout from '../components/layouts/BaseLayout';
import VideoEmbed from '../components/VideoEmbed';

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center"
      >
        <BaseLayout>
          <div className="size-full grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10">
            <div className="h-full space-y-3 md:space-y-5 max-w-md">
              <h5 className="text-amber-400 text-base md:text-xl font-medium">
                Tentang Desa Bawu
              </h5>
              <h3 className="font-bold text-xl md:text-3xl text-main">
                🌿 Permata Alam di Ujung Utara Boyolali
              </h3>
              <p className="text-xs md:text-sm font-inter pr-4 md:pr-0 max-w-sm">
                Desa Bawu dikenal sebagai kawasan agraris yang subur dengan
                masyarakat yang menjunjung tinggi nilai gotong royong dan
                tradisi leluhur. Dikelilingi sawah yang menghijau dan udara yang
                sejuk, desa ini tumbuh sebagai contoh keharmonisan antara alam,
                budaya, dan kehidupan sosial.
              </p>
            </div>
            <div className="h-full mx-auto md:mx-0 md:ml-auto">
              <div className="relative w-[300px] md:w-[350px] xl:w-[450px] h-[300px] rounded-xl overflow-hidden">
                <VideoEmbed />
              </div>
            </div>
          </div>
        </BaseLayout>
      </div>
    </>
  );
};

export default About;
