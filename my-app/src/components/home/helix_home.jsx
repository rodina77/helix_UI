import React from "react";
import "./helix_home.css";
const HelixHome = () => {
  return (
    <div className="container-fluied">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="overlay">
            <video
              className="video"
              autoplay=""
              muted=""
              playsInline=""
              loop=""
              width={"1720px"}
              height={"999px"}
              src={
                "/assets/videos/depositphotos_321144034-stock-video-dna-sequence-blue-dna-structure.mp4"
              }
            ></video>

            <div className="container home_content">
              <h1 id="helix_h1">Double Helix system</h1>
              <p id="heli_p">
                Our platform is dedicated to utilizing cutting-edge DNA
                technology to solve a variety of cases, ranging from criminal
                investigations to family disputes.{" "}
              </p>
              <div class="btn-2">
                <a href="#about_us">
                  <span>More About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelixHome;
