import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <Stats />

        <About />

        <Skills />

        <Education />

        <Experience />

        <Achievements />

        <Projects />

        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}