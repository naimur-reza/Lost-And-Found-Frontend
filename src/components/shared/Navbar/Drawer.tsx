import AuthButtons from "@/components/UI/AuthButtons";
import { navItems } from "@/constants/navItems";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const Sidebar = (props: { window?: () => Window }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "info.main",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        RetrieveX
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center", fontWeight: "medium" }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          my: 2,
        }}
      >
        <AuthButtons />
      </Box>
    </Box>
  );

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Sidebar;
