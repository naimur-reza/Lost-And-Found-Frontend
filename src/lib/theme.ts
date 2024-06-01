import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d0d0d9f",
    },
    secondary: {
      main: "#232D3F",
    },
    success: {
      main: "#535C91",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#FFFFFF", // Text color
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF", // Label color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#535C91", // Border color
            },
            "&:hover fieldset": {
              borderColor: "grey", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "grey", // Border color when focused
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },

  typography: {
    fontWeightMedium: 500,
  },
});

export default theme;
