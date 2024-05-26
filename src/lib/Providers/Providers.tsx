"use client";

import { TChildren } from "@/types/common";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const Providers = ({ children }: TChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NextThemesProvider>
  );
};

export default Providers;
