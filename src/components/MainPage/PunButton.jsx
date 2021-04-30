import React, { useState } from "react";
import PunPopUp from "./PunPopUp";

const PunButton = () => {
  const [showPunPopUp, setShowPunPopUp] = useState(false);
  const [pun, setPun] = useState("");
  function getPun() {
    console.log("I got clicked");
    fetch(
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes"
    )
      .then((response) => response.json())
      .then((data) => setPun(data));
  }
  return (
    <div className="pun-button-div">
      <button
        className="pun-button"
        onClick={() => {
          getPun();
          setShowPunPopUp(true);
        }}>
        Have your heard this?
      </button>
      <PunPopUp showPunPopUp={showPunPopUp} setShowPunPopUp={setShowPunPopUp} pun={pun} />
    </div>
  );
};

export default PunButton;
