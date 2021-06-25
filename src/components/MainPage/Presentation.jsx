import React from "react";
import PunButton from "./PunButton";
import Sun from "./Sun";

function Presentation() {
  return (
    <>
      <div className="background-front">
        <div className="intro-grid">
          <h1 className="intro-heading">
            <span className="highlight3">Hello!</span> My name is{" "}
            <span className="highlight1">Cecilia Hallerby</span> and I'm a
            <span className="highlight4"> Front end developer.</span>
          </h1>
          <Sun />
          <p className="intro-text">
            Born and raised in Stockholm, Sweden and has earlier worked in the
            hotel industry as both Front desk manager but also as system
            responsible for the booking system within the hotel chain. I have
            always been interested in tech, and that’s how I found more
            information about coding. It got my attention and after some back
            and forth, I finally applied for this Frontend developer program at
            Hyper Island, and got in! Contact me if you are interested in having
            me in your company! I'm eager to learn and good at seeking
            information online.
          </p>
          <PunButton />
        </div>
      </div>
    </>
  );
}

export default Presentation;
