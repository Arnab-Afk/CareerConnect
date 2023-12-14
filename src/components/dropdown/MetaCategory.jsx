import React from "react";
import Dropdown from "react-dropdown";

const cate = [
  { value: "op1", label: "Remote" },
  { value: "op2", label: "All Job Types" },
  { value: "op3", label: "All Salary" },
  { value: "op4", label: "Any Distance" },
  { value: "op5", label: "All Job Title" },
  { value: "op6", label: "Posted Anytime" },
  { value: "op7", label: "All Seniority Levels" },
  { value: "op8", label: "Company" },
];

function MetaCategory() {
  return (
    <section className="form-sticky form-meta2 is-fixed1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="meta-category-job fixed-content">
              <ul className="category-filter">
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[0]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[1]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[2]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[3]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[4]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[5]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[6]}
                  />
                </li>
                <li>
                  <Dropdown
                    options={cate}
                    className="react-dropdown meta-category-option"
                    value={cate[7]}
                  />
                </li>
              </ul>
              <div className="meta-nofication">
                <div className="nofi">
                  <span>1249</span> jobs recommended for you
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetaCategory;
