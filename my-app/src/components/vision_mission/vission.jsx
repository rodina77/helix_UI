import React from "react";
import "./vision.css";
const Vission = () => {
  return (
    <div id="vision_section" className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <h2>our vision</h2>
          <p>
            To be a global leader in DNA analysis technology, empowering
            communities with accurate answers and solutions through cutting-edge
            scientific advancements and ethical practices.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="vision_img">
            <video
              className="video"
              autoplay=""
              muted=""
              playsinline=""
              loop
              src={"/assets/videos/dna-analysis-8875211-7204420.mp4"}
              width="390.89px"
              height="390px"
            ></video>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <h2>our mission</h2>
          <p>
            Our mission is to provide accessible, reliable, and timely DNA
            analysis services to support investigations, resolve disputes, and
            reunite families. By upholding the highest standards of integrity
            and innovation, we strive to bring clarity to complex situations and
            contribute to a safer and more just society
          </p>
        </div>
        <hr className="break_line"></hr>
      </div>
    </div>
  );
};

export default Vission;
