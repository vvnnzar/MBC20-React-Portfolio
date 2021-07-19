import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Full Stack Developer", "Business Consultant"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="leftPane">
        <div className="imgContainer">
          <img
            className="img"
            src="assets/images/viv.png"
            alt="vivianne zara"
          ></img>
        </div>
      </div>
      <div className="rightPane">
        <h1>Vivianne Zara</h1>
        <h3>
          Freelance <span ref={textRef}></span>
        </h3>
        {/* <div>
          <a href="#porfolio">
            <img
              className="arrowIcon"
              src="assets/images/arrow-down.png"
              alt="arrow"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}
