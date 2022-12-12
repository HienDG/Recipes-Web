import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { SearchProvider, SidebarProvider } from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <Router>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Router>
  </SearchProvider>
);
