import React, { useState } from "react";
import PunPopUp from "./PunPopUp";

const PunButton = () => {
  const [showPunPopUp, setShowPunPopUp] = useState(false);
  const [pun, setPun] = useState("");

  function getPun() {
    fetch(
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming/"
    )
      .then((response) => response.json())
      .then((data) => {
        let [pun] = data
        setPun(pun);
      });
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
      <PunPopUp
        showPunPopUp={showPunPopUp}
        setShowPunPopUp={setShowPunPopUp}
        pun={pun}
      />
    </div>
  );
};

export default PunButton;
