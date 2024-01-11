import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <nav>
        <ul>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}