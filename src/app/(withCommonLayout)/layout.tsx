import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { TChildren } from "@/types/common";
import { Box } from "@mui/material";

const layout = ({ children }: TChildren) => {
  return (
    <>
      <Navbar />
      <Box
      // sx={{
      //   height: "calc(100vh - 64px)",
      // }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default layout;
