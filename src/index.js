import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/utilities.css";

createRoot(document.getElementById("root")).render(<App />);
