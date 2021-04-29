import React from "react";
import NewPost from "./NewPost";
import EditPost from "./EditPost";

const InputDiv = (props) => {
  return (
    <div className="input-div">
      {props.newPost ? <NewPost /> : <EditPost allPosts={props.allPosts} />}
    </div>
  );
};

export default InputDiv;
