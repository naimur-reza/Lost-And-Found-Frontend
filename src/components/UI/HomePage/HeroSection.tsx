import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)",
          gap: "3rem",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "1.7rem",
              },
              fontWeight: "bold",
              color: "success.main",
            }}
            component="h1"
          >
            Lost Something? Found Something? <br /> We&rsquo;ve Got You Covered!
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.1rem",
              },
              color: "grey",
            }}
            component="h2"
          >
            Join our community to report and find lost items easily.
          </Typography>

          <Box
            sx={{
              mt: "1rem",
              display: "flex",
              gap: "1rem",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
            }}
          >
            <Link href="/report-lost-item" passHref>
              <Button color="success" variant="contained">
                Report a Lost Item
              </Button>
            </Link>

            <Link href="/report-found-item" passHref>
              <Button color="success" variant="outlined">
                Report a Found Item
              </Button>
            </Link>
          </Box>
        </Box>

        <div className=" absolute w-[300px] lg:w-[450px] opacity-50 h-[200px] -left-44 lg:-left-12 top-52 bg-gradient-to-t  from-[#cf25b0e4] to-[#2f1c8fec] blur-[80px] z-10" />
        <div className=" absolute w-[200px] lg:w-[300px] lg:[300px] right-0 opacity-50 h-[200px]  top-10 bg-gradient-to-t  from-[#341461] to-[#0c3588] blur-[70px]  " />
      </Container>
    </Box>
  );
};

export default HeroSection;
