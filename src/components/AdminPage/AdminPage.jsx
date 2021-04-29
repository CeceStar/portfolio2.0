import React from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

const AdminPage = ({ allPosts }) => {
  return (
    <div className="background-admin">
      <Editor allPosts={allPosts} />

      <Link to="/">
        <button className="btn admin-btn">Go back</button>
      </Link>
    </div>
  );
};

export default AdminPage;
