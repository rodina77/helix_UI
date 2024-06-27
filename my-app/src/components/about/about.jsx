import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="about_content" id="about">
            <h2>About US</h2>
            <p>
              {" "}
              we are passionate about harnessing the power of genetic
              information to make a positive impact on individuals, families,
              and communities worldwide. With a dedicated team of experts in the
              fields of genetics, forensics, and technology, we are committed to
              delivering accurate and reliable results that uphold the highest
              standards of quality and integrity. Join us on this exciting
              journey as we unlock the secrets hidden within our genetic code
              and pave the way for a future where DNA analysis is synonymous
              with clarity, reliability, and ethical practice.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="about_image">
            <video
              className="video"
              autoplay=""
              muted=""
              playsInline=""
              loop
              src={
                "/assets/videos/geneticist-5403607-4510604_1709151507033.mp4"
              }
              width="640.89px"
              height="600px"
            ></video>
          </div>
        </div>
        <hr className="break_line"></hr>
      </div>
    </div>
  );
};

export default About;
