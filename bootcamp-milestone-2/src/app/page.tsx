
import styles from './page.module.css'
import Image from 'next/image'
// import blogs from './blogData'
import BlogPreview from '@/components/blogPreview'
import connectDB from '@/helpers/db';
import Blog from '@/database/blogSchema';

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
  <div>
    <main>
    <h1 className="page-title">Welcome</h1>
      <div className={styles.about}>
        <div className={styles.aboutimage}>
          <Image src={'/pic_of_me.jpg'} width={400} height={560} alt="picture of Peter Chinh"></Image>
        </div>
        <div className={styles.abouttext}>
          <div className={styles.strawhat}>
            <Image src={'/strawhat.png'} width={100} height={80} alt="strawhat"></Image>
            </div>
          
          <p>
            Hello! My name is <strong>Peter Chinh</strong> and I am a 2nd year
            Computer Science major at
            <em>California Polytechnic State University, San Luis Obispo</em>.
          </p>
          <p>
            I am a passionate person with a wide range of interests that keeps
            me engaged inside and outside of school. <br />Here are a few things
            I <strong>LOVE</strong> to do in my free time:
          </p>
          <ul>
            <li>Watch Anime (Especially <em>One Piece</em> \(≧▽≦)/ )</li>
            <li>
              Play Videogames (I am addicted to <em>Honkai: Star Rail</em>...)
            </li>
            <li>Build Keyboards and Computers!</li>
            <li>EAT KATSU!! (refer to photo.)</li>
          </ul>
          <div className={styles.imbibitor}>
          <Image src={'/imbibitor.png'} width={100} height={108} alt="imbibitor"></Image>
          </div>
        </div>
      </div>
    {blogs && blogs.map(blog => 
      <BlogPreview // This is how we call the component
      
        title={blog.title}
        description={blog.description}
        date={blog.date}
        slug={blog.slug} 
        content={''} 
        comments={[]} 
        image={''}      />
      )}
      </main>
  </div>
  )
  
}
