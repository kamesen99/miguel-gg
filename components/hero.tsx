import Image from 'next/image';

const Hero = () => (
  <section className="hero-section bg-gray-800 text-white p-10 flex items-center justify-between">
    <div>
      <h1 className="text-4xl font-bold">Miguel Pascual</h1>
      <p className="text-xl mt-4">Chief Science Officer & Co-Founder at Exploration Laboratories</p>
      <p className="mt-2">Increasing humanity's access to space through technological achievements.</p>
    </div>
    <Image src="/images/hero.jpeg" alt="Miguel Pascual Hero" width={400} height={400} className="rounded-full" />
  </section>
);

export default Hero;
