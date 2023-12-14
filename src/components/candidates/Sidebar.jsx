import React from "react";
import PropTypes from "prop-types";
import RangeOne from "../range-slider";
import SelectLocation from "../dropdown";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Design & Creative " },
  { value: "s2", label: "Design" },
  { value: "s3  ", label: "Ux/Ui" },
];
const select2 = [
  { value: "s1", label: "Male" },
  { value: "s2", label: "Female" },
];
const select3 = [
  { value: "s1", label: "<1 year experience" },
  { value: "s2", label: ">2 year experience" },
];
const select4 = [
  { value: "s1", label: "Certificate" },
  { value: "s2", label: ">Certificate 2" },
];
const select5 = [
  { value: "s1", label: "Marketing" },
  { value: "s2", label: "Developer" },
];
const select6 = [
  { value: "s1", label: "Weekly" },
  { value: "s2", label: "Weekly 2" },
];

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="content-left style2 po-sticky">
      <div className="inner st-filter">
        <div className="widget-filter no-scroll mb1">
          <form>
            <div className="group-form">
              <label className="title">Search by Keywords</label>
              <div className="group-input search-ip">
                <button>
                  <i className="icon-search"></i>
                </button>
                <input type="text" placeholder="Keywork" required />
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

            <div className="group-form st2">
              <RangeOne miles="Years old" title="Age:" />
            </div>
            <div className="group-form">
              <label className="title">Salary Estimate</label>
              <div className="group-input">
                <Dropdown
                  options={select2}
                  className="react-dropdown select2"
                  value={select2[0]}
                />
              </div>
            </div>
            <div className="group-form">
              <label className="title">Experrience</label>
              <div className="group-input">
                <Dropdown
                  options={select3}
                  className="react-dropdown select2"
                  value={select3[0]}
                />
              </div>
            </div>
            <div className="group-form">
              <label className="title">Qualification </label>
              <div className="group-input">
                <Dropdown
                  options={select4}
                  className="react-dropdown select2"
                  value={select4[0]}
                />
              </div>
            </div>
            <button type="submit">Find Candidates</button>
          </form>
        </div>
        <div className="widget-filter no-scroll">
          <form>
            <div className="group-form">
              <label className="title">Title </label>
              <div className="group-input">
                <Dropdown
                  options={select5}
                  className="react-dropdown select2"
                  value={select5[0]}
                />
              </div>
            </div>
            <div className="group-form">
              <label className="title">Email Frequency</label>
              <div className="group-input">
                <Dropdown
                  options={select6}
                  className="react-dropdown select2"
                  value={select6[0]}
                />
              </div>
            </div>
            <button type="submit">save job Alert</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
