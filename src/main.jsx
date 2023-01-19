import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { SearchProvider, SidebarProvider } from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <App>
      <SidebarProvider></SidebarProvider>
    </App>
  </SearchProvider>
);
