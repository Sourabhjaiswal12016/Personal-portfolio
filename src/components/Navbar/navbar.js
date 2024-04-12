import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem item1"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem item2"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="tech-skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem item3"
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="main-pro"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="desktopMenuListItem exp-nav item4"
        >
          Projects <div className="one-plus"> 8+ Projects</div>{" "}
        </Link>

        <Link
          activeClass="active"
          to="main-exp"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem exp-nav item5"
        >
          <div>Experience</div> <div className="one-plus">1+ years</div>
        </Link>
      </div>
      <Link
        activeClass="active"
        to="cnt-tit"
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="contactImage" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>
      {/* resposive navbar  work*/}
      <img
        src={menu}
        alt="mob-menu"
        className="mob-menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem item1"
          onClick={() => setShowMenu(!showMenu)}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem item2"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="tech-skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem item3"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="main-pro"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="listItem exp-nav item4"
          onClick={() => setShowMenu(false)}
        >
          Projects <div className="one-plus"> 8+ Projects</div>{" "}
        </Link>

        <Link
          activeClass="active"
          to="main-exp"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="listItem exp-nav item5"
          onClick={() => setShowMenu(false)}
        >
          <div>Experience</div> <div className="one-plus">1+ years</div>
        </Link>

        <Link
          activeClass="active"
          to="cnt-tit"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem item2"
          onClick={() => setShowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
