import axios from "axios";
import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3001/posts/${params.id}`)
  console.log('**********',params)
  console.log(res)
  return {
    props: {
      post: res.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3001/posts");
  const paths = res.data.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
