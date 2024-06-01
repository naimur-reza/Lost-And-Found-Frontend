import { getUserInfo } from "@/services/auth.services";
import { Avatar, Box, Button, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { removeFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/authKey";
const AuthButtons = () => {
  const user = getUserInfo();

  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    removeFromLocalStorage(authKey);
    router.push("/login");
    // router.refresh()
    handleClose();
  };

  return (
    <>
      {!user ? (
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Link href="/register" passHref>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              color="success"
              variant="contained"
              startIcon={<LoginOutlinedIcon />}
            >
              Login
            </Button>
          </Link>
        </Box>
      ) : (
        <>
          <Avatar
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            D
          </Avatar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <Link href="/profile">
                <Typography variant="inherit">Profile</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default AuthButtons;
