"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import convertTo12HourFormat from "@/utils/convertTime";
import { formatTimeAgo } from "@/utils/formatTimesAgo";
import SkeletonDetailsLoading from "@/components/Loader/SkeletonDetailsLoading";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItemApi";

const ItemDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data, isLoading } = useGetSingleFoundItemQuery(params.id) || {};

  const {
    itemName,
    description,
    image,
    brand,
    category,
    date,
    timeFound,
    primaryColor,
    secondaryColor,
    location,
    createdAt,
  } = data?.data || {};

  const { user } = data?.data || {};

  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = convertTo12HourFormat(timeFound || "10:00");
  const publishedTime = formatTimeAgo(createdAt || "2024-05-30T16:34:08.142Z");
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
        <SkeletonDetailsLoading />
      ) : (
        <>
          <Card
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              backgroundColor: "info.main",
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
                  <strong>Date Found:</strong> {formattedDate}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>Time Found:</strong> {formattedTime}
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
          <Card sx={{ mt: 2, backgroundColor: "info.main" }}>
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
