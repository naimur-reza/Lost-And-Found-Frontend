import * as React from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TProps = {
  disabled?: boolean;
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function RXFileUpload({ name, label, sx, disabled }: TProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            disabled={disabled}
            color="success"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {value?.name || label || "Upload file"}
            <Input
              {...field}
              type="file"
              onChange={(e) => {
                const file = (e?.target as HTMLInputElement).files?.[0];
                onChange(file);
              }}
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
}
