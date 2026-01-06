import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
/* 👉 AG Grid Module Registration */
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";

/* ✅ REQUIRED */
ModuleRegistry.registerModules([AllCommunityModule]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

