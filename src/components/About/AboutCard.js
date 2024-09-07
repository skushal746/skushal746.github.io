import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kushal Sharma </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software developer at Remora.
            <br />
            I have completed MS in CS at University of Florida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Carpe Diem!"{" "}
          </p>
          <footer className="blockquote-footer">Kushal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
