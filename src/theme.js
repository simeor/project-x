import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F4DDB4",
    secondary: "#72BCA5",
    white: "#fffff",
    pink: "#FEB7AB",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
