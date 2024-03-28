import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "../public/butterfly_logo.png";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);
