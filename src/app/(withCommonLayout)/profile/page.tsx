"use client";

import { useGetMyProfileQuery } from "@/redux/api/authApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Typography } from "@mui/material";

const Profile = () => {
  const { data } = useGetMyProfileQuery(undefined);
  const user = getUserInfo();

  console.log(user);
  console.log(data);

  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: { sm: "1rem", md: "1.5rem" }, fontWeight: "medium" }}
        >
          My Profile
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;
