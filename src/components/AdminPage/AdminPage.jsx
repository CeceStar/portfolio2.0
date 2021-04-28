import React from "react";
// import { useHistory } from "react-router-dom";

const AdminPage = () => {
  //   let history = useHistory();

  function handleClick() {
    console.log("I got clicked");
  }

  console.log("Admin page loaded");
  return (
    <div className="background-admin">
      <h1>Admin Page</h1>
      <button className="btn" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default AdminPage;
