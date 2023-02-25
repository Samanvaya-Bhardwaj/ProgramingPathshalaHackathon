import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Compiler from "./Compiler";
function Compile() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>LearnED Coding Compiler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Compiler />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Compile;
//render(<Example />);
