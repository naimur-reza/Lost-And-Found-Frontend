import { Box, Container, Divider, Typography } from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        mt: "2rem",
        borderTop: "1px solid grey",
      }}
    >
      <Box>
        <Box
          sx={{
            justifyItems: "center",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            mx: "auto",
          }}
        >
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RetrieveX
          </Typography>
        </Box>
        <Typography sx={{ color: "grey" }}>
          &copy; {new Date().getFullYear()} RetrieveX. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
