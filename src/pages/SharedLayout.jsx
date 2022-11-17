import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
