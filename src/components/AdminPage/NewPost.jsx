import React, { useState } from "react";
import dataBase from "../../assets/data/firebase.config";

const NewPost = () => {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");

  function postBlog(event) {
    event.preventDefault();

    let date = new Date();

    dataBase
      .collection("posts")
      .add({
        date: date,
        heading: heading,
        text: text,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Your post has been added!")
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <div className="center">
      <h2>Add a new blogpost</h2>
      <form>
        <label htmlFor="Heading">Heading:</label>
        <br />
        <input
          type="text"
          id="Heading"
          name="Heading"
          minLength="5"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          id="submit"
          className="btn"
          onClick={postBlog}
        />
      </form>
    </div>
  );
};

export default NewPost;
