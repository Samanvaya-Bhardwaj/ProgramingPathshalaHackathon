import React, { useRef } from "react";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const intro = useRef(null);
  const speciality = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar
        intro={intro}
        speciality={speciality}
        contact={contact}
        scrollToSection={scrollToSection}
      />
      <Container intro={intro} speciality={speciality} />
      <Contact contact={contact} />
    </>
  );
}

export default App;
