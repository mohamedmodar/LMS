
import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Index;
