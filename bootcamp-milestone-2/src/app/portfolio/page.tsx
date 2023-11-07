import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
    return (
        <main>
        <h1 className="page-title">Portfolio</h1>
        <div className={styles.project}>
          <Link href="/"
            >
          <Image src={'/pic_of_home.jpg'} width={1280} height={720} alt="pic of home"></Image>
          </Link>
          <div className={styles.projectdetails}>
            <p className="project-name">Peter's Personal Website</p>
            <p className="project-description">
              A personal website created using the Hack4Impact starter pack!
            </p>
            <Link href="/">Learn More</Link>
          </div>
        </div>
      </main>
    )
}