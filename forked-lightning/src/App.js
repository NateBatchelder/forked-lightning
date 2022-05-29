// imports
import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

import Navbar from "./routes/Nav";
import Footer from "./routes/Footer";

export default function App() {
  return (
    <div>
      <div>
        <Link to="portfolio">Portfolio</Link> | <Link to="about">About</Link>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}
