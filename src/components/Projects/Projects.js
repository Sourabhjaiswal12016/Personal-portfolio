import "./Projects.css";
import React, { useState } from "react";
import img1 from "../../proImages/e-commerce.png";
import img2 from "../../proImages/food.jpg";
import img3 from "../../proImages/crypto.png";
import img4 from "../../proImages/port.jpg";
import img5 from "../../proImages/todo.png";
import img6 from "../../proImages/weather.png";
import img7 from "../../proImages/pass.jpg";
import img8 from "../../proImages/counter.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const projectsData = [
  {
    id: 1,
    name: "E-Commerce",
    image: img1,
    description:
      "Revolutionize online shopping with our cutting-edge e-commerce platform.",
    skills: "React , JS ",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 2,
    name: "Food Delivery",
    image: img2,
    description:
      "Savor the flavor! Explore a delightful world of culinary experiences.",
    skills: "React , Nodejs ",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 3,
    name: "Crypto Tracker",
    image: img3,
    description:
      "Dive into the future of finance with our innovative cryptocurrency solutions.",
    skills: "React , JS",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 4,
    name: "Port-folio",
    image: img4,
    description:
      "Crafting digital identities: Showcase your uniqueness with our portfolio designs.",
    skills: "React , JS ",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 5,
    name: "ToDo List",
    image: img5,
    description:
      "Boost productivity and stay organized with our intuitive to-do list application.",
    skills: "HTML , CSS , JS",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 6,
    name: "Weather Check",
    image: img6,
    description:
      "Stay ahead of the forecast: Access real-time weather updates effortlessly.",
    skills: "React , JS",
    url: "https://github.com/Sourabhjaiswal12016/Weather_app_react",
    demo: "https://weather-app-react-tan-delta.vercel.app/",
  },
  {
    id: 7,
    name: "Pass. Generator",
    image: img7,
    description:
      "Secure your digital journey: Manage passwords with our robust password manager.",
    skills: "HTML , CSS , JS",
    url: "https://github.com/Sourabhjaiswal12016/OctaNet_password_generator",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
  {
    id: 8,
    name: "Counter",
    image: img8,
    description:
      "Count every success: Enhance your projects with our dynamic counter applications.",
    skills: "HTML , CSS , JS",
    url: "https://github.com/Sourabhjaiswal12016/Ecommerce-App",
    demo: "https://e-commerce-app-tau-ten.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="main-pro">
      <div className="pro-title">
        <h2>My Projects</h2>
      </div>

      <div className="pro-cero-cont">
      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        stopOnHover={false}
        showIndicators={false}
      >
        {projectsData.map((item) => (
          <div className="pro-container">
            <img
              src={item.image}
              alt="project-image"
              className="pro-item-img"
            />
            <div className="about">
              <div className="title-desc">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <div className="pro-btns">
                <a href={item.demo}>
                  {" "}
                  <button>demo</button>
                </a>
                <a href={item.url}>
                  {" "}
                  <button>code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Projects;
