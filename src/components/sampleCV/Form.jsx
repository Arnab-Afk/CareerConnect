import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Language" },
  { value: "s2", label: "English" },
  { value: "s3", label: "Spain" },
  { value: "s4", label: "Japan" },
];
const select2 = [
  { value: "s1", label: "Job" },
  { value: "s2", label: "Design" },
  { value: "s3", label: "Seo" },
  { value: "s4", label: "Dev" },
];
const select3 = [
  { value: "s1", label: "Design" },
  { value: "s2", label: "Design 1" },
  { value: "s3  ", label: "Design 2" },
];
const select4 = [
  { value: "s1", label: "Popularity" },
  { value: "s2", label: "Popularity 1" },
  { value: "s3", label: "Popularity 2" },
];

Form.propTypes = {};

function Form(props) {
  return (
    <section className="form-sticky stc2 ">
      <div className="tf-container">
        <div className="job-search-form inner-form-map style2 cv">
          <form>
            <div className="row-group-search st2">
              <div className="form-group">
                <Dropdown
                  options={select1}
                  className="react-dropdown select"
                  value={select1[0]}
                />
              </div>
              <div className="form-group">
                <Dropdown
                  options={select2}
                  className="react-dropdown select"
                  value={select2[0]}
                />
              </div>
              <div className="form-group">
                <Dropdown
                  options={select3}
                  className="react-dropdown select"
                  value={select3[0]}
                />
              </div>
              <div className="form-group">
                <Dropdown
                  options={select4}
                  className="react-dropdown select"
                  value={select4[0]}
                />
              </div>
              <div className="form-group-btn">
                <button className="btn btn-find">Find Sample CV</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
