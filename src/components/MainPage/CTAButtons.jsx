import React, { useState } from "react";
import CVButton from "./CVButton";
import PunPopUp from "./PunPopUp";

const CTAButtons = () => {
  const [showPunPopUp, setShowPunPopUp] = useState(false);
  const [pun, setPun] = useState("");

  function getPun() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setPun(data);
      });
  }

  return (
    <>
      <PunPopUp
        showPunPopUp={showPunPopUp}
        setShowPunPopUp={setShowPunPopUp}
        pun={pun}
      />
      <div className="pun-button-div animate__animated animate__fadeIn animate__delay-1s">
        <CVButton />
        <button
          className="pun-button"
          onClick={() => {
            getPun();
            setShowPunPopUp(true);
          }}>
          Have your heard?
        </button>
      </div>
    </>
  );
};

export default CTAButtons;
