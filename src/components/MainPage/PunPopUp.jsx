import React, { useState } from "react";

const PunPopUp = ({ showPunPopUp, setShowPunPopUp, pun }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={showPunPopUp ? "pun-container" : "pun-container hidden"}>
      <p className="pun-setup">{pun.setup}</p>
      <button onClick={() => setShowAnswer(true)}>Answer</button>
      <div className="pun-punchline">
        {showAnswer && <p>{pun.punchline}</p>}
      </div>
      <button
        onClick={() => {
          setShowAnswer(false);
          setShowPunPopUp(false);
        }}>
        {showAnswer ? "Omg lame" : "Please no"}
      </button>
    </div>
  );
};

export default PunPopUp;
