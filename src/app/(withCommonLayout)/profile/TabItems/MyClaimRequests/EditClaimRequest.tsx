"use client";

import RXDatePicker from "@/components/Forms/RXDatePicker";
import RxForm from "@/components/Forms/RXForm";
import RxInputs from "@/components/Forms/RXInput";
import { useCreateClaimMutation } from "@/redux/api/claimsApi";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

interface EditClaimRequestProps {
  distinguishingFeatures: string;
  contactNo: string;
  description: string;
  lostDate: string;
  id: string;
}

const EditClaimRequest = ({
  distinguishingFeatures,
  contactNo,
  description,
  lostDate,
  id,
}: EditClaimRequestProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateClaim] = useCreateClaimMutation();

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      setIsLoading(true);

      const combinedDateTime = dayjs(data.lostDate)
        .set("hour", dayjs(data.lostDate).hour())
        .set("minute", dayjs(data.lostDate).minute())
        .toISOString();

      const claimData = {
        distinguishingFeatures: data.distinguishingFeatures,
        contactNo: data.contactNo,
        description: data.description,
        lostDate: combinedDateTime,
      };

      const res = await updateClaim(claimData);

      if (res?.data) {
        toast.success("Claim submitted successfully");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error submitting claim");
      setIsLoading(false);
    }
  };

  const defaultValues = {
    distinguishingFeatures: "",
    contactNo: "",
    description: "",
  };

  return (
    <>
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
              {isLoading ? "Updating..." : "Update"}
            </LoadingButton>
          </Grid>
        </Grid>
      </RxForm>
    </>
  );
};

export default EditClaimRequest;
