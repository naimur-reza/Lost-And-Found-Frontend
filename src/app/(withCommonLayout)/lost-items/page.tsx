"use client";

import { RecentItemCard } from "@/components/Card/RecentItemCard";
import LoadingCardSkeleton from "@/components/Loader/LoadingCardSkeleton";
import {
  useGetAllLostItemsQuery,
  useGetLostItemsCategoryQuery,
} from "@/redux/api/lostItemsApi";
import { MenuItem, Select, TextField } from "@mui/material";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";

const LostItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { data, isLoading } = useGetAllLostItemsQuery({
    searchTerm,
    sortBy,
  });

  const { data: categories, isLoading: categoryLoading } =
    useGetLostItemsCategoryQuery({});

  const items = categories?.data?.map((category: any) => category.name) || [];

  return (
    <Container sx={{ my: 2 }}>
      <Typography
        sx={{ fontSize: { xs: "1.2rem", md: "1.6rem", fontWeight: "bold" } }}
        gutterBottom
      >
        All Lost Items
      </Typography>

      <Divider sx={{ mb: 2 }} color="grey" />

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6} md={4}>
          <TextField
            label="Search Item"
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid item xs={3} md={4}>
          <Select
            size="small"
            value={category}
            displayEmpty
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            <MenuItem value="" disabled>
              All Categories
            </MenuItem>
            {items.map((item: string) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={3} md={4}>
          <Select
            size="small"
            value={sortBy}
            displayEmpty
            onChange={(e) => setSortBy(e.target.value)}
            fullWidth
          >
            <MenuItem value="" disabled>
              Sort By
            </MenuItem>
            <MenuItem value="itemName">Item Name</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="category">Category</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {isLoading ? (
        <LoadingCardSkeleton />
      ) : (
        <>
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={2}
            alignItems={"center"}
          >
            {data?.data?.map((item: any) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <RecentItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default LostItems;
