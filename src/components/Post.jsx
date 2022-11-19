import React from "react";

export default function Post(props) {
  const { message, user } = props;
  return (
    <div>
      <h4>{message.title ? message.title : "post title"}</h4>
      <p>{message.body ? message.body : "post body"}</p>
      <h6>{user.name ? user.name : "anonymous"}</h6>
    </div>
  );
}
