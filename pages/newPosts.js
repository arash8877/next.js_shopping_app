import React from 'react';

const newPosts = () => {
  return (
    <div>newPost</div>
  )
}

export const getServerSideProps = async () => {
    return {
        props: {
            posts:[]
        }
    }
}

export default newPosts;