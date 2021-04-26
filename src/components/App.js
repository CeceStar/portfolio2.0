import React from "react";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Presentation from "./Presentation";

function App() {
  return (
    <>
      <div className="background-frame">
        <Presentation />
        {/* <Portfolio /> */}
        <Blog />
      </div>
    </>
  );
}

export default App;
