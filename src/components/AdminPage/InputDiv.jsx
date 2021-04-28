import React from "react";

const InputDiv = () => {
  return (
    <div className="input-div">
      <div className="center">
        <h3>Add a new article</h3>
        <form>
          <label htmlFor="Heading">Heading:</label>
          <br />
          <input
            type="text"
            id="Heading"
            name="Heading"
            defaultValue="What did you learn today?"
            minlength="5"
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
            minlength="200"
          />
          <br />
          <br />
          <input type="submit" value="Submit" id="submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default InputDiv;
