import * as React from "react";
import { Grid, Box, Skeleton, Typography } from "@mui/material";

const LoadingCardSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ width: 210 }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={280}
            height={220}
          />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton animation="wave" width="60%" />
            <Skeleton animation="wave" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingCardSkeleton;
