import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';
// import Skills from '../components/Skills';
// import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <WorkExperience />
      {/* <Skills />
      <Contact /> */}
    </div>
  );
}
