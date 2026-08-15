import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Providers } from "./shared/providers/providers";
import { ErrorBoundary } from "./shared/components/errorBoundary/errorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Providers>
  </StrictMode>
);
