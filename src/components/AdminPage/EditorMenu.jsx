import React from "react";

const EditorMenu = ({ allPosts, setClickedPostId, setEditHeading, setEditText }) => {
  let postsHeadings = allPosts.map((doc) => {
    return {
      id: doc.id,
      heading: doc.heading,
    };
  });

  function handleClick(event) {
    let IDofPost = event.target.id;
    let dataToEdit = allPosts.find(function (item) {
      return item.id === IDofPost;
    });
    setClickedPostId(dataToEdit.id);
    setEditHeading(dataToEdit.heading)
    setEditText(dataToEdit.text)
  }

  return (
    <div className="menu-div">
      <ul>
        <li>Add a new Post</li>
        <li>Edit a Post</li>
        <ul>
          {" "}
          {postsHeadings.map((post) => {
            return (
              <li key={post.id}>
                <button
                  className="blog-headings-menu"
                  id={post.id}
                  onClick={handleClick}>
                  {post.heading}
                </button>
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default EditorMenu;
