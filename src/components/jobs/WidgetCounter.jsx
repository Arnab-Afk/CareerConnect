import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

WidgetCounter.propTypes = {};

function WidgetCounter(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  const { className } = props;
  return (
    <div className={`wd-review-job thumb2 widget-counter ${className}`}>
      <div className="thumb">
        <img
          src={require("../../assets/images/review/thumb2.png")}
          alt="images"
        />
      </div>
      <div className="trader-box">
        <div className="content">
          <Waypoint onEnter={onVWEnter}>
            <h3>
              {viewPortEntered && (
                <CountUp className="number" end={25} suffix="M+" duration={3} />
              )}
            </h3>
          </Waypoint>
          <div className="des">Jobs Available</div>
        </div>
        <div className="shape ani7">
          <img
            src={require("../../assets/images/review/shape.png")}
            alt="images"
          />
        </div>
      </div>
      <div className="tes-box ani5">
        <div className="client-box">
          <div className="avt">
            <img
              src={require("../../assets/images/review/client.jpg")}
              alt="images"
            />
            <div className="badge"></div>
          </div>
          <div className="content">
            <Waypoint onEnter={onVWEnter}>
              <h6>
                {viewPortEntered && (
                  <CountUp
                    className="number"
                    end={480}
                    suffix="+"
                    duration={3}
                  />
                )}
              </h6>
            </Waypoint>
            <div className="des">Happpy Candidates</div>
          </div>
        </div>
      </div>
      <div className="icon1 ani3">
        <img
          src={require("../../assets/images/review/icon1.png")}
          alt="images"
        />
      </div>
      <div className="icon2 ani1">
        <img
          src={require("../../assets/images/review/icon2.png")}
          alt="images"
        />
      </div>
      <div className="icon3 ani6">
        <img
          src={require("../../assets/images/review/icon3.png")}
          alt="images"
        />
      </div>
    </div>
  );
}

export default WidgetCounter;
