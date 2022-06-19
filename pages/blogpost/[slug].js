
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <h1>{blog && blog.title}</h1> 
    <hr />
    <div>
    {blog && blog.description}
    </div>
    </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  console.log(context.query);
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
    

  return {
    props: {myBlog},
}
}

export default Slug;