import React from "react";
import "./feature.css";
const Features = () => {
  return (
    <body>
      <div className="container">
        <h2 className="features_h2">our features</h2>
        <div className="row">
          <div className="features">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <video
                className="video_features"
                autoplay=""
                muted=""
                playsinline=""
                loop
                src={
                  "/assets/videos/young-lady-and-man-research-on-dna-at-medical-laboratory-8676849-6970644.mp4"
                }
                width="640.89px"
                height="600px"
              ></video>
              <div class="card1">
                <h3>paternity test</h3>
                <p className="card1_p1">
                  Paternity tests are commonly used in legal cases related to
                  child support, custody disputes, inheritance claims, and
                  immigration purposes. They can also be done for personal
                  reasons
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12">
              <video
                className="video_features"
                autoplay=""
                muted=""
                playsinline=""
                loop
                src={"/assets/videos/lab-tube-holding-9858989-8069107.mp4"}
                width="640.89px"
                height="600px"
              ></video>
              <div class="card1">
                <h3>missing test</h3>
                <p>
                  DNA samples obtained from the missing person can be compared
                  to DNA samples from family members (parents, siblings,
                  children) to establish a genetic relationship and confirm
                  identity of missing individual.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12">
              <video
                className="video_features"
                autoplay=""
                muted=""
                playsinline=""
                loop
                src={
                  "/assets/videos/black-researcher-studying-dna-strand-rotating-9858970-8068465.mp4"
                }
                width="640.89px"
                height="600px"
              ></video>
              <div class="card1">
                <h3>identification</h3>
                <p>
                  DNA samples obtained from the individual in question are
                  compared with DNA samples from relatives or other reference
                  samples to establish a genetic relationship and confirm
                  identity of person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Features;
