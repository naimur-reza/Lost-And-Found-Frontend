"use client";

import { TChildren } from "@/types/common";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const Providers = ({ children }: TChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
