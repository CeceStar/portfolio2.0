import React from "react";

const EditorMenu = ({ allPosts }) => {
  let postsHeadings = allPosts.map((doc) => {
    return {
      id: doc.id,
      heading: doc.heading,
    };
  });

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
                <button className="blog-headings-menu" id={post.id}>{post.heading}</button>
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default EditorMenu;
