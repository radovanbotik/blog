import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ display: "flex", gap: "2ex" }}>
      <Link to="/">home</Link>
      <Link to="/newpost">new post</Link>
      <Link to="/login">login</Link>
    </nav>
  );
}
