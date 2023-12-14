import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectLocation from "../dropdown";

FormContent.propTypes = {};

function FormContent(props) {
  return (
    <div className="content">
      <div className="heading">
        <h2 className="text-white">Find the job that fits your life</h2>
        <p className="text-white">
          Resume-Library is a true performance-based job board. Enjoy custom
          hiring products and access to up to 10,000 new resume registrations
          daily, with no subscriptions or user licences.
        </p>
      </div>
      <div className="form-sl">
        <form action="/job-list-sidebar">
          <div className="row-group-search home1">
            <div className="form-group-1">
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
          <Link to="/aboutus">Designer</Link>
        </li>
        <li className="current">
          <Link to="/aboutus">Developer</Link>
        </li>
        <li>
          <Link to="/aboutus">Tester</Link>
        </li>
        <li>
          <Link to="/aboutus">Writing</Link>
        </li>
        <li>
          <Link to="/aboutus">Project Manager</Link>
        </li>
      </ul>
    </div>
  );
}

export default FormContent;
