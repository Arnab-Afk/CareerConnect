import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";
import MapSection from "../map";
import dataMap from "../../assets/fakeData/dataMap";

JobSec10.propTypes = {};

function JobSec10(props) {
  const { data } = props;
  return (
    <section>
      <div className="tf-container ctn-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-half-map style2">
              <div className="content-left style2">
                <div className="inner st-filter">
                  <Sidebar />
                </div>
                <div className="inner st-job">
                  <div className="wd-findjob-filer">
                    <SortBuy />
                  </div>
                  <p className="nofi-job">
                    <span>1249</span> employers recommended for you
                  </p>
                  <div className="content-job style-scroll">
                    {data.slice(0, 5).map((idx) => (
                      <div key={idx.id} className="features-job style-2">
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
                                <Link to="#">Full-time</Link>
                              </li>
                              <li>
                                <Link to="#">Remote</Link>
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
                </div>
              </div>
              <div className="content-right">
                <MapSection className={"row-height"} markers={dataMap} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobSec10;
