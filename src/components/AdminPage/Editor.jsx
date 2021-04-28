import React from "react";
import EditorMenu from "./EditorMenu";
import InputDiv from "./InputDiv";

const AdminPage = () => {
  return (
    <div className="admin-page-box">
      <div className="admin-top">
        <h1>Welcome to Admin Page</h1>
      </div>
      <EditorMenu />
      <InputDiv />
    </div>
  );
};

export default AdminPage;
