import { Box, Button, Container, Typography } from "@mui/material";

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
              fontFamily: "Montserrat, sans-serif",
              color: "#fff",
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
            <Button color="success">Report a Lost Item</Button>
            <Button color="success">Report a Found Item</Button>
          </Box>
        </Box>

        <div className=" absolute w-[450px] opacity-50 h-[200px] -left-12 top-52 bg-gradient-to-t  from-[#6f2494c5] to-[#231455e0] blur-[75px] -z-10" />
        <div className=" absolute w-[330px] right-0 opacity-50 h-[200px]  top-10 bg-gradient-to-t  from-[#27015c] to-[#0c3588] blur-[70px] " />
      </Container>
    </Box>
  );
};

export default HeroSection;