import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {

  return (
    <div className="background-admin">
      <div>
      <h1>Admin Page</h1>
      </div>

      <Link to="/">
        <button className="btn admin-btn">Go back</button>
      </Link>
    </div>
  );
};

export default AdminPage;
