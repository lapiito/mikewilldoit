import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">MIKE FIAT </span>
            from <span className="blue"> Ghana, Africa</span>
            <br />I am a Senior Software Developer that loves to create &
            problem-solve.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Family time
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always continue to love, live & learn"{" "}
          </p>
          <footer className="blockquote-footer">Mike</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
