import React from "react";

export default function CreatePost() {
  return (
    <div>
      <h2>create a new post</h2>
      <form action="" style={{ display: "grid", placeItems: "center" }}>
        <label htmlFor="title">title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="body">message body</label>
        <textarea name="body" id="body"></textarea>
        <button>create a post</button>
      </form>
    </div>
  );
}
