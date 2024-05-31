"use client";

import { RecentItemCard } from "@/components/Card/RecentItemCard";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemsApi";
import { Container, Grid } from "@mui/material";

const RecentLostItems = () => {
  const { data } = useGetAllLostItemsQuery({
    limit: 6,
  });

  console.log(data);

  return (
    <Container maxWidth="md">
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data?.data?.map((item: any) => (
          <Grid item key={item.id} xs={12} md={4}>
            <RecentItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecentLostItems;
