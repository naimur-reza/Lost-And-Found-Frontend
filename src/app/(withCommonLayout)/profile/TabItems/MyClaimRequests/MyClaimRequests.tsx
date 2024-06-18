"use client";

import ClaimRequestCard from "@/components/Card/ClaimRequestCard";
import { useGetMyClaimsQuery } from "@/redux/api/claimsApi";
import { Box, Grid } from "@mui/material";

const MyClaimRequests = () => {
  const { data } = useGetMyClaimsQuery({});

  const claimRequestedData = data?.data || [];

  console.log(claimRequestedData);
  return (
    <Box>
      <Grid container spacing={2}>
        {claimRequestedData.map((claim: any) => (
          <Grid item key={claim.id} xs={12} md={4}>
            <ClaimRequestCard
              description={claim.description}
              id={claim.id}
              lostDate={claim.lostDate}
              distinguishingFeatures={claim.distinguishingFeatures}
              foundItem={claim.foundItem}
              status={claim.status}
              dateOfClaim={claim.createdAt}
              finderContact={claim.contactNo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyClaimRequests;
