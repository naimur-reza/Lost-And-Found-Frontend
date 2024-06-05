import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  const drawerItems = [
    {
      title: "Dashboard",
      path: "",
      icon: DashboardIcon,
    },
    {
      title: "Manage Users",
      path: "/manage-users",
      icon: PersonOutlineOutlinedIcon,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "info.main", height: "100%" }}>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={} width={40} height={40} alt="logo" /> */}
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          RetrieveX
        </Typography>
      </Stack>
      <List>
        {drawerItems.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
