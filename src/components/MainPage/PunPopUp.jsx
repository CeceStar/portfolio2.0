import React, { useState } from "react";

const PunPopUp = ({ showPunPopUp, setShowPunPopUp, pun, setPun }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={showPunPopUp ? "pun-container" : "pun-container hidden"}>
      <p className="pun-setup">{pun.setup}</p>
      {pun && (
        <>
          <button onClick={() => setShowAnswer(true)}>Answer</button>
          <div className="pun-punchline">
            {showAnswer && <p>{pun.punchline}</p>}
          </div>
          <button
            onClick={() => {
              setShowAnswer(false);
              setShowPunPopUp(false);
              setPun("");
            }}>
            {showAnswer ? "Haha, Love it!" : "No, don't tell me"}
          </button>
        </>
      )}
    </div>
  );
};

export default PunPopUp;
