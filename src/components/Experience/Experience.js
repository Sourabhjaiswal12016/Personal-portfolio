import "./Experience.css";
import React, { useState } from "react";
import expImg from "../../assets/experienceImg.png";
import cppImg from "../../assets/CPPExp.png";
import webDoctaImg from "../../assets/expOcta.png";
import theKikaImg from "../../assets/theKikaExp.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const experienceData = [
  {
    id: 1,
    name: "CodSoft",
    workType: "Intern",
    role: "C++ Developer ",
    durationFrom: "June 2023",
    durationTo: "July 2023",
    image: cppImg,
  },
  {
    id: 2,
    name: "OctaNet Services",
    workType: "Intern",
    role: "Front-End Developer ",
    durationFrom: "July 2023",
    durationTo: "Aug 2023",
    image: webDoctaImg,
  },
  {
    id: 3,
    name: "TechiEco Solutions",
    workType: "Intern",
    role: "Front-End Developer ",
    durationFrom: "Oct 2023",
    durationTo: "Jan 2023",
    image: expImg,
  },
  {
    id: 4,
    name: "The Kika",
    workType: "Full Time",
    role: "Front-End Developer ",
    durationFrom: "Feb 2024",
    durationTo: "March 2024",
    image: theKikaImg,
  },
];

const Experience = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div id="main-exp">
      <div className="spacer"></div>
      <div className="exp-title">
        <h2>My Experiences</h2>
      </div>
      <div className="exp-slider">
        <Slider {...settings}>
          {experienceData.map((item, id) => (
            <div className="exp-data-main-div">
              <div className="exp-image">
                <img src={item.image} alt="image" className="exp-image-img" />
              </div>
              <div className="about-exp">
                <div className="role-work-type">
                  <p>
                    <strong>{item.role}</strong>
                    <span>{item.workType}</span>
                  </p>
                </div>
                <div className="duration-name">
                  <div className="compName">
                    <strong>{item.name}</strong>
                  </div>
                  <p>
                    {" "}
                    <strong>{item.durationFrom}</strong> To{" "}
                    <strong>{item.durationTo}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
