import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

export default function Navbar() {
  const { isLoggedIn, handleLogOut } = useGlobalContext();
  return (
    <nav className="navbar" style={{ display: "flex", gap: "2ex" }}>
      <Link to="/">home</Link>
      {isLoggedIn && <Link to="/newpost">new post</Link>}
      {isLoggedIn ? (
        <button onClick={handleLogOut}>log out</button>
      ) : (
        <Link to="/login">login</Link>
      )}
    </nav>
  );
}
