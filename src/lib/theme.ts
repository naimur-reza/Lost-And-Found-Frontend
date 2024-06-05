import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e1217",
    },
    secondary: {
      main: "#232D3F",
    },
    success: {
      main: "#f0f0f0",
    },
    info: {
      main: "#131921",
    },
    background: {
      default: "#0e1217",
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
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#535C91", // Border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey", // Border color when focused
          },
        },
        icon: {
          color: "#FFFFFF", // Icon color
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Label color
          "&.Mui-focused": {
            color: "#FFFFFF", // Label color when focused
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1E1E1E", // Menu background color
          color: "#FFFFFF", // Menu text color
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
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
