import React from "react";
import SelectLocation from "../dropdown";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Job Title" },
  { value: "s2", label: "Ux/Ui" },
  { value: "s3  ", label: "Designer" },
];
const select2 = [
  { value: "s1", label: "Age" },
  { value: "s2", label: "20" },
  { value: "s3  ", label: "30" },
];
const select3 = [
  { value: "s1", label: "Salary Estimate" },
  { value: "s2", label: "Salary Estimate 1" },
  { value: "s3  ", label: "Salary Estimate 2" },
];
const select4 = [
  { value: "s1", label: "Experience" },
  { value: "s2", label: "Experience 1" },
  { value: "s3", label: "Experience 2" },
];

function FormCandidate(props) {
  return (
    <section className="top-map-jobs2 candi">
      <div className="tf-container">
        <div className="candidate-form job-search-form inner-form-map style2">
          <form>
            <div className="row-group-search">
              <div className="form-group">
                <input
                  type="text"
                  className="input-filter-search"
                  placeholder="Keywords"
                />
                <span className="icon-search search-job icon"></span>
              </div>
              <div className="form-group location">
                <span className="icon-map-pin icon"></span>
                <SelectLocation />
              </div>
              <div className="form-group st">
                <Dropdown
                  options={select1}
                  className="react-dropdown select"
                  value={select1[0]}
                />
              </div>
              <div className="form-group st">
                <Dropdown
                  options={select2}
                  className="react-dropdown select"
                  value={select2[0]}
                />
              </div>
              <div className="form-group st">
                <Dropdown
                  options={select3}
                  className="react-dropdown select"
                  value={select3[0]}
                />
              </div>
              <div className="form-group st">
                <Dropdown
                  options={select4}
                  className="react-dropdown select"
                  value={select4[0]}
                />
              </div>
              <div className="form-group-btn">
                <button className="btn btn-find">Find Candidates</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormCandidate;
