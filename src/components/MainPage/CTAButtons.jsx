import React, { useState } from "react";
import CVButton from "./CVButton";
import PunPopUp from "./PunPopUp";

const CTAButtons = () => {
  const [showPunPopUp, setShowPunPopUp] = useState(false);
  const [pun, setPun] = useState("");

  function getPun() {
    fetch(
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/"
    )
      .then((response) => response.json())
      .then((data) => {
        setPun(data);
      });
  }

  return (
    <div className="pun-button-div">
      <CVButton />
      <button
        className="pun-button"
        onClick={() => {
          getPun();
          setShowPunPopUp(true);
        }}>
        Have your heard?
      </button> 
      <PunPopUp
        showPunPopUp={showPunPopUp}
        setShowPunPopUp={setShowPunPopUp}
        pun={pun}
      />
    </div>
  );
};

export default CTAButtons;
