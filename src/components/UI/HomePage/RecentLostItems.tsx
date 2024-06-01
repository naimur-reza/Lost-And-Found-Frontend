"use client";

import { RecentItemCard } from "@/components/Card/RecentItemCard";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemsApi";
import { Container, Grid, Typography } from "@mui/material";

const RecentLostItems = () => {
  const { data } = useGetAllLostItemsQuery({
    limit: 6,
  });

  console.log(data);

  return (
    <Container>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
        gutterBottom
      >
        Recent Lost Items Reports
      </Typography>

      <Typography
        sx={{
          color: "grey",
          textAlign: "center",
          mb: 4,
        }}
        gutterBottom
      >
        Here are some of the most recent lost items reports. Please help us find
        them.
      </Typography>

      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data?.data?.map((item: any) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <RecentItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecentLostItems;
