import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; //tailwind
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UnderDevelopment from "./UnderDevelopment";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <UnderDevelopment/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
