import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
