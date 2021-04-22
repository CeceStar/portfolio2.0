import React from "react";
import Sun from "./Sun";

function Presentation() {
  return (
    <>
      <div className="raydiv">
        <div id="rays"></div>
      </div>
      <div className="intro-grid">
        <Sun />
        <h1 className="intro-heading">
          Hello! My name is <span className="highlight1">Cecilia Hallerby</span> and I'm an aspiring Frontend
          developer
        </h1>
        <p className="intro-text">
          Born and raised in Stockholm, Sweden and has earlier worked in the
          hotel industry as both Front desk manager but also as system
          responsible for the booking system within the hotel chain. I have
          always been interested in tech, and that’s how I found more
          information about coding. It got my attention and after some back and
          forth, I finally applied for this Frontend developer program at Hyper
          Island, and got in! I'm in the middle of the program, and are expected
          to graduate in April 2022. In October 2021 I will do a 24 weeks long
          internship. Contact me if you are interested in having me in your
          company! I'm eager to learn and good at seeking information online.
        </p>
      </div>
    </>
  );
}

export default Presentation;
