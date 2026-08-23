import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <CaseStudies />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
