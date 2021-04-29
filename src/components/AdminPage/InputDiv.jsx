import React from "react";
import NewPost from "./NewPost";
import EditPost from "./EditPost";

const InputDiv = (props) => {
  return (
    <div className="input-div">
      {props.isNewPost ? (
        <NewPost />
      ) : (
        <EditPost
          clickedPostId={props.clickedPostId}
          editHeading={props.editHeading}
          setEditHeading={props.setEditHeading}
          editText={props.editText}
          setEditText={props.setEditText}
        />
      )}
    </div>
  );
};

export default InputDiv;
