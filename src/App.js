import React, { useRef } from "react";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const intro = useRef(null);
  const speciality = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <Container />
      <Contact />
    </>
  );
}

export default App;
