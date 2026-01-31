import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./Components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
