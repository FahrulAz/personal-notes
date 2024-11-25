import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));