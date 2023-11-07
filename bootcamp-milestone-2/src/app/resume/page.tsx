import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
        <main>
      <h1 className="page-title">Resume</h1>
      <a href="resume.pdf" download className={styles.resumedownload}>
        Download Resume
      </a>
      <div className={styles.resume}>
        <section className="section">
          <h2 className="section-title">Education</h2>
          <p>
            Aug 2022-Present | California Polytechnic State University, San Luis
            Obispo | San Luis Obispo, CA
          </p>
          <ul>
            <li>Bachelor of Science in Computer Science</li>
            <li>4.0 GPA</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul>
            <li>Data Structures</li>
            <li>Intro to Computer Organization</li>
            <li>Fundamentals of Computer Science</li>
            <li>Project-based Object-Oriented Programming and Design</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <p>
            8/2021-03/2022 | San Gabriel High School Key Club - Tech Editor
            (Website Manager)
          </p>
          <ul>
            <li>
              Coordinated with club public relation designers, secretaries, and
              presidents regarding website creation and maintenance.
            </li>
            <li>
              Created web pages that integrated club photographs, copy and
              promotional graphics.
            </li>
            <li>
              Ensured that consistency and cohesion was kept across all design
              assets when versioning layouts across multiple formats.
            </li>
            <li>
              Delivered design solutions for website maintenance projects and
              ensured that design visions were carried through.
            </li>
            <li>
              Received “Best Club Website” Award at the California-Nevada-Hawaii
              District Convention (2022).
            </li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <p>
            09/2023 | Hiragana Quiz Web Application | Python, Django,
            JavaScript, HTML, CSS
          </p>
          <ul>
            <li>
              Built a dynamic web application using Django, allowing users to
              select and study Japanese Hiragana characters.
            </li>
            <li>
              Employed HTML and CSS to ensure a responsive and visually
              appealing design.
            </li>
            <li>
              Developed JavaScript functionality to create a quiz with character
              randomization, user input validation, and real-time feedback for a
              smooth learning experience on the web application.
            </li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <p>Languages: Java, Python, C, JavaScript, HTML, CSS</p>
        </section>
      </div>
      </main>
    </div>
  );
}
