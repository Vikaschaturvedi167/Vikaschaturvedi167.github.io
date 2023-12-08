import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";

import myntraImg from "./Images/myntra.png";
import myntraS from "./Images/myntra small.png";
import travelImg from  "./Images/carver1.png"
import travelS from "./Images/carver2.png";

import wineImg from "./Images/wine1.png";
import wineSImg from "./Images/wine2.png";
import instagramSImg2 from "./Images/insta.png";
import portfolio from "./Images/portfolio.png";
import portfolio_small from "./Images/port f.png";
import autoImg from './Images/auto1.png'
import autoSImg from './Images/auto2.png'

import { motion, Variants } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Carver ",
    subTitle: "A Front-end Application with json-server ",
    img1: travelImg,
    img2: travelS,
    desc: "Carver is a e-commerce website for Skateboards, build in 7 days along with a team of 4 members.",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "Firebase",
      "RazorPay",
      "json-server"

      ,
    ],
    features: [
      "Home Page",
      "Login",
      "Signup",
      "Product Page",
      "Product Details",
      "Cart Page",
      "Checkout Page",
    ],
    resp: "Independently created login and signup page with firebase authentication, and i also contributed to the creation of the  detail page, navbar, and Home page.",
    git: "https://github.com/slowandrarecooked/teamCarver",
    preview: "https://6516b764de7a6771f0bc0406--chimerical-macaron-c431dc.netlify.app/",
  },
  {
    id: 2,
    title: "Wine Shop",
    subTitle:
      "A fully-featured Wineshop built with React-redux.",
    img1: wineImg,
    img2: wineSImg,
    desc: "Team of five crafted a simple, user-friendly wineShop for a seamless E-commerce experience",
    techUsed: [
      "React",
      "Redux",
      "Javascript",
      "HTML",
      "CSS",
      "json-server",

     
    ],
    features: [ "Login Signup", "Product page", "Cart Page", "Home Page", "Checkout page"],
  
    git: "https://github.com/Vikaschaturvedi167/WineShop_project",
    preview: "https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/index.html",
  },
  {
    id: 3,
    title: "Auto Parts",
    subTitle:
      "Front-end based E-commerce platform with smooth flow.",
    img1: autoImg,
    img2: autoSImg,
    desc: " Independently created login and signup page with firebase authentication, and i also contributed to the creation of the  detail page, navbar, and Home page.",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "Firebase",
      "RazorPay",
      "json-server"

      ,
      
      
     
    ],
    features: ["Login Signup", "Product Page","Product Details","Cart Page", "Checkout page", ],
  
    git: "https://github.com/StarkArnab/glorious-calendar-2511",
    preview: "https://650992846403785c0ba39b65--luxury-faun-db5a1e.netlify.app/",
  },
  
  
   
  {
    id: 6,
    title: "Myntra Clone",
    subTitle: "An E-Commerce website",
    img1: myntraImg,
    img2: myntraS,
    desc: "Build clone of myntra.com in 7 days.",
    techUsed: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: ["Login", "Signup", "Cart Page", "Checkout Page"],
    resp: "Developed the product page(Men's T-shirt), product's static pages, cart page and wishlist page",
    git: "https://github.com/Vikaschaturvedi167/Myntra_clone/tree/main",
    preview: "https://gilded-vacherin-2e78d2.netlify.app/",
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        {/*  */}
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
