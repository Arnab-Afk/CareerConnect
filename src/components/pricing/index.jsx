import React from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="tf-container st3">
        <div className="row">
          <div className="col-lg-12">
            <Tabs className="group-pricing-v1 tf-tab">
              <h6>Simple, transparent pricing</h6>
              <TabList className="menu-tab">
                <Tab className="ct-tab">Monthly</Tab>
                <Tab className="ct-tab">annual</Tab>
              </TabList>
              <div className="content-tab">
                <TabPanel className="inner animation-tab">
                  <div className="group-col-3">
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Basic</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $19.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          30 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          3 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 15 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                    <div className="pricing-box active cl3">
                      <div className="group-tag">
                        <div className="tag1">Standard</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $39.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          40 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          5 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 30 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Extended</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $79.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          50 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          10 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 60 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="inner animation-tab">
                  <div className="group-col-3">
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Basic</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $19.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          30 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          3 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 15 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                    <div className="pricing-box active cl3">
                      <div className="group-tag">
                        <div className="tag1">Standard</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $39.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          40 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          5 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 30 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Extended</div>
                        <div className="tag2"> Popular</div>
                      </div>
                      <div className="pricing">
                        $79.00<span>/month</span>
                      </div>
                      <ul className="wd-list-icon">
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          50 Job posting
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          10 featured job
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Job displayed for 60 days
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                fill="#14A077"
                              />
                              <path
                                d="M8.39644 13.8429L5.14644 10.3563C4.95119 10.1468 4.95119 9.80718 5.14644 9.59769L5.85353 8.8391C6.04879 8.62961 6.36539 8.62961 6.56064 8.8391L8.75 11.1878L13.4394 6.1571C13.6346 5.94763 13.9512 5.94763 14.1465 6.1571L14.8536 6.91569C15.0488 7.12516 15.0488 7.46479 14.8536 7.67428L9.10355 13.8429C8.90828 14.0524 8.5917 14.0524 8.39644 13.8429Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Premium Support 24/7
                        </li>
                      </ul>
                      <Link to="#" className="btn">
                        Browse themes
                      </Link>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
