import React from "react";
import PropTypes from "prop-types";

ReviewJob10.propTypes = {};

function ReviewJob10({ className }) {
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title">
            <h1>Get the job that's right for you</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="wd-review-job widget-counter">
              <div className="thumb3">
                <div className="group-user">
                  <div className="user-box">
                    <img
                      src={require("../../assets/images/review/user11.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user22.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user33.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user44.png")}
                      alt="images"
                    />
                  </div>
                  <div className="content">
                    <h6 className="wrap-counter">
                      <span
                        className="counter-number"
                        data-speed="2000"
                        data-to="4800"
                      ></span>
                      <span>4800+</span>
                    </h6>
                    <p>Candidates happy</p>
                  </div>
                </div>
                <img
                  src={require("../../assets/images/review/thumb3.png")}
                  alt="images"
                />
                <div className="shape ani7">
                  <img
                    src={require("../../assets/images/review/shape2.png")}
                    alt="images"
                  />
                </div>
                <div className="icon1 ani7">
                  <img
                    src={require("../../assets/images/review/icon11.png")}
                    alt="images"
                  />
                </div>
                <div className="icon2 ani4">
                  <img
                    src={require("../../assets/images/review/icon22.png")}
                    alt="images"
                  />
                </div>
                <div className="icon3 ani6">
                  <img
                    src={require("../../assets/images/review/icon33.png")}
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="wd-review-job pt10 wow fadeInUp">
              <ul className="list-review2">
                <li className="active">
                  <h6>Discover New Opportunities</h6>
                  <p>
                    Structured digital interviews increase the predictive
                    validity of your hires by 65%.
                  </p>
                </li>
                <li>
                  <h6>Get Invited to Apply to jobs</h6>
                  <p>
                    Maverick pitch your profile to employers for jobs you’ll
                    love -so you stand out-and these companies can reach out to
                    you directly.
                  </p>
                </li>
                <li>
                  <h6>Save time with 1-click apply</h6>
                  <p>
                    No more filling out lengthy applications! Once Maverick has
                    your key info, you can apply to most jobs with one click.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewJob10;
