import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import SortBuy from "../dropdown/SortBuy";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

JobSec5.propTypes = {};

function JobSec5(props) {
  const { data } = props;
  return (
    <section>
      <div className="tf-container ctn-full wrap-sidebar-full pl1">
        <div className="row">
          <div className="col-lg-3">
            <div className="content-left style2 po-sticky">
              <div className="inner st-filter">
                <Sidebar />
              </div>
            </div>
          </div>
          <Tabs className="col-lg-9 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <TabList className="inner menu-tab">
                    <Tab className="btn-display">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                          fill="#A0A0A0"
                        />
                        <path
                          d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                          fill="#A0A0A0"
                        />
                        <path
                          d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                          fill="#A0A0A0"
                        />
                      </svg>
                    </Tab>
                    <Tab className="btn-display current active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                          fill="white"
                        />
                        <path
                          d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                          fill="white"
                        />
                        <path
                          d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                          fill="white"
                        />
                      </svg>
                    </Tab>
                  </TabList>
                  <p className="nofi-job">
                    <span>1249</span> jobs recommended for you
                  </p>
                </div>
                  <SortBuy />
              </div>
            </div>
            <div className="content-tab style-scroll">
              <TabPanel className="inner">
                <div className="group-col-2">
                  {data.map((idx) => (
                    <div className="features-job cl2">
                      <div className="job-archive-header">
                        <div className="inner-box">
                          <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div>
                          <div className="box-content">
                            <h4>
                              <Link to="/Jobsingle_v1">{idx.cate}</Link>
                            </h4>
                            <h3>
                              <Link to="/Jobsingle_v1"> {idx.title} </Link>
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul>
                              <li>
                                <span className="icon-map-pin"></span>
                                {idx.map}
                              </li>
                              <li>
                                <span className="icon-calendar"></span>
                                {idx.time}
                              </li>
                            </ul>
                            <span className="icon-heart"></span>
                          </div>
                        </div>
                      </div>
                      <div className="job-archive-footer">
                        <div className="job-footer-left">
                          <ul className="job-tag">
                            <li>
                              <Link to="#">{idx.jobs1}</Link>
                            </li>
                            <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li>
                          </ul>
                          <div className="star">
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                          </div>
                        </div>
                        <div className="job-footer-right">
                          <div className="price">
                            <span className="icon-dolar1"></span>
                            <p>
                              {idx.price}
                              <span className="year">/year</span>
                            </p>
                          </div>
                          <p className="days">{idx.apply}</p>
                        </div>
                      </div>
                      <Link
                        to="/Jobsingle_v1"
                        className="jobtex-link-item"
                        tabIndex="0"
                      ></Link>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="inner">
                <div className="group-col-3">
                  {data.map((idx) => (
                    <div className="features-job cl3">
                      <div className="job-archive-header">
                        <div className="inner-box">
                          <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div>
                          <div className="box-content">
                            <h4>
                              <Link to="/Jobsingle_v1">{idx.cate}</Link>
                            </h4>
                            <h3>
                              <Link to="/Jobsingle_v1"> {idx.title} </Link>
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul>
                              <li>
                                <span className="icon-map-pin"></span>
                                {idx.map}
                              </li>
                              <li>
                                <span className="icon-calendar"></span>
                                {idx.time}
                              </li>
                            </ul>
                            <span className="icon-heart"></span>
                          </div>
                        </div>
                      </div>
                      <div className="job-archive-footer">
                        <div className="job-footer-left">
                          <ul className="job-tag">
                            <li>
                              <Link to="#">{idx.jobs1}</Link>
                            </li>
                            <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li>
                          </ul>
                          <div className="star">
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                          </div>
                        </div>
                        <div className="job-footer-right">
                          <div className="price">
                            <span className="icon-dolar1"></span>
                            <p>
                              {idx.price}
                              <span className="year">/year</span>
                            </p>
                          </div>
                          <p className="days">{idx.apply}</p>
                        </div>
                      </div>
                      <Link
                        to="/Jobsingle_v1"
                        className="jobtex-link-item"
                        tabIndex="0"
                      ></Link>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </div>
            <ul className="pagination-job absolute">
              <li>
                <Link to="#">
                  <i className="icon-keyboard_arrow_left"></i>
                </Link>
              </li>
              <li>
                <Link to="#">1</Link>
              </li>
              <li className="current">
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon-keyboard_arrow_right"></i>
                </Link>
              </li>
            </ul>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default JobSec5;
