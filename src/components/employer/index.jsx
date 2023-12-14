import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import { Link } from "react-router-dom";

Employer.propTypes = {};

function Employer(props) {
  const [dataBlock] = useState({
    title: "Top Employers",
    text: "Showing companies based on reviews and recent job openings",
  });

  const { data } = props;
  const { className } = props;

  return (
    <section className={className}>
      <div className="tf-container">
        <div className="wd-employer">
          <div className="tf-title">
            <div className="group-title">
              <h1>{dataBlock.title}</h1>
              <p>{dataBlock.text}</p>
            </div>
            <Button title="All Employers" link="/employers_v1" />
          </div>
          <div className="row wow fadeInUp">
            {data.map((idx) => (
              <div key={idx.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="employer-block">
                  <div className="inner-box">
                    <div className="logo-company">
                      <img src={idx.img} alt="Jobtex" />
                    </div>
                    <div className="box-content">
                      <div className="star">
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                      </div>
                      <h3>
                        <Link to="/employers_v1">{idx.title}</Link>
                        &nbsp;
                        <span className="icon-bolt"></span>
                      </h3>
                      <p className="info">
                        <span className="icon-map-pin"></span>
                        &nbsp;
                        {idx.map}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/employersingle_v1"
                    className="jobtex-link-item"
                    tabIndex="0"
                  ></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Employer;
