import React from "react";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Courses from "./components/Courses/Courses";
import Navbar from "./components/Navbar/Navbar";
import Compile from "./components/Compiler/Compile";
function App() {
  return (
    <>
    <Navbar/>
    <Compile />
    <Container/>
    <Courses/>
    <Contact/>
     
    </>
  );
}

export default App;
