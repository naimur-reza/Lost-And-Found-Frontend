import AboutSection from "@/components/UI/HomePage/AboutUs";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import RecentLostItems from "@/components/UI/HomePage/RecentLostItems";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentLostItems />
    </>
  );
};

export default page;
