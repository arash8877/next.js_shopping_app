import React from 'react';
import Link from 'next/link';
import Head from 'next/head';



const Index = () => {

  return (
    <div>
        <Head>
            <title>Product List</title>
            <link rel="shortcut icon" type="image/x-icon" href="/images/logo.png"/>
        </Head>
        <ul>
            <li><Link href={"/shop/product/1"}>product 1</Link></li>
            <li><Link href={"/shop/product/2"}>product 2</Link></li>
            <li><Link href={"/shop/product/3"}>product 3</Link></li>
            <li><Link href={"/shop/product/4"}>product 4</Link></li>
            <li><Link href={"/shop/product/5"}>product 5</Link></li>
            <li><Link href={"/shop/product/6"}>product 6</Link></li>
            <li><Link href={"/shop/product/7"}>product 7</Link></li>
            <li><Link href={"/shop/product/8"}>product 8</Link></li>
            <li><Link href={"/shop/product/9"}>product 9</Link></li>
            <li><Link href={"/shop/product/10"}>product 10</Link></li>
        </ul>
    </div>
  )
}

export default Index;