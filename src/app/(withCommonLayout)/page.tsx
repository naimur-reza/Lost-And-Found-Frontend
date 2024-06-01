import AboutSection from "@/components/UI/HomePage/AboutUs";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import RecentLostItems from "@/components/UI/HomePage/RecentLostItems";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box display="flex" flexDirection="column" gap={20}>
      <HeroSection />
      <AboutSection />
      <RecentLostItems />
    </Box>
  );
};

export default page;
