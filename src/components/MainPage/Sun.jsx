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
        alt="A portrait of my face, that is in the sun."
      />
    </div>
  );
}

export default Sun;
