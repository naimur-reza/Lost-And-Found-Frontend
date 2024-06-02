import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { TChildren } from "@/types/common";

const layout = ({ children }: TChildren) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default layout;
