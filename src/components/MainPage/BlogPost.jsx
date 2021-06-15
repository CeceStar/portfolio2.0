import React from "react";

const BlogPost = (props) => {
  return (
    <div id={props.id} className="post-container-short">
        <h2>{props.heading}</h2>
        {/* <p className="date-text">2021-04-28</p> */}
        <p className="date-text">{props.text}</p>
    </div>
  );
};

export default BlogPost;
