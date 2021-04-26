import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import dataBase from "../assets/data/firebase.config";

const Blog = () => {
  let [allPosts, setAllPosts] = useState([]);

  function fetchBlogs() {
    let getallPosts = dataBase.collection("posts");
    getallPosts
      .get()
      .then((doc) => {
        let posts = []
        doc.docs.forEach((doc) => {
          let post = {
            id: doc.data().date,
            heading: doc.data().heading,
            text: doc.data().text,
          };
          posts.unshift(post);
        });
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
        {allPosts.reverse().map((post) => (
          <BlogPost key={post.id} id={post.id} heading={post.heading} text={post.text} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
