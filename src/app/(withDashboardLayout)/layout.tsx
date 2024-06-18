"use client";

import React, { useEffect, useState } from "react";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
// import { isLoggedIn } from "@/services/auth.services";
// import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     setIsAuthenticated(false);
  //     router.push("/login");
  //   }
  // }, [router]);

  // if (!isAuthenticated) {
  //   return null;
  // }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
