import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectLocation from "../dropdown";

FormSearch.propTypes = {};

function FormSearch(props) {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="form-sticky stc1">
      <div className="tf-container">
        <div className="job-search-form inner-form-map st1">
          <form action="/job-list-sidebar">
            <div className="row-group-search">
              <div className="form-group-1">
                <input
                  type="text"
                  className="input-filter-search"
                  placeholder="Job title, key words or company"
                />
                <span className="icon-search search-job"></span>
              </div>
              <div className="form-group-2">
                <span className="icon-map-pin"></span>
                <SelectLocation />
              </div>
              <div className="form-group-3">
                <span className="icon-filter"></span>
                <div
                  className={`filter-radio ${isOpen ? "open" : ""}`}
                  onClick={handleClick}
                >
                  <p>Filter More</p>
                </div>
              </div>
              <div
                className={`wd-filter-radio ${
                  isOpen ? "modal-menu--open" : ""
                }`}
              >
                <div className="content">
                  <div className="fl-cl lc1">
                    <h6>On-site/Remote</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-1" />
                          <label htmlFor="checkbox-1"></label>
                        </div>
                        <label>On-site (1,675)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-2" />
                          <label htmlFor="checkbox-2"></label>
                        </div>
                        <label>Remote (5,675)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-3" />
                          <label htmlFor="checkbox-3"></label>
                        </div>
                        <label>Hybrid (6,675)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc2">
                    <h6>All Job Types</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-4" />
                          <label htmlFor="checkbox-4"></label>
                        </div>
                        <label>All Job Types (1,675)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-5" />
                          <label htmlFor="checkbox-5"></label>
                        </div>
                        <label>Full-time (623)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-6" />
                          <label htmlFor="checkbox-6"></label>
                        </div>
                        <label>Part-time (45)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-7" />
                          <label htmlFor="checkbox-7"></label>
                        </div>
                        <label>Contract (65)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-8" />
                          <label htmlFor="checkbox-8"></label>
                        </div>
                        <label>Internship (9)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-9" />
                          <label htmlFor="checkbox-9"></label>
                        </div>
                        <label>Temporary (4)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc3">
                    <h6>All Salary</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-10" />
                          <label htmlFor="checkbox-10"></label>
                        </div>
                        <label>All Salaries (6,277)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-11" />
                          <label htmlFor="checkbox-11"></label>
                        </div>
                        <label>$50,000+ (2,277)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-12" />
                          <label htmlFor="checkbox-12"></label>
                        </div>
                        <label>$70,000+ (1,627)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-13" />
                          <label htmlFor="checkbox-13"></label>
                        </div>
                        <label>$90,000+ (7,627)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-14" />
                          <label htmlFor="checkbox-14"></label>
                        </div>
                        <label>$110,000+ (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-15" />
                          <label htmlFor="checkbox-15"></label>
                        </div>
                        <label>$130,000+ (527)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc4">
                    <h6>Any Distance</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-16" />
                          <label htmlFor="checkbox-16"></label>
                        </div>
                        <label>Any Distance (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-17" />
                          <label htmlFor="checkbox-17"></label>
                        </div>
                        <label>within 5 miles (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" />
                          <label htmlFor="checkbox-18"></label>
                        </div>
                        <label>within 10 miles (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-19" />
                          <label htmlFor="checkbox-19"></label>
                        </div>
                        <label>within 25 miles (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-20" />
                          <label htmlFor="checkbox-20"></label>
                        </div>
                        <label>within 50 miles (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-21" />
                          <label htmlFor="checkbox-21"></label>
                        </div>
                        <label>within 100 miles (227)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc5">
                    <h6>Posted Anytime</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-22" />
                          <label htmlFor="checkbox-22"></label>
                        </div>
                        <label>Posted Anytime</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-23" />
                          <label htmlFor="checkbox-23"></label>
                        </div>
                        <label>Last 1 days (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-24" />
                          <label htmlFor="checkbox-24"></label>
                        </div>
                        <label>Last 3 days (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-25" />
                          <label htmlFor="checkbox-25"></label>
                        </div>
                        <label>Last 7 days (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-26" />
                          <label htmlFor="checkbox-26"></label>
                        </div>
                        <label>Last 14 days (227)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc6">
                    <h6>All Seniority Levels</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-27" />
                          <label htmlFor="checkbox-27"></label>
                        </div>
                        <label>All Seniority Levels</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-28" />
                          <label htmlFor="checkbox-28"></label>
                        </div>
                        <label>Entry Level (24)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-29" />
                          <label htmlFor="checkbox-29"></label>
                        </div>
                        <label>Mid Senior Level (34)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-30" />
                          <label htmlFor="checkbox-30"></label>
                        </div>
                        <label>Executive (12)</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group-4">
                <button className="btn btn-find">Find Jobs</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSearch;
