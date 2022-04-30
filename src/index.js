import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CampgroundProvider } from "./context/campgroundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CampgroundProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CampgroundProvider>
);
