import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
