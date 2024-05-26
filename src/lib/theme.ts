import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0F0F",
    },
    secondary: {
      main: "#232D3F",
    },
    success: {
      main: "#535C91",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },

  typography: {
    fontWeightMedium: 500,
  },
});

export default theme;
