import React from "react";
import { useHistory } from "react-router-dom";

function AdminPage() {
  let history = useHistory();
  return (
    <>
      <div className="background-admin">
        <h1>Admin Page</h1>
        <button className="btn" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
    </>
  );
}

export default AdminPage;
