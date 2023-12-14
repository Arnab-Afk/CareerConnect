import React, { useState } from "react";
import PropTypes from "prop-types";
import Button2 from "../button/Button2";
import { Link } from "react-router-dom";

Jobs.propTypes = {};

function Jobs(props) {
  const { data } = props;
  const { className } = props;

  const [dataBlock] = useState({
    title: "Featured Jobs",
    text: "Find the job that’s perfect for you. about 800+ new jobs everyday",
  });
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title ">
            <h1>{dataBlock.title}</h1>
            <p>{dataBlock.text}</p>
          </div>
        </div>
        <div className="row wow fadeInUp">
          {data.slice(0, 6).map((idx) => (
            <div key={idx.id} className="col-lg-6 ">
              <div className="features-job">
                <div className="job-archive-header">
                  <div className="inner-box">
                    <div className="logo-company">
                      <img src={idx.img} alt="jobtex" />
                    </div>
                    <div className="box-content">
                      <h4>
                        <Link to="/jobsingle_v1">{idx.cate}</Link>
                      </h4>
                      <h3>
                        <Link to="/jobsingle_v1"> {idx.title} </Link>
                        <span className="icon-bolt"></span>
                      </h3>
                      <ul>
                        <li>
                          <span className="icon-map-pin"></span>
                          {idx.map}
                        </li>
                        <li>
                          <span className="icon-calendar"></span>
                          {idx.time}
                        </li>
                      </ul>
                      <span className="icon-heart"></span>
                    </div>
                  </div>
                </div>
                <div className="job-archive-footer">
                  <div className="job-footer-left">
                    <ul className="job-tag">
                      <li>
                        <Link to="#">{idx.jobs1}</Link>
                      </li>
                      <li>
                        <Link to="#">{idx.jobs2}</Link>
                      </li>
                    </ul>
                    <div className="star">
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                    </div>
                  </div>
                  <div className="job-footer-right">
                    <div className="price">
                      <span className="icon-dolar1"></span>
                      <p>
                        {idx.price}
                        <span className="year">/year</span>
                      </p>
                    </div>
                    <p className="days">{idx.apply}</p>
                  </div>
                </div>
                <Link
                  to="/jobsingle_v1"
                  className="jobtex-link-item"
                  tabIndex="0"
                ></Link>
              </div>
            </div>
          ))}

          <div className="col-md-12">
            <div className="wrap-button">
              <Button2 title="See more Jobs" link="/joblist_v1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
