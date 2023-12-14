import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button2 from "../button/Button2";

JobStyle4.propTypes = {};

function JobStyle4(props) {
  const { data } = props;
  const { className } = props;

  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title">
            <h1>Featured Jobs</h1>
            <p>Find the right career opportunity for you</p>
          </div>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            {data.slice(0, 6).map((idx) => (
              <div key={idx.id} className="features-job style-3">
                <div className="inner-box">
                  <div className="company">
                    <div className="logo-company">
                      <img src={idx.img} alt="Jobtex" />
                    </div>
                    <div className="box-content">
                      <h4>
                        <Link to="/Jobsingle_v1">{idx.cate}</Link>
                      </h4>
                      <h3>
                        <Link to="/Jobsingle_v1">{idx.title}</Link>
                        &nbsp;
                        <span className="icon-bolt"></span>
                      </h3>
                      <div className="star">
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                      </div>
                    </div>
                  </div>
                  <ul className="info">
                    <li>
                      <span className="icon-map-pin"></span>
                      {idx.map}
                    </li>
                    <li>{idx.time}</li>
                  </ul>
                  <div className="category">
                    <ul className="job-tag">
                      <li>
                        <Link to="#"> Full-time</Link>
                      </li>
                      <li>
                        <Link to="#"> Hybrid</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="salary">
                    <span className="icon-dolar1"></span>
                    <p>
                      {idx.price} <span className="year">/year</span>
                    </p>
                  </div>
                  <div className="group-btn">
                    <span className="icon-heart"></span>
                    <button>Apply</button>
                  </div>
                </div>
                <Link
                  to="/Jobsingle_v1"
                  className="jobtex-link-item"
                  tabIndex="0"
                ></Link>
              </div>
            ))}

            <div className="col-md-12">
              <div
                className="wprt-spacer clearfix"
                data-desktop="32"
                data-mobi="40"
                data-smobi="30"
              ></div>
              <div className="wrap-button">
                <Button2 title="See more Jobs" link="/joblist_v1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobStyle4;
