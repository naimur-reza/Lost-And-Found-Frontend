import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { TChildren } from "@/types/common";
import { Box } from "@mui/material";

const WithoutDashboardLayout = ({ children }: TChildren) => {
  return (
    <Box sx={{ backgroundColor: "#0e1217" }}>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default WithoutDashboardLayout;
