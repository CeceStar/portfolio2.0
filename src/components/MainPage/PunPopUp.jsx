import React from "react";

const PunPopUp = ({showPunPopUp, setShowPunPopUp, pun}) => {
  return (
    <div className={showPunPopUp ? "pun-background" : "pun-background hidden" }>
      <div><p>{pun.setup}</p> <p>{pun.punchline}</p></div>
    </div>
  );
};

export default PunPopUp;
