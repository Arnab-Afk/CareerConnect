import React from "react";
import PropTypes from "prop-types";
import RangeOne from "../range-slider";
import RangeTwo from "../range-slider/RangleTwo";
import SelectLocation from "../dropdown";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Design & Creative " },
  { value: "s2", label: "Design" },
  { value: "s3  ", label: "Ux/Ui" },
];
const select2 = [
  { value: "s1", label: "On-site" },
  { value: "s2", label: "Remote" },
  { value: "s3  ", label: "Freelancer" },
];
const select3 = [
  { value: "s1", label: "All Job Types" },
  { value: "s2", label: "SoftWere" },
  { value: "s3  ", label: "Website" },
];
const select4 = [
  { value: "s1", label: "Posted Anytime " },
  { value: "s3  ", label: "Website" },
];
const select5 = [
  { value: "s1", label: "All Seniority Levels " },
  { value: "s2", label: "Website" },
];
const select6 = [
  { value: "s1", label: "Company" },
  { value: "s2", label: "Website" },
];

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="widget-filter st2  style-scroll po-sticky">
      <form>
        <div className="group-form">
          <label className="title">Search Company</label>
          <div className="group-input search-ip">
            <button>
              <i className="icon-search"></i>
            </button>
            <input
              type="text"
              placeholder="Job title, key words or company"
              required
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Location</label>
          <div className="group-input has-icon">
            <i className="icon-map-pin"></i>
            <SelectLocation />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Job Title</label>
          <div className="group-input">
            <Dropdown
              options={select1}
              className="react-dropdown select2"
              value={select1[0]}
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">On-site/Remote</label>
          <div className="group-input">
            <Dropdown
              options={select2}
              className="react-dropdown select2"
              value={select2[0]}
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Job Types</label>
          <div className="group-input">
            <Dropdown
              options={select3}
              className="react-dropdown select2"
              value={select3[0]}
            />
          </div>
        </div>
        <RangeTwo title="Salary:" />
        <RangeOne miles="Miles" title="Radius:" />

        <div className="group-form">
          <label className="title">Posted Anytime</label>
          <div className="group-input">
            <Dropdown
              options={select4}
              className="react-dropdown select2"
              value={select4[0]}
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">All Seniority Levels</label>
          <div className="group-input">
            <Dropdown
              options={select5}
              className="react-dropdown select2"
              value={select5[0]}
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Company</label>
          <div className="group-input">
            <Dropdown
              options={select6}
              className="react-dropdown select2"
              value={select6[0]}
            />
          </div>
        </div>
        <button type="submit">Find Jobs</button>
      </form>
    </div>
  );
}

export default Sidebar;
