import React from "react";
// import dataBase from "../../assets/data/firebase.config";

const InputDiv = () => {
  function postBlog(event) {
    event.preventDefault();
    let timestamp = event.timeStamp;
 console.log({
        date: timestamp,
        heading: event.target,
        text: event.text,
      })
    // dataBase
    //   .collection("posts")
    //   .add({
    //     date: timestamp,
    //     heading: event.heading,
    //     text: event.text,
    //   })
    //   .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
  }
  return (
    <div className="input-div">
      <div className="center">
        <h2>Add a new article</h2>
        <form>
          <label htmlFor="Heading">Heading:</label>
          <br />
          <input
            type="text"
            id="Heading"
            name="Heading"
            defaultValue="What did you learn today?"
            minLength="5"
          />
          <br />
          <br />
          <label htmlFor="Text">Text:</label>
          <br />
          <textarea
            id="Text"
            name="Text"
            form="formPost"
            defaultValue="Tell us more!"
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
    </div>
  );
};

export default InputDiv;
