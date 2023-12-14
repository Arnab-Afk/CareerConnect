import React from "react";
import PropTypes from "prop-types";
import SelectLocation from "../dropdown";

Banner07.propTypes = {};

function Banner07(props) {
  return (
    <section className="tf-slider sl5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="heading text-center">
                <h2 className="text-white">Find the job that fits your life</h2>
                <p className="text-white">
                  Resume-Library is a true performance-based job board. Enjoy
                  custom hiring products and access to up to 10,000 new resume
                  registrations daily, with no subscriptions or user licences.
                </p>
              </div>
              <div className="icon ic1 ani3">
                <img
                  src={require("../../assets/images/review/icon6.png")}
                  alt="images"
                />
              </div>
              <div className="icon ic2 ani6">
                <img
                  src={require("../../assets/images/review/icon5.png")}
                  alt="images"
                />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner07;
