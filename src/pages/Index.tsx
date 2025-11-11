import { HeroCarousel } from "@/components/HeroCarousel";
import { WorkGallery } from "@/components/WorkGallery";
import { AIChat } from "@/components/AIChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <WorkGallery />
      <AIChat />
      <Footer />
    </div>
  );
};

export default Index;
