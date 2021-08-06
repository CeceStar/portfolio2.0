import React from "react";
import BlogPost from "./BlogPost";

const Blog = ({ allPosts }) => {
  return (
    <div className="background-blog">
      <div className="blog-container">
        <h1 className="highlight2 center-text">Blog</h1>
        {allPosts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            heading={post.heading}
            text={post.text}
          />
        ))}
      </div>
      {/* <Link to="/admin">
        <button className="btn admin-btn">Go to admin</button>
      </Link> */}
    </div>
  );
};

export default Blog;
