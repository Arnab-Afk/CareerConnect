import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectLocation from "../dropdown";

Banner08.propTypes = {};

function Banner08(props) {
  return (
    <section className="tf-slider sl6 parallax">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content wow fadeInUp">
              <div className="heading text-center">
                <h2 className="text-white">Find the job that fits your life</h2>
                <p className="text-white">
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
              <ul className="list-category text-white">
                <li>
                  <Link to="#">Designer</Link>
                </li>
                <li className="current">
                  <Link to="#">Developer</Link>
                </li>
                <li>
                  <Link to="#">Tester</Link>
                </li>
                <li>
                  <Link to="#">Writing</Link>
                </li>
                <li>
                  <Link to="#">Project Manager</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Banner08;
