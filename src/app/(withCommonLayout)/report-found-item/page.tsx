"use client";

import RXDatePicker from "@/components/Forms/RXDatePicker";
import RXFileUpload from "@/components/Forms/RXFileUpload";
import RxForm from "@/components/Forms/RXForm";
import RxInputs from "@/components/Forms/RXInput";
import RXSelectField from "@/components/Forms/RXSelect";
import RXTimePicker from "@/components/Forms/RXTimePicker";
import uploadImage from "@/utils/uploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "sonner";
import {
  useGetFoundItemsCategoryQuery,
  useReportFoundItemMutation,
} from "@/redux/api/foundItemApi";

const ReportLostItem = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data, isLoading: cateLoading } =
    useGetFoundItemsCategoryQuery(undefined);
  console.log(data);

  const [reportFoundItem] = useReportFoundItemMutation();

  const categories = data?.data?.map((category: any) => category.name) || [];
  const categoryData = data?.data || [];

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);

    const imageData = formData.file
      ? await uploadImage(formData.file)
      : undefined;

    const combinedDateTime = dayjs(formData.date)
      .set("hour", dayjs(formData.timeFound).hour())
      .set("minute", dayjs(formData.timeFound).minute())
      .toISOString();

    console.log(imageData);
    const category = categoryData?.find(
      (category: any) => category.name === formData.categoryId
    );

    const data = {
      itemName: formData.itemName,
      categoryId: category.id,
      description: formData.description || "",
      location: formData.location || "",
      date: combinedDateTime,
      brand: formData.brand,
      image: imageData
        ? imageData?.data?.display_url
        : "https://i.ibb.co/MfPHHpX/IMG-20210401-WA0017.jpg",
      timeFound: dayjs(formData.timeFound).format("HH:mm"),
      primaryColor: formData.primaryColor,
      secondaryColor: formData.secondaryColor,
    };

    console.log(data);

    // Perform the POST request here

    try {
      const res = await reportFoundItem(data).unwrap();

      toast.success("Found item reported");

      setIsLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const defaultValues = {
    itemName: "Airpod",
    categoryId: "Electronics",
    brand: "Gucci",
    file: null,
    primaryColor: "Red",
    secondaryColor: "Blue",
    location: "Feni",
    description: "Haraye gelo",
  };

  return (
    <Box maxWidth={"md"} sx={{ my: 3, mx: { xs: 2, md: "auto" } }}>
      <Typography sx={{ fontSize: 24, fontWeight: "medium" }}>
        Submit Found Property
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: 14, fontWeight: "medium", color: "grey" }}
          >
            Please fill out the form below to report a found item
          </Typography>
        </Grid>

        <RxForm
          onSubmit={handleSubmit}
          //   resolver={zodResolver(reportLostItemSchema)}
          defaultValues={defaultValues}
        >
          <Grid
            container
            spacing={2}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6}>
              <RxInputs
                label="Item name"
                name="itemName"
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RXDatePicker
                label="Date found"
                name="date"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RXSelectField
                disabled={cateLoading}
                items={categories}
                label="Category"
                name="categoryId"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RXTimePicker
                label="Time Found"
                name="timeFound"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RxInputs label="Brand" name="brand" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RXFileUpload
                disabled={isLoading}
                name="file"
                label="Upload Image"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RxInputs
                label="Primary Color"
                name="primaryColor"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RxInputs
                label="Secondary Color"
                name="secondaryColor"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RxInputs
                label="Location"
                name="location"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RxInputs
                label="Description (optional)"
                name="description"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                loading={isLoading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                color="success"
                fullWidth
                type="submit"
                sx={{ mt: 2 }}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </LoadingButton>
            </Grid>
          </Grid>
        </RxForm>
      </Grid>
    </Box>
  );
};

export default ReportLostItem;
