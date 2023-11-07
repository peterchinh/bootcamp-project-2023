import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form className={styles.contactform}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </p>

        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <input type="submit" value="Send"/>
      </form>
    </main>
  );
}
