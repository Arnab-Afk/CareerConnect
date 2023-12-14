import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import SelectLocation from "../dropdown";

Banner09.propTypes = {};

function Banner09(props) {
  return (
    <section className="tf-slider sl7 over-flow-hidden">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="content wow fadeInUp">
              <div className="heading">
                <h2>Find the job that fits your life</h2>
                <p>
                  Resume-Library is a true performance-based job board. Enjoy
                  custom hiring products and access to up to 10,000 new resume
                  registrations daily, with no subscriptions or user licences.
                </p>
              </div>
              <div className="form-sl">
                <form action="/job-list-sidebar">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-search search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Job title, key words or company"
                      />
                    </div>
                    <div className="form-group-2">
                      <span className="icon-map-pin"></span>
                      <SelectLocation />
                    </div>
                    <div className="form-group-4">
                      <button type="submit" className="btn btn-find">
                        Find Jobs
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <ul className="list-tag">
                <li className="heading">Popular Searches:</li>
                <li>
                  <Link to="#">Designer</Link>
                </li>
                <li>
                  <Link to="#">Developer</Link>
                </li>
                <li>
                  <Link to="#">Tester</Link>
                </li>
                <li>
                  <Link to="#">Writing...</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wd-review-job widget-counter sl7">
              <div className="thumb3">
                <div className="trader-box sl7">
                  <div className="content">
                    <h3 className="number wrap-counter">
                      <CountUp
                        className="number"
                        end={25}
                        suffix="M+"
                        duration={3}
                      />
                    </h3>
                    <div className="des">Jobs Available</div>
                  </div>
                  <div className="shape ani7">
                    <img
                      src={require("../../assets/images/review/shape6.png")}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="group-user">
                  <div className="user-box">
                    <img
                      src={require("../../assets/images/review/bran4.jpg")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/bran1.jpg")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/bran2.jpg")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/bran3.jpg")}
                      alt="images"
                    />
                  </div>
                  <div className="content">
                    <h6 className="wrap-counter text-pri">
                      <span>+</span>
                      <span
                        className="counter-number"
                        data-speed="2000"
                        data-to="4800"
                      >
                        4800
                      </span>
                    </h6>
                    <p>Employers get benefits </p>
                  </div>
                </div>
                <div className="group-thumb">
                  <img
                    src={require("../../assets/images/review/thumb7.png")}
                    alt="images"
                  />
                  <div className="shape-thumb ani8">
                    <img
                      src={require("../../assets/images/review/shape5.png")}
                      alt="images"
                    />
                  </div>
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
                <div className="icon3 ani5">
                  <img
                    src={require("../../assets/images/review/icon3.png")}
                    alt="images"
                  />
                </div>
                <div className="icon4 ani6">
                  <img
                    src={require("../../assets/images/review/icon2.png")}
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner09;
