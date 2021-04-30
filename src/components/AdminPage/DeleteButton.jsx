import React from "react";
import dataBase from "../../assets/data/firebase.config";

const DeleteButton = ({ clickedPostId }) => {

  function deletePost() {
    dataBase
      .collection("posts")
      .doc(clickedPostId)
      .delete()
      .then(() => {
        alert("Document successfully deleted!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
  
  return (
    <button className="btn delete-btn" onClick={deletePost}>
      Delete
    </button>
  );
};

export default DeleteButton;
