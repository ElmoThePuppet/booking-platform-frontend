import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function HomePage() {
    return (
      <main>
        <HeroSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
        <TestimonialSection/>
        <CtaSection/>
        <Footer/>
      </main> 
    );
  }
  