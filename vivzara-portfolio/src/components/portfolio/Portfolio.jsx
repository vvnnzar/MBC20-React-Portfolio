import React from "react";
import "./portfolio.scss";
// import ReactCardFlip from "react-card-flip";

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolioContainer">
      <div className="label">
        <h1>My Portfolio</h1>
        <h3>Stay tuned! More coming soon</h3>
      </div>
      <div className="portfolio">
        <div className="item1">
          <h2>TechREADY Website</h2>
          <img
            src="./assets/images/techReady_Homepage.png"
            alt="password generator application"
          />
          <p>Built in collaboration with Monash Bootcamp Students.</p>
          <p>
            The TechREADY application allows Junior developers to seek answers
            to hard interview questions, connect with tutors and obtain
            reference material prior to taking an interview.
          </p>
          <a
            href="https://gentle-headland-96957.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Visit
          </a>
        </div>
        <div className="item2">
          <h2>Gaming Website</h2>
          <img
            src="./assets/images/game_app_screen design.png"
            alt="gaming application"
          />
          <p>Built in collaboration with Monash Bootcamp Students.</p>
          <p>
            The Gaming App allows avid 'Gamers' to search most popular games and
            obtain the sale price.
          </p>
          <br />
          <a
            href="https://vvnnzar.github.io/Game-App/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
