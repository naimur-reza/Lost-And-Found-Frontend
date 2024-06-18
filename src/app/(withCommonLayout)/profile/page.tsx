"use client";

import TabPanel from "@/components/Tabs/TabPannel";
import { useGetMyProfileQuery } from "@/redux/api/authApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Divider, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import AccountInformation from "./TabItems/AccountInformation";
import MyClaimRequests from "./TabItems/MyClaimRequests/MyClaimRequests";
import MyLostItems from "./TabItems/MyLostItems";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: { sm: "1rem", md: "1.5rem" }, fontWeight: "medium" }}
          gutterBottom
        >
          My Profile
        </Typography>
        <Divider sx={{ mb: 2 }} color="grey" />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value={0} label="Account Information" />
          <Tab value={1} label="My Lost Items" />
          <Tab value={2} label="My Claim Requests" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <AccountInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyLostItems />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyClaimRequests />
      </TabPanel>
    </Container>
  );
};

export default Profile;
