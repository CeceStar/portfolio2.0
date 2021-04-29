import React, { useState } from "react";
import EditorMenu from "./EditorMenu";
import InputDiv from "./InputDiv";

const Editor = ({ allPosts }) => {
  let isNewPost = false;

  const [clickedPostId, setClickedPostId] = useState("");
  const [editHeading, setEditHeading] = useState("");
  const [editText, setEditText] = useState("");

  return (
    <div className="admin-page-box">
      <div className="admin-top">
        <h1>Welcome to Admin Page</h1>
      </div>
      <EditorMenu
        allPosts={allPosts}
        setClickedPostId={setClickedPostId}
        setEditHeading={setEditHeading}
        setEditText={setEditText}
      />
      <InputDiv
        isNewPost={isNewPost}
        clickedPostId={clickedPostId}
        setClickedPostId={setClickedPostId}
        editHeading={editHeading}
        setEditHeading={setEditHeading}
        editText={editText}
        setEditText={setEditText}
      />
    </div>
  );
};

export default Editor;
