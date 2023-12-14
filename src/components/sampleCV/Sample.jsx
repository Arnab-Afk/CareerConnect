import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Sample.propTypes = {};

function Sample(props) {
  const { data } = props;
  return (
    <section className="candidate-cv-section">
      <div className="tf-container">
        <div className="row">
          <Tabs className="col-lg-12 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <TabList className="menu-tab cv-stc">
                    <Tab className="ct-tab"> Popularity CV</Tab>
                    <Tab className="ct-tab">Personalized CV</Tab>
                  </TabList>
                </div>
                <SortBuy />
              </div>
            </div>
            <div className="content-tab">
              <TabPanel className="inner animation-tab">
                <div className="group-col-3">
                  {data.map((idx) => (
                    <div key={idx.id} className="wd-cv-template cl3">
                      <div className="features">
                        <Link to="#">
                          <img src={idx.img} alt="images" />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="top-content">
                          <ul className="list-category">
                            <li>
                              <Link to="#">Create</Link>
                            </li>
                            <li>
                              <Link to="#">Professionally</Link>
                            </li>
                            <li>
                              <Link to="#">Minimal</Link>
                            </li>
                          </ul>
                          <Link to="#" className="heart-btn">
                            <i className="icon-heart"></i>
                          </Link>
                        </div>
                        <h6>
                          <Link to="#">basic CV</Link>
                        </h6>
                        <div className="bottom-content">
                          <ul className="list-select">
                            <li>
                              <Link to="#" className="sl1"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl2"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl3"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl4"></Link>
                            </li>
                          </ul>
                          <Link to="#" className="tf-btn">
                            Use CV
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="pagination-job padding">
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
              </TabPanel>
              <TabPanel className="inner animation-tab">
                <div className="group-col-3">
                  {data.slice(0, 3).map((idx) => (
                    <div key={idx.id} className="wd-cv-template cl3">
                      <div className="features">
                        <Link to="#">
                          <img src={idx.img} alt="images" />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="top-content">
                          <ul className="list-category">
                            <li>
                              <Link to="#">Create</Link>
                            </li>
                            <li>
                              <Link to="#">Professionally</Link>
                            </li>
                            <li>
                              <Link to="#">Minimal</Link>
                            </li>
                          </ul>
                          <Link to="#" className="heart-btn">
                            <i className="icon-heart"></i>
                          </Link>
                        </div>
                        <h6>
                          <Link to="#">basic CV</Link>
                        </h6>
                        <div className="bottom-content">
                          <ul className="list-select">
                            <li>
                              <Link to="#" className="sl1"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl2"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl3"></Link>
                            </li>
                            <li>
                              <Link to="#" className="sl4"></Link>
                            </li>
                          </ul>
                          <Link to="#" className="tf-btn">
                            Use CV
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="pagination-job padding">
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
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Sample;
