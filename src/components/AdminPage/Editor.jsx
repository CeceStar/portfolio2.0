import React from "react";
import EditorMenu from "./EditorMenu";
import InputDiv from "./InputDiv";

const Editor = ({ allPosts }) => {
  let isNewPost = false;
  return (
    <div className="admin-page-box">
      <div className="admin-top">
        <h1>Welcome to Admin Page</h1>
      </div>
      <EditorMenu allPosts={allPosts}/>
      <InputDiv isNewPost={isNewPost} allPosts={allPosts} />
    </div>
  );
};

export default Editor;
