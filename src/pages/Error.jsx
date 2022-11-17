import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <h2>are you lost?</h2>
      <Link to="/">return to homepage</Link>
    </div>
  );
}
