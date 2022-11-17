import React from "react";
import { useGlobalContext } from "../context/Context";

export default function CreatePost() {
  const { handleSubmit, handleChange } = useGlobalContext();

  return (
    <div>
      <h2>create a new post</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", placeItems: "center" }}
      >
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="body">message body</label>
        <textarea
          name="body"
          id="body"
          onChange={e => handleChange(e)}
        ></textarea>
        <button>create a post</button>
      </form>
    </div>
  );
}
