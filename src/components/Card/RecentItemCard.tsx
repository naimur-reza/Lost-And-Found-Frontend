import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const RecentItemCard = ({
  item,
}: {
  item: {
    image: string;
    description: string;
    itemName: string;
  };
}) => {
  const { image, description, itemName } = item;

  return (
    <Card sx={{ maxWidth: "200" }}>
      <CardMedia sx={{ height: 150 }}>
        <Image
          layout="responsive"
          width={250}
          height={150}
          alt="item_image"
          src={image}
        />
      </CardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Claim</Button>
      </CardActions>
    </Card>
  );
};
