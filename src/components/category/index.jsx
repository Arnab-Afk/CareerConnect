import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import { Link } from "react-router-dom";

Category.propTypes = {};

function Category(props) {
  const { data } = props;
  const { className } = props;

  const [dataBlock] = useState({
    title: "Browse by category",
    text: "Recruitment Made Easy in 100 seconds",
  });
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>{dataBlock.title}</h1>
                <p>{dataBlock.text}</p>
              </div>
              <Button title="All Categories" link="/joblist_v1" />
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="group-category-job wow fadeInUp"
              data-wow-delay=".2s"
            >
              {data.map((idx) => (
                <div key={idx.id} className={`job-category-box ${idx.active}`}>
                  <div className="job-category-header">
                    <h1>
                      <Link to="/jobsingle_v1">{idx.title}</Link>
                    </h1>
                    <p>{idx.unit}</p>
                  </div>
                  <Link to="/jobsingle_v1" className="btn-category-job">
                    Explore Jobs{" "}
                    <span className="icon-keyboard_arrow_right"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
