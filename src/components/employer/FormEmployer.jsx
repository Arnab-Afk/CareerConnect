import React from "react";
import SelectLocation from "../dropdown";
import Dropdown from "react-dropdown";
const options1 = [
  { value: "op1", label: "Job Title" },
  { value: "op2", label: "Design & Creative" },
  { value: "op3", label: "Design" },
  { value: "op4", label: "Ux/Ui" },
];

const options2 = [
  { value: "op1", label: "Any Distance" },
  { value: "op2", label: "Any Distance 1" },
  { value: "op3", label: "Any Distance 2" },
];
const options3 = [
  { value: "op1", label: "Company Size" },
  { value: "op2", label: "Company Size 1" },
  { value: "op3", label: "Company Size 2" },
];

function FormEmployer() {
  return (
    <section className="top-map-jobs">
      <div className="tf-container">
        <div className="job-search-form st1 employers-form">
          <form>
            <div className="row-group-search inner-form">
              <div className="form-group-1 form-style-1">
                <input
                  type="text"
                  className="input-filter-search"
                  placeholder="key words"
                />
                <span className="icon-search search-job"></span>
              </div>
              <div className="form-group-2 form-style-1">
                <span className="icon-map-pin"></span>
                <SelectLocation />
              </div>
              <div className="form-group-3 form-style-1">
                <Dropdown
                  options={options1}
                  className="react-dropdown select-location"
                  value={options1[0]}
                />
              </div>
              <div className="form-group-4 form-style-1">
                <Dropdown
                  options={options2}
                  className="react-dropdown select-location"
                  value={options2[0]}
                />
              </div>
              <div className="form-group-5 form-style-1">
                <Dropdown
                  options={options3}
                  className="react-dropdown select-location"
                  value={options3[0]}
                />
              </div>
              <div className="form-group-6">
                <button className="btn btn-find">Find Employers</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormEmployer;
