import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button2 from "../button/Button2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Job05.propTypes = {};

function Job05(props) {
  const { data } = props;
  return (
    <section className="jobs-section">
      <Tabs className="wrap-testimonials style-1 over-flow-hidden tf-tab">
        <div className="tf-container">
          <div className="tf-title style-3 margin">
            <div className="group-title">
              <h1>Featured Jobs</h1>
              <p>Find the right career opportunity for you</p>
            </div>
            <TabList className="menu-tab">
              <Tab className="user-tag">UI UX Design</Tab>
              <Tab className="user-tag">Project Manager</Tab>
              <Tab className="user-tag">Sales & Marketing</Tab>
              <Tab className="user-tag">Accounting</Tab>
              <Tab className="user-tag">Other</Tab>
            </TabList>
          </div>
          <div className="content-tab">
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {data.slice(0, 6).map((idx) => (
                <div key={idx.id} className="col-lg-6 ">
                  <div className="features-job">
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
                              &nbsp;
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
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
                </div>
              ))}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {data.slice(0, 6).map((idx) => (
                <div key={idx.id} className="col-lg-6 ">
                  <div className="features-job">
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
                              &nbsp;
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
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
                </div>
              ))}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {data.slice(0, 6).map((idx) => (
                <div key={idx.id} className="col-lg-6 ">
                  <div className="features-job">
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
                              &nbsp;
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
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
                </div>
              ))}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {data.slice(0, 6).map((idx) => (
                <div key={idx.id} className="col-lg-6 ">
                  <div className="features-job">
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
                              &nbsp;
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
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
                </div>
              ))}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {data.slice(0, 6).map((idx) => (
                <div key={idx.id} className="col-lg-6 ">
                  <div className="features-job">
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
                              &nbsp;
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
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
                </div>
              ))}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default Job05;
