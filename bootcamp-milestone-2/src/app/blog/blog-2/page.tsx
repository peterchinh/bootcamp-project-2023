import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog2() {
    return (
    <main>
      <h1 className="page-title">Blog 2</h1>
      <div>
        <h2>Date: 10/19/2023</h2>
        <Image src ="/strawhat.png" width={500} height={500} alt="strawhat"></Image>
        <p>
        Hey, look at this picture of a strawhat. Reminds me of Luffy from One
          Piece!
        </p>
        <Link href="/blog">Back</Link>
      </div>
    </main>
    )
}