import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Explore from "./pages/Explore";
import './index.css'
import ConvertMenu from "./pages/Convert";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/convert" element={<ConvertMenu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
