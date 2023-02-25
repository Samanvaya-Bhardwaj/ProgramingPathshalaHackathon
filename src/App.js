import React, { useRef } from "react";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./components/Courses/Courses";
function App() {
  const intro = useRef(null);
  const speciality = useRef(null);
  const contact = useRef(null);
  const courses = useRef(null);
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
        courses={courses}
        scrollToSection={scrollToSection}
      />
      <br />
      <div>
        <Container intro={intro} speciality={speciality} />
        <Courses courses={courses} />
        <Contact contact={contact} />
      </div>
    </>
  );
}

export default App;
