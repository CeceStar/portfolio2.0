import React from "react";
import Blog from "./Blog";
import Presentation from "./Presentation";

function MainPage({allPosts}) {
  return (
    <>
      <div className="background-frame">
        <Presentation />
        <Blog allPosts={allPosts}/>
      </div>
    </>
  );
}

export default MainPage;
