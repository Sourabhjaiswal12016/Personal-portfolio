import React from "react";
import "./intro.css";
import bg from "../../assets/remini.jpg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
const Intro = () => {
  return (
    <section id="intro">
      <div class="intro-content">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sourabh Jaiswal</span>
          <br />
          {/* Website Developer */}
          <Typewriter
            options={{
              strings: ["A Developer", "A UX/UI Designer", "A Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterPara",
            }}
          />
        </span>
        <p className="introPara">
          I'm a skilled web developer and programmer, with experience in <br />
          creating visually appealing and user friendly websites.
        </p>
        <a href="mailto:sourabhjaiswal07102002@gmail.com">
        <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img className="bg" src={bg} alt="Profile" />
    </section>
  );
};

export default Intro;
