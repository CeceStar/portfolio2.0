import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import dataBase from "../../assets/data/firebase.config";

const Blog = () => {
  let [allPosts, setAllPosts] = useState([]);

  function fetchBlogs() {
    let getallPosts = dataBase.collection("posts");
    getallPosts
      .get()
      .then((doc) => {
        let posts = doc.docs.map((doc) => {
          return {
            id: doc.data().date,
            heading: doc.data().heading,
            text: doc.data().text,
          };
        }).sort((a, b) => {
          return b.id - a.id
        })
        setAllPosts(posts);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

    useEffect(() => {
      fetchBlogs();
    }, []);


  return (
    <div className="background-blog">
      <div className="blog-container">
        <h1 className="highlight2 center">Blog</h1>
        {allPosts.map((post) => (
          <BlogPost key={post.id} id={post.id} heading={post.heading} text={post.text} />
        ))}
      </div>
      <button className="btn admin-btn">Go to admin</button>
    </div>
  );
};

export default Blog;
