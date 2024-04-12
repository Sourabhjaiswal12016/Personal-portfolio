/* eslint-disable no-undef */

import TechSkill from "./MyTech/TechSkill";
import Skills from "./Skills/skill";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <TechSkill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
export default App;
