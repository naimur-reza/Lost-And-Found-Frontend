import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IFormInputs {
  name: string;
  label: string;
  type?: "text" | "password" | "email";
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  required?: boolean;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  autoFocus?: boolean;
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
}

const RxInputs = ({
  name,
  label,
  variant,
  type,
  size,
  multiline = false,
  rows = 3,
  fullWidth,
  required,
  margin = "normal",
  autoFocus = false,
  autoComplete = "off",
}: IFormInputs) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            rows={rows}
            multiline={multiline}
            label={label}
            variant={variant}
            type={type}
            size={size}
            required={required}
            margin={margin}
            autoFocus={autoFocus}
            fullWidth={fullWidth}
            autoComplete={autoComplete}
            {...field}
          />
        )}
      />
    </>
  );
};

export default RxInputs;
