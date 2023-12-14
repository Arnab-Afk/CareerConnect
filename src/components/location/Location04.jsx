import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Location04.propTypes = {};

function Location04(props) {
  const { data } = props;
  const { className } = props;
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>Jobs by Location</h1>
                <p>Find your favourite jobs and get the benefits of yourself</p>
              </div>
              <button className="tf-button">
                All Location
                <span className="icon-arrow-right2"></span>
              </button>
            </div>
          </div>

          {data.slice(0, 4).map((idx) => {
            return (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="wd-job-location style-1">
                  <div key={idx.id} className="features">
                    <img src={idx.img} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">{idx.title}</Link>
                    </h6>
                    <Link to="/jobsingle_v1" className="category">
                      {idx.unit}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Location04;
