import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#fff",
    },
  },
});
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
