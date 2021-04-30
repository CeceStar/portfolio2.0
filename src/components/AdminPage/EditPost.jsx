import React from "react";
import dataBase from "../../assets/data/firebase.config";
import DeleteButton from "./DeleteButton";

const EditPost = ({
  clickedPostId,
  editHeading,
  setEditHeading,
  editText,
  setEditText,
}) => {
  function editBlog(event) {
    event.preventDefault();

    let date = new Date();

    dataBase
      .collection("posts")
      .doc(clickedPostId)
      .update({
        heading: editHeading,
        text: editText,
        edited: date,
      })
      .then(() => {
        console.log("Document uppdated with ID: ", clickedPostId);
        alert("Your post have been updated!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error uppdating document: ", error);
      });
  }

  return (
    <div className="center">
      <h2>Edit a Blogpost</h2>
      <form>
        <label htmlFor="Heading">Heading:</label>
        <br />
        <input
          type="text"
          id="Heading"
          name="Heading"
          minLength="5"
          value={editHeading}
          onChange={(e) => setEditHeading(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="Text">Text:</label>
        <br />
        <textarea
          id="Text"
          name="Text"
          form="formPost"
          required
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <br />
        <br />
      </form>
      <div>
        <input
          type="submit"
          value="Submit"
          id="submit-edit"
          className="btn"
          onClick={editBlog}
        />{" "}
      <DeleteButton clickedPostId={clickedPostId} />
      </div>
    </div>
  );
};

export default EditPost;
