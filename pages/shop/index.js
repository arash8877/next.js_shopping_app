import React from 'react';
import Link from 'next/link';

//in next.js to navigate between internal pages you use Link-href 
// but to navigate to an external page you use a-href

const Index = (props) => {

  return (
    <div>
        <ul>
            <li><Link href={"/shop/product/111"}>product 1</Link></li>
            <li><Link href={"/shop/product/222"}>product 2</Link></li>
            <li><Link href={"/shop/product/333"}>product 3</Link></li>
            <li><Link href={"/shop/product/444"}>product 4</Link></li>
            <li><Link href={"/shop/product/555"}>product 5</Link></li>
            <li><Link href={"/shop/product/666"}>product 6</Link></li>
            <li><Link href={"/shop/product/777"}>product 7</Link></li>
        </ul>
    </div>
  )
}

export default Index;