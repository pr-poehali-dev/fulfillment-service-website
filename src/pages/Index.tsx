import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Geography from "@/components/Geography";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <Geography />
      <Gallery />
      <CTA />
    </div>
  );
};

export default Index;
