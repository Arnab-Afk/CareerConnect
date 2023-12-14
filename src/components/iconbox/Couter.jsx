import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

Couter.propTypes = {};

function Couter(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };
  const { className } = props;
  return (
    <div className={`wrap-count align-item-center ${className}`}>
      <div className="row">
        <div className="col-lg-3 col-md-6 wow fadeInUp">
          <div className="wd-counter widget-counter">
            <div className="inner wrap-counter">
              <Waypoint onEnter={onVWEnter}>
                <h2>
                  {viewPortEntered && (
                    <CountUp
                      className="number"
                      end={25}
                      suffix="M+"
                      duration={3}
                    />
                  )}
                </h2>
              </Waypoint>
            </div>
            <p className="description">Jobs Available</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="wd-counter widget-counter">
            <div className="inner wrap-counter">
              <Waypoint onEnter={onVWEnter}>
                <h2>
                  {viewPortEntered && (
                    <CountUp
                      className="number"
                      end={177}
                      suffix="k+"
                      duration={1}
                    />
                  )}
                </h2>
              </Waypoint>
            </div>
            <p className="description">New Jobs This Week!</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div className="wd-counter widget-counter">
            <div className="inner wrap-counter">
              <Waypoint onEnter={onVWEnter}>
                <h2>
                  {viewPortEntered && (
                    <CountUp
                      className="number"
                      end={298}
                      suffix="k+"
                      duration={1}
                    />
                  )}
                </h2>
              </Waypoint>
            </div>
            <p className="description">Companies Hiring</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="wd-counter widget-counter">
            <div className="inner wrap-counter">
              <Waypoint onEnter={onVWEnter}>
                <h2>
                  {viewPortEntered && (
                    <CountUp
                      className="number"
                      end={5}
                      suffix="M+"
                      duration={3}
                    />
                  )}
                </h2>
              </Waypoint>
            </div>
            <p className="description">Candidates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couter;
