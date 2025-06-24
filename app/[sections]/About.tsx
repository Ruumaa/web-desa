import BaseLayout from '../components/layouts/BaseLayout';
import VideoEmbed from '../components/VideoEmbed';
import {
  WordReveal,
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  ImageReveal,
} from '../components/animations/TextReveal';

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center"
      >
        <BaseLayout>
          <div className="size-full grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10">
            {/* Text Content with staggered animations */}
            <StaggerContainer
              stagger={0.2}
              className="h-full space-y-3 md:space-y-5 max-w-md"
            >
              <StaggerItem>
                <h5 className="text-amber-400 text-base md:text-xl font-medium">
                  Tentang Desa Bawu
                </h5>
              </StaggerItem>

              <StaggerItem>
                <WordReveal
                  text="🌿 Permata Alam di Ujung Utara Boyolali"
                  stagger={0.08}
                  className="font-bold text-xl md:text-3xl text-main"
                />
              </StaggerItem>

              <StaggerItem>
                <BlurReveal duration={1}>
                  <p className="text-xs md:text-sm font-inter pr-4 md:pr-0 max-w-sm">
                    Desa Bawu dikenal sebagai kawasan agraris yang subur dengan
                    masyarakat yang menjunjung tinggi nilai gotong royong dan
                    tradisi leluhur. Dikelilingi sawah yang menghijau dan udara
                    yang sejuk, desa ini tumbuh sebagai contoh keharmonisan
                    antara alam, budaya, dan kehidupan sosial.
                  </p>
                </BlurReveal>
              </StaggerItem>
            </StaggerContainer>

            {/* Video with scale animation */}
            <div className="h-full mx-auto md:mx-0 md:ml-auto">
              <ImageReveal
                delay={0.8}
                className="relative w-[300px] md:w-[350px] xl:w-[450px] h-[300px] rounded-xl overflow-hidden"
              >
                <VideoEmbed />
              </ImageReveal>
            </div>
          </div>
        </BaseLayout>
      </div>
    </>
  );
};

export default About;
