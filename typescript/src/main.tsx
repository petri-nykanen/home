import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <App />
      </MotionConfig>
    </StrictMode>
  </BrowserRouter>
);
