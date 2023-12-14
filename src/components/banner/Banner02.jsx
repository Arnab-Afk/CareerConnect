import React from "react";
import PropTypes from "prop-types";
import SelectLocation from "../dropdown";



Banner02.propTypes = {};

function Banner02(props) {
  return (
    <section className="tf-slider sl9 ">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="form-sl stc">
                <form action="/job-list-sidebar">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1 ">
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

export default Banner02;
