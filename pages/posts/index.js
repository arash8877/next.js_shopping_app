import axios from "axios";
import Link from "next/link";
import React from "react";

function Posts({ posts }) {
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
}

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3001/posts");
  return {
    props: {
      posts: res.data,
    },
  };
};

export default Posts;