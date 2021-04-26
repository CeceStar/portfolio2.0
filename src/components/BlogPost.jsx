import React from "react";

const BlogPost = (props) => {
  return (
    <div id={props.id} className="post-container-short">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
  );
};

export default BlogPost;
