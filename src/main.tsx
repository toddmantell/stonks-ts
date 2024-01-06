import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Disabling Strict Mode because it's causing duplicate fetch calls
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
