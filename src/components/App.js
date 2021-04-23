import React from "react";
import Portfolio from "./Portfolio";

import Presentation from "./Presentation";
import Slider from "./Slider";

function App() {
  return (
    <>
      <div className="background-frame">
        <Presentation />
        <Slider>
          <Portfolio />
        </Slider>
      </div>
    </>
  );
}

export default App;
