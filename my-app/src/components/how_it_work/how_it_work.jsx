import React from "react";
import "./how_it_work.css";
const How_it_work = () => {
  return (
    <div className="container-fluied">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="container work_content">
            <h1 id="work_h1">Our core value</h1>
            <p id="work_p">
              Our platform is dedicated to utilizing cutting-edge DNA technology
              to solve a variety of cases, ranging from criminal investigations
              to family disputes.{" "}
            </p>
            <div className="core_value row">
              <div className="col-lg-3">
                <img
                  className="video"
                  src={"/assets/images/integrity-logo-png-transparent.png"}
                  alt=""
                  width={"200px"}
                  height={"200px"}
                />
                <p className="core-p">integrity</p>
              </div>
              <div className="col-lg-3">
                <img
                  className="video"
                  src={
                    "/assets/images/png-clipart-computer-security-threat-national-cyber-security-awareness-month-proactive-cyber-defence-cyberwarfare-topic-logo-text-trademark-removebg-preview.png"
                  }
                  alt=""
                  width={"200px"}
                  height={"200px"}
                />
                <p className="core-p">security</p>
              </div>
              <div className="col-lg-3">
                <img
                  className="video"
                  src={
                    "/assets/images/png-transparent-nirvana-solutions-logo-brand-com-font-cost-effective-blue-angle-text-thumbnail-removebg-preview.png"
                  }
                  alt=""
                  width={"200px"}
                  height={"200px"}
                />
                <p className="core-p">efficiency </p>
              </div>
              <div className="col-lg-3">
                <img
                  className="video"
                  src={"/assets/images/8596602.png"}
                  alt=""
                  width={"200px"}
                  height={"200px"}
                />
                <p className="core-p">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How_it_work;
