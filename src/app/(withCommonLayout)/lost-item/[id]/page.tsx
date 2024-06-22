"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container, Divider, Stack } from "@mui/material";
import {
  useChangeLostItemStatusMutation,
  useGetSingleLostItemQuery,
} from "@/redux/api/lostItemsApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import convertTo12HourFormat from "@/utils/convertTime";
import { formatTimeAgo } from "@/utils/formatTimesAgo";
import SkeletonDetailsLoading from "@/components/Loader/SkeletonDetailsLoading";
import { toast } from "sonner";
import { getUserInfo } from "@/services/auth.services";

const ItemDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [changeStatus] = useChangeLostItemStatusMutation();

  const { data, isLoading } = useGetSingleLostItemQuery(params.id) || {};

  const {
    id,
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

    userId,
    createdAt,
    isFound,
  } = data?.data || {};

  const { user } = data?.data || {};

  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = convertTo12HourFormat(timeLost || "23:12");
  const publishedTime = formatTimeAgo(createdAt || "2024-05-30T18:00:00.000Z");

  const handleSubmit = async (id: string) => {
    console.log(id);
    const data = await changeStatus(id);

    if (data?.data?.message) {
      toast.success(data?.data?.message);
    }
  };

  const currentUser = getUserInfo();

  console.log(currentUser);

  const isEligibleForFound = currentUser?.id === userId;

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
          <Card sx={{ mt: 2, backgroundColor: "info.main" }}>
            <CardContent>
              <Typography variant="h5">Published by</Typography>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {user?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    disabled={isFound || !isEligibleForFound}
                    color="success"
                    onClick={() => handleSubmit(id)}
                  >
                    {!isFound ? "Mark as Found" : "Item Found"}
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
};

export default ItemDetails;
