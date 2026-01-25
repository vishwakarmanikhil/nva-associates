import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import WhoWeWorkWith from "@/components/home/who-we-work-with";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq-section";
import FinalCTA from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <WhoWeWorkWith />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}