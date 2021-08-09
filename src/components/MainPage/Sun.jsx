import React from "react";
import PicOfMe from "../../assets/images/cece-sun-square-nogloria.png";

function Sun() {
  return (
    <div className="sun">
      <div className="raydiv">
        <div id="rays"></div>
      </div>
      <img
        className="cece-portrait"
        src={PicOfMe}
        alt="Cecilia's portrait inside a sun."
      />
    </div>
  );
}

export default Sun;
