"use client";

import { useGetMyProfileQuery } from "@/redux/api/authApi";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import { Email, Person } from "@mui/icons-material";

const AccountInformation = () => {
  const { data } = useGetMyProfileQuery({});

  const user = data?.data?.user || {};
  const { name, email } = user || {};

  return (
    <Card
      sx={{
        backgroundColor: "info.main",
        maxWidth: 400,
        margin: "auto",
        mt: 5,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
              <Person fontSize="large" />
            </Avatar>
          </Grid>

          <Divider flexItem sx={{ color: "grey" }} />

          <Grid item>
            <Typography
              sx={{ fontSize: { xs: "1.3rem", md: "1.4rem" } }}
              component="div"
            >
              Account Information
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Person sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              component="span"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
            >
              Name: {name}
            </Typography>
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Email sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
            >
              Email: {email}
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountInformation;
