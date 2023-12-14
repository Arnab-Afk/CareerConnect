import React from "react";
import PropTypes from "prop-types";
import WidgetCounter from "../jobs/WidgetCounter";
import { Link } from "react-router-dom";
import SelectLocation from "../dropdown";

Banner05.propTypes = {};

function Banner05(props) {
  return (
    <section className="tf-slider sl4 over-flow-hidden">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
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
                  <div className="row-group-search">
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
              <ul className="list-category">
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
          <div className="col-lg-4">
            <WidgetCounter className="tf-sl4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner05;
