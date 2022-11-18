import React from "react";
import { useGlobalContext } from "../context/Context";

export default function Login() {
  const { handleLogin } = useGlobalContext();
  return (
    <div>
      <h2>welcome, sign in</h2>
      <button onClick={handleLogin}>sign in</button>
    </div>
  );
}
