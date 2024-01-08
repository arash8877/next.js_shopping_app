import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>
      Product with id {router.query.pname}
    </div>
  )
}

export default Product;
