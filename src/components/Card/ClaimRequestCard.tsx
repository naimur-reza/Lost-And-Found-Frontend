import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import RXModal from "../Shared/RXModal/RXModal";
import EditClaimRequest from "@/app/(withCommonLayout)/profile/TabItems/MyClaimRequests/EditClaimRequest";

interface ClaimRequestCardProps {
  id: string;
  foundItem: {
    image: string;
    itemName: string;
  };
  status: string;
  dateOfClaim: string;
  finderContact: string;
  description: string;
  distinguishingFeatures: string;
  lostDate: string;
}

const ClaimRequestCard = ({
  id,
  foundItem,
  status,
  dateOfClaim,
  finderContact,
  distinguishingFeatures,
  lostDate,
  description,
}: ClaimRequestCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={{ mb: 2, backgroundColor: "info.main", width: "280px" }}>
        <CardContent>
          <Box
            sx={{
              position: "relative",
              height: 220,
            }}
          >
            <Image
              src={foundItem.image}
              alt={foundItem.itemName}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              style={{ borderRadius: "8px" }}
            />
          </Box>

          <Typography variant="h6" sx={{ mt: 2 }}>
            {foundItem.itemName}
          </Typography>
          <Typography color="textSecondary" component="div">
            Status:{" "}
            <Chip
              label={status}
              color={status === "PENDING" ? "warning" : "success"}
              variant="outlined"
            />
          </Typography>
          <Typography color="textSecondary">
            Date of Claim: {new Date(dateOfClaim).toLocaleDateString()}
          </Typography>

          <Typography color="textSecondary">
            Contact: {finderContact}
          </Typography>
        </CardContent>
        <CardActions sx={{ width: "100%" }}>
          <Button
            fullWidth
            onClick={() => setOpen(true)}
            size="small"
            sx={{ whiteSpace: "nowrap" }}
          >
            View Details
          </Button>
          <Button fullWidth size="small" color="error">
            Cancel
          </Button>
        </CardActions>
      </Card>

      <RXModal
        open={open}
        setOpen={setOpen}
        title="Claim Request Details"
        text="You are able to edit the claim request."
      >
        <EditClaimRequest
          distinguishingFeatures={distinguishingFeatures}
          contactNo={finderContact}
          description={description}
          lostDate={lostDate}
          id={id}
        />
      </RXModal>
    </>
  );
};

export default ClaimRequestCard;
