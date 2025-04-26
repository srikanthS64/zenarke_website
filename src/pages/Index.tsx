
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import CTA from "../components/sections/CTA";
import Faq from "@/components/sections/faq";

const Index = () => {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Faq />
    </div>
  );
};

export default Index;
