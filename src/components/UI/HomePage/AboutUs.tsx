import assets from "@/assets";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "40px" },
        margin: "20px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom color="grey">
              Welcome to our community-driven{" "}
              <Typography sx={{ font: "medium" }}>RetrieveX</Typography>{" "}
              platform. We help you report and reclaim lost items efficiently.
              Whether you&#39;ve lost or found something valuable, we&#39;re
              here to assist every step of the way.
            </Typography>
            <Typography variant="body1" gutterBottom color="grey">
              Our user-friendly platform offers features for reporting items,
              verifying ownership, and managing profiles. We ensure a safe and
              trustworthy environment with additional tools for overseeing site
              activity and user management.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                height={300}
                width={300}
                src={assets.images.aboutUs}
                alt="About Us"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
