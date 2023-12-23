'use client'
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function Contact() {
  // useState hooks to track user inputs for sending email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // useState hook to track contact form validity
  const [formValid, setFormValid] = useState(true);

  // useState hook to check if an email has been sent successfully
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // Send email with EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email information
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Peter",
      message: message,
    };

    emailjs
      .send(
        "service_sxi2s73",
        "template_4kxm8ls",
        templateParams,
        "D4cX22jVTpxjsq1t5"
      )
      .then(
        (result) => {
          console.log(result.text);

          // Clear everything after an email has been sent 
          setName("");
          setEmail("");
          setMessage("");
          setFormValid(true);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Update states when form is invalid
  const handleInvalid = (e: any) => {
    e.preventDefault();
    setFormValid(false);
    setEmailSent(false);
  };

  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form className={styles.contactform} ref={form} onSubmit={sendEmail} onInvalid={handleInvalid}>
        <p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </p>
        {/* Display error message when form is invalid */}
        {!formValid && (
          <p style={{ color: "red" }}>All fields must be filled out properly.</p>
        )}
        {/* Display success message when email has been sent */}
        {emailSent && (
          <p style={{ color: "black" }}>Email has been sent!</p>
        )}
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
