import React, { useState } from "react";

import "./statistics.css";

const Statistics = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row statistics_content">
          <h2 className="statistics_content_h2">our cases</h2>
          <div className="missing_people col-lg-4 col-md-12 col-sm-12">
            <div className="missing_people col-lg-4 col-md-12 col-sm-12">
              <video
                className="video"
                autoPlay
                muted
                playsInline
                loop
                src="/assets/videos/laboratory-results-3585673-3020653.mp4"
                width="219.89px"
                height="200px"
              ></video>
              <h2>+704</h2>
              <p>missing founded</p>
            </div>
          </div>

          <div className="missing_people2 col-lg-4 col-md-12 col-sm-12">
            <div className="paternity_people col-lg-4 col-md-12 col-sm-12">
              <video
                className="video"
                autoPlay
                muted
                playsInline
                loop
                src="/assets/videos/test-tube-stand-10647211-8559983.mp4"
                width="219.89px"
                height="200px"
              ></video>
              <h2>+521</h2>
              <p>paternity test</p>
            </div>
          </div>

          <div className="missing_people3 col-lg-4 col-md-12 col-sm-12">
            <div className="identification_people col-lg-4 col-md-12 col-sm-12">
              <video
                className="video"
                autoPlay
                muted
                playsInline
                loop
                src="/assets/videos/dna-3585681-3020347.mp4"
                width="219.89px"
                height="200px"
              ></video>
              <h2>+112</h2>
              <p>identified people</p>
            </div>
          </div>
          <hr className="break_line"></hr>
        </div>
      </div>
    </>
  );
};

export default Statistics;
