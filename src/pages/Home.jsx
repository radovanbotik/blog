import React from "react";
import { useGlobalContext } from "../context/Context";

export default function Home() {
  console.log(useGlobalContext());
  return <div>Home</div>;
}
