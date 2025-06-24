import About from './[sections]/About';
import Features from './[sections]/Features';
import Footer from './[sections]/Footer';
import Galleries from './[sections]/Galleries';
import Hero from './[sections]/Hero';
import Location from './[sections]/Location';
import DotBg from './components/layouts/DotBg';
import GridBg from './components/layouts/GridBg';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative w-full">
        <DotBg />

        <div className="relative z-10">
          <About />
          <Features />
        </div>
      </div>

      <Location />

      <div className="relative">
        <div className="relative z-10">
          <Galleries />
        </div>
        <GridBg />
      </div>
      <Footer />
    </>
  );
}
