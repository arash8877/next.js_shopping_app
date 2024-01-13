import axios from "axios";
import React from "react";
import Link from "next/link";

const newPosts = ({ posts }) => {
  return (
    <div>
      <h1>New Posts</h1>
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
