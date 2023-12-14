import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/review/thumb2.png";
import shape1 from "../../assets/images/review/shape.png";
import client1 from "../../assets/images/review/client.png";
import icon1 from "../../assets/images/review/icon1.png";
import icon2 from "../../assets/images/review/icon2.png";
import icon3 from "../../assets/images/review/icon3.png";

function Review(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <section className="inner-review-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="wd-review-job thumb2 widget-counter stc">
              <div className="thumb">
                <img src={img1} alt="images" />
              </div>
              <div className="trader-box">
                <div className="content">
                  <h3 className="number wrap-counter">
                    <Waypoint onEnter={onVWEnter}>
                      <span>
                        {viewPortEntered && (
                          <CountUp
                            className="number"
                            end={25}
                            suffix="M+"
                            duration={3}
                          />
                        )}
                      </span>
                    </Waypoint>
                  </h3>
                  <div className="des">Jobs Available</div>
                </div>
                <div className="shape ani7">
                  <img src={shape1} alt="images" />
                </div>
              </div>
              <div className="tes-box ani5">
                <div className="client-box">
                  <div className="avt">
                    <img src={client1} alt="images" />
                    <div className="badge"> </div>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={480}
                              suffix="+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h6>
                    <div className="des">Happpy Candidates</div>
                  </div>
                </div>
              </div>
              <div className="icon1 ani3">
                <img src={icon1} alt="images" />
              </div>
              <div className="icon2 ani4">
                <img src={icon2} alt="images" />
              </div>
              <div className="icon3 ani6">
                <img src={icon3} alt="images" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 wow fadeInRight">
            <div className="wd-review-job contentbox1 page-text stc">
              <h3>About Us</h3>
              <p>
                Far much that one rank beheld bluebird after outside ignobly
                allegedly more when oh arrogantly vehement irresistibly fussy
                penguin insect additionally wow absolutely crud meretriciously
                hastily dalmatian Link glowered inset one echidna cassowary.
              </p>
              <p>
                Repeatedly dreamed alas opossum but dramatically despite
                expeditiously that jeepers loosely yikes that as or eel
                underneath kept and slept compactly far purred sure abidingly up
                above fitting to strident wiped set waywardly far the and
                pangolin horse approving paid chuckled cassowary oh above Link
                much opposite far much hypnotically more therefore wasp less
                that hey apart well like while superbly orca and far hence one.
              </p>
              <Link to="#" className="tf-button style-1">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
