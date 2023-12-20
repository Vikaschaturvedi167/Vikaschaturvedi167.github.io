import React, { useEffect } from "react";
import resumePDF from "../resume/VikasChaturvedi-resume.pdf"; // Assuming correct path to resume PDF
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS if not already imported

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1cjd_bUS4TM2Z9_SRxF38IZvHmohPcOwV/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className="first">
          <p id="user-detail-intro">
            Welcome to my coding realm, where I transform coffee into lines of code!{" "}
            <span style={{ display: 'inline-block' }} className="sauce">Me, Vikas</span>,
            a proficient full stack web developer. My expertise spans across HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and I'm well-versed in working with database technologies like MongoDB. My true passion lies in crafting websites that not only boast impressive aesthetics but also elicit exclamations of delight from users. I strive for excellence and pay meticulous attention to detail, enabling me to conquer even the most intricate coding challenges. When I'm not engrossed in coding, I love immersing myself in the latest tech trends and exploring new possibilities in the digital world.
          </p>
        </div>
        <a
          onClick={handleDownload}
          rel="noreferrer"
          href={resumePDF}
          download={"VikasChaturvedi_Resume.pdf"} // Adjust the filename for download
          id="resume-button-2"
          className="contact-button resume-button second-btn"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
