import { HeroCarousel } from "@/components/HeroCarousel";
import { WorkGallery } from "@/components/WorkGallery";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AIChat } from "@/components/AIChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <WorkGallery />
      <TestimonialsSection />
      <AIChat />
      <Footer />
    </div>
  );
};

export default Index;
