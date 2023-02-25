import React from "react";
import "./Courses.css";
import { Card, Button } from "react-bootstrap";
import Compile from "../Compiler/Compile";

export default function Courses({ courses }) {
  return (
    <>
      <h1 className="text-center my-5" ref={courses}>
        Our Courses
      </h1>
      <div className="crd d-flex align-item-center justify-content-around">
        <div>
          <Card className="my-5 mx-5" style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src="/assets/java.jpg" />
            <Card.Body>
              <Card.Title>Learn Java</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="my-5 mx-5" style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src="/assets/react.jpg" />
            <Card.Body>
              <Card.Title>Learn React</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="my-5 mx-5" style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src="/assets/cpp.jpg" />
            <Card.Body>
              <Card.Title>Learn C++</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className="my-5 mx-5" style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src="/assets/js.jpg" />
            <Card.Body>
              <Card.Title>Learn Java Script</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="my-5 mx-5" style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src="/assets/play.png" />
            <Card.Body>
              <Card.Title>Playground</Card.Title>
              <Compile />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
