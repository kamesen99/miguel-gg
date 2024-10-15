import Image from 'next/image';

const Hero = () => (
  <section className="hero-section bg-gradient-to-r from-blue-900 to-purple-700 text-white p-10 md:flex md:items-center md:justify-between">
    <div className="md:w-1/2 space-y-4">
      <h1 className="text-5xl md:text-6xl font-extrabold">Miguel Pascual</h1>
      <p className="text-lg md:text-2xl">Chief Science Officer & Co-Founder at Exploration Laboratories</p>
      <p className="mt-4 md:text-lg">Increasing humanity's access to space through technological achievements.</p>
      <a
        href="#about"
        className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
      >
        Learn More
      </a>
    </div>
    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
      <Image
        src="/images/hero.jpeg"
        alt="Miguel Pascual Hero"
        width={250}
        height={250}
        className="rounded-full shadow-xl border-4 border-gray-200"
      />
    </div>
  </section>
);

export default Hero;