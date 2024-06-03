"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import { useGetSingleLostItemQuery } from "@/redux/api/lostItemsApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import convertTo12HourFormat from "@/utils/convertTime";
import SkeletonLoading from "./component/SkeletonLoading";
import { formatTimeAgo } from "@/utils/formatTimesAgo";

const ItemDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data, isLoading } = useGetSingleLostItemQuery(params.id) || {};

  const {
    itemName,
    description,
    image,
    brand,
    category,
    date,
    timeLost,
    primaryColor,
    secondaryColor,
    location,
    createdAt,
  } = data?.data || {};

  const { user } = data?.data || {};

  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = convertTo12HourFormat(timeLost || "23:12");
  const publishedTime = formatTimeAgo(createdAt || "2024-05-30T18:00:00.000Z");
  return (
    <Container sx={{ my: 2 }}>
      <Typography
        sx={{ fontSize: { xs: "1.2rem", md: "1.6rem", fontWeight: "bold" } }}
        gutterBottom
      >
        Item Details
      </Typography>

      <Divider sx={{ mb: 2 }} color="grey" />

      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
          <Card
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  gutterBottom
                >
                  {itemName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Description:</strong> {description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Brand:</strong> {brand}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Category:</strong> {category?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Date Lost:</strong> {formattedDate}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Time Lost:</strong> {formattedTime}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Primary Color:</strong> {primaryColor}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Secondary Color:</strong> {secondaryColor}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  gutterBottom
                >
                  <strong>Location:</strong> {location}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Published:</strong> {publishedTime}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "400px" },
                height: { xs: "250px", md: "360px" },
                position: "relative",
              }}
            >
              <Image fill src={image} alt={itemName} objectFit="cover" />
            </Box>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h5">Published by</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {user?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.email}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
};

export default ItemDetails;
