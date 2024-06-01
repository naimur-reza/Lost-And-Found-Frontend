import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { formatTimeAgo } from "@/utils/formatTimesAgo";

export const RecentItemCard = ({
  item,
}: {
  item: {
    image: string;
    description: string;
    itemName: string;
    createdAt: string;
  };
}) => {
  const { image, description, itemName, createdAt } = item;

  const timeAgo = formatTimeAgo(createdAt);

  return (
    <Card>
      <Box
        sx={{
          position: "relative",
          height: 220,
        }}
      >
        <Image
          src={image}
          alt={itemName}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
            }}
          >
            {itemName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {timeAgo}
          </Typography>
        </Box>
        <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
          {description.slice(0, 30)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="info" variant="text">
          View details
        </Button>
      </CardActions>
    </Card>
  );
};
