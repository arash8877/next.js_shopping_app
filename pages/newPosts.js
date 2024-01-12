import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const newPosts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/posts");
  return {
    props: {
      posts: res.data,
    },
  };
};

export default newPosts;
