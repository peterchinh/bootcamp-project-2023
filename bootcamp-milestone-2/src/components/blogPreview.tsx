import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from '@/app/blogData'
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
  return (
    // Generate HTML block from Blog prop
    <div className={style.div}>
      <h3>{props.title}</h3>
      <p>Date: {props.date}</p>
      <p>{props.description}</p>
      <Link href={`/blog/${props.slug}`}>See more</Link> 
	  </div>
  );
}