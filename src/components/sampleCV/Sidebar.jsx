import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Language" },
  { value: "s2", label: "English" },
  { value: "s3", label: "Spain" },
  { value: "s4", label: "Japan" },
];
const select2 = [
  { value: "s1", label: "UI UX Design" },
  { value: "s2", label: "Developer" },
  { value: "s3", label: "Tester" },
];
const select3 = [
  { value: "s1", label: "Minimal" },
  { value: "s2", label: "Minima 2" },
];
const select4 = [
  { value: "s1", label: "Most Users" },
  { value: "s2", label: "Minimal" },
];

Sidebar.propTypes = {};

function Sidebar(props) {
  const { data } = props;
  return (
    <section className="candidate-cv-section-two">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget-filter po-sticky m-bottom">
              <form>
                <div className="group-form">
                  <label className="title">Language</label>
                  <div className="group-input">
                    <Dropdown
                      options={select1}
                      className="react-dropdown select2"
                      value={select1[0]}
                    />
                  </div>
                </div>
                <div className="group-form">
                  <label className="title">Job</label>
                  <div className="group-input">
                    <Dropdown
                      options={select2}
                      className="react-dropdown select2"
                      value={select2[0]}
                    />
                  </div>
                </div>
                <div className="group-form">
                  <label className="title">Design</label>
                  <div className="group-input">
                    <Dropdown
                      options={select3}
                      className="react-dropdown select2"
                      value={select3[0]}
                    />
                  </div>
                </div>
                <div className="group-form">
                  <label className="title">popularity</label>
                  <div className="group-input">
                    <Dropdown
                      options={select4}
                      className="react-dropdown select2"
                      value={select4[0]}
                    />
                  </div>
                </div>
                <button type="submit">Find Sample CV</button>
              </form>
            </div>
          </div>

          <Tabs className="col-lg-8 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <TabList className="menu-tab cv-stc2">
                    <Tab className="ct-tab"> Popularity CV</Tab>
                    <Tab className="ct-tab">Personalized CV</Tab>
                  </TabList>
                </div>
                <SortBuy />
              </div>
            </div>
            <div className="content-tab cv-stc2">
              <TabPanel className="inner animation-tab">
                <div className="group-col-2">
                  {data.map((idx) => (
                    <div key={idx.id} className="wd-cv-template cl2">
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
              </TabPanel>
              <TabPanel className="inner animation-tab">
                <div className="group-col-2">
                  {data.slice(0, 4).map((idx) => (
                    <div key={idx.id} className="wd-cv-template cl2">
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
              </TabPanel>
            </div>
          </Tabs>
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
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
