import Navbar from "@/components/shared/Navbar";
import { TChildren } from "@/types/common";

const layout = ({ children }: TChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
