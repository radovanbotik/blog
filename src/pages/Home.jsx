import React from "react";
import { useGlobalContext } from "../context/Context";
import Post from "../components/Post";
export default function Home() {
  // //Fetch data from Firebase
  const { database } = useGlobalContext();
  const postsData = database.map(entry => ({ id: entry.id, ...entry.data() }));
  return (
    <div>
      {postsData.map(pe => {
        return <Post key={pe.id} {...pe} />;
      })}
    </div>
  );
}
