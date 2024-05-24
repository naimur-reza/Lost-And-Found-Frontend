import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { TChildren } from "@/types/common";

const layout = ({ children }: TChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
