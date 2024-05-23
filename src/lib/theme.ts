import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#164863",
    },
    secondary: {
      main: "#427D9D",
    },
    success: {
      main: "#9BBEC8",
    },
  },

  components: {
    MuiButton: {
      // defaultProps: {
      //   variant: "contained",
      // },
    },
  },
});

export default theme;
