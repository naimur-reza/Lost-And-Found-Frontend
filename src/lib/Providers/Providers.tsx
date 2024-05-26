"use client";

import { TChildren } from "@/types/common";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const Providers = ({ children }: TChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
