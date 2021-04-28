import React from "react";
import Blog from "./Blog";
import Presentation from "./Presentation";

function MainPage() {
  return (
    <>
      <div className="background-frame">
        <Presentation />
        <Blog />
      </div>
    </>
  );
}

export default MainPage;