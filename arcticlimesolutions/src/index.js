import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./css/main.min.css";
import AnimatedRoutes from "./AnimatedRoutes";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename="/arcticlimesolutions">
      <AnimatedRoutes />
    </HashRouter>
  </React.StrictMode>
);
