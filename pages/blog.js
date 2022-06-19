import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item)=>{
            return <div key={item.slug} className="blogitem">
            <Link href={`/blogpost/${item.slug}`}>
            <h3 className={styles.blogItemh3}>{item.title}</h3>
            </Link>
            <p className={styles.blogItemp}>{item.description.substr(0, 140)}</p>
          </div>
        })}
  </main>
        </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: {allBlogs},
}
}

export default Blog;