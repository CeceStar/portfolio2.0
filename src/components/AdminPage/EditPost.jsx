import React from "react";
// import dataBase from "../../assets/data/firebase.config";

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
    let something = {
      date: clickedPostId,
      heading: editHeading,
      text: editText,
      edited: date,
    };
    console.log(something);
    // let date = new Date();
    // dataBase.collection("posts").add({
    //     date: date,
    //     heading: heading,
    //     text: text,
    //     edited: date
    //   })
    //   .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
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
        <input
          type="submit"
          value="Submit"
          id="submit"
          className="btn"
          onClick={editBlog}
        />
      </form>
    </div>
  );
};

export default EditPost;
