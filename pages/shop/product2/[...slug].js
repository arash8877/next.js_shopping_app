import React from 'react';
import { useRouter } from 'next/router';

const P2 = () => {
    const router = useRouter();
    console.log(router.query.slug)


  return (
    <div>
        Product with id {router.query.slug[0]} ---
        and comment with id {router.query.slug[1]} for this product
    </div>
  )
}

export default P2;