import React from "react";

export const PostsList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);
