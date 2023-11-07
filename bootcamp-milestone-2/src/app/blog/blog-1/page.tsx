import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog1() {
    return (
    <main>
      <h1 className="page-title">Blog 1</h1>
      <div>
        <h2>Date: 10/19/2023</h2>
        <Image src ="/imbibitor.png" width={500} height={500} alt="imbibitor"></Image>
        <p>
          Hey, look at this picture of Imbibitor Lunae from Honkai: Star Rail.
          Doesn't he look so cute?
        </p>
        <Link href="/blog">Back</Link>
      </div>
    </main>
    )
}