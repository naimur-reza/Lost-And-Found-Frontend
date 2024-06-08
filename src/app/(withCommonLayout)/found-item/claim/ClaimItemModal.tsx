"use client";

import RXDatePicker from "@/components/Forms/RXDatePicker";
import RXFileUpload from "@/components/Forms/RXFileUpload";
import RxForm from "@/components/Forms/RXForm";
import RxInputs from "@/components/Forms/RXInput";
import RXModal from "@/components/Shared/RXModal/RXModal";
import { useCreateClaimMutation } from "@/redux/api/claimsApi";
import uploadImage from "@/utils/uploadImage";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

const ClaimItemModal = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [createClaim] = useCreateClaimMutation();

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      setIsLoading(true);
      const image1 = (await uploadImage(data.proofOfOwnership)) || {};

      const image2 = (await uploadImage(data.additionalPhoto)) || {};

      const combinedDateTime = dayjs(data.lostDate)
        .set("hour", dayjs(data.lostDate).hour())
        .set("minute", dayjs(data.lostDate).minute())
        .toISOString();

      const claimData = {
        distinguishingFeatures: data.distinguishingFeatures,
        contactNo: data.contactNo,
        description: data.description,
        proofOfOwnership: image1?.data?.display_url,
        additionalPhoto: image2?.data?.display_url,
        foundItemId: id,
        lostDate: combinedDateTime,
      };

      const res = await createClaim(claimData);

      if (res?.data) {
        toast.success("Claim submitted successfully");
        setOpen(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error submitting claim");
      setOpen(false);
      setIsLoading(false);
    }
  };

  const defaultValues = {
    distinguishingFeatures: "",
    contactNo: "",
    description: "",
    proofOfOwnership: "",
    additionalPhoto: "",
  };

  return (
    <>
      <RXModal
        title="Claim This Item"
        text="Claim this item by filling the form below"
        setOpen={setOpen}
        open={open}
      >
        <RxForm onSubmit={handleSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <RxInputs
                fullWidth
                size="small"
                name="distinguishingFeatures"
                label="Distinguishing Features"
                type="text"
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RxInputs
                fullWidth
                size="small"
                name="contactNo"
                label="Contact No"
                type="text"
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <RxInputs
                fullWidth
                size="small"
                name="description"
                label="Description"
                type="text"
                required
                multiline
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RXFileUpload
                fullWidth
                name="proofOfOwnership"
                label="Proof of ownership"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RXFileUpload
                fullWidth
                name="additionalPhoto"
                label="Additional Photos"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RXDatePicker
                fullWidth
                size="small"
                name="lostDate"
                label="Lost Date"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LoadingButton
                loading={isLoading}
                loadingPosition="start"
                startIcon={<CheckIcon />}
                variant="contained"
                color="success"
                fullWidth
                type="submit"
              >
                {isLoading ? "Requesting..." : "Claim"}
              </LoadingButton>
            </Grid>
          </Grid>
        </RxForm>
      </RXModal>
    </>
  );
};

export default ClaimItemModal;
