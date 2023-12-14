import React, { useState } from "react";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import avt from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";

HeaderHome2.propTypes = {};

function HeaderHome2({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header" className="header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-ct-center st-1">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li
                        className={`menu-item menu-item-has-children ${clname}`}
                      >
                        <Link to="#">Home </Link>
                        <div className="menu-bar">
                          <ul className="sub-menu-bar">
                            <li className="menu-item">
                              <NavLink to="/">Home Page 01 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v2">Home Page 02 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v3">Home Page 03 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v4">Home Page 04 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v5">Home Page 05 </NavLink>
                            </li>
                          </ul>

                          <ul className="sub-menu-bar">
                            <li className="menu-item">
                              <NavLink to="/home_v6">Home Page 06 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v7">Home Page 07 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v8">Home Page 08 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v9">Home Page 09 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v10">Home Page 10 </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Find jobs </Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Jobs Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v1">List Layout</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/job-grid">List Sidebar</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/job-list-sidebar">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/job-grid-sidebar">
                                  Grid Sidebar
                                </NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v5">
                                  List Sidebar Fullwidth
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v6">
                                  Grid Sidebar Fullwidth
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v7">Top Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v8">
                                  Top Map Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v9">
                                  Half Map - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v10">
                                  Half Map - V2
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/jobsingle_v1">
                              Jobs Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/jobsingle_v2">
                              Jobs Single - V2
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Employers</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Employers Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v4">
                                  Grid Sidebar
                                </NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v5">
                                  Grid Fullwidth
                                </NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v6">Top Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v7">Half Map</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/employersingle_v1">
                              Employers Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/employersingle_v2">
                              Employers Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub">
                            <NavLink to="/employerreview">
                              Employers Reviews
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/employernotfound">
                              Employers Not Found
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/employerdashboard">
                              Employer Dashboard
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Candidates</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Candidates Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v4">Top Map</NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v5">Half Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v6">
                                  No Available - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v7">
                                  No Available - V2
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="#">
                              Sample CV
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/samplecv">Sample CV</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvdetails">
                                  CV Details
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvslidebar">
                                  Sample CV Sidebar
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/candidatesingle_v1">
                              Candidate Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/candidatesingle_v2">
                              Candidate Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub">
                            <NavLink to="/candidatedashboard">
                              Candidates Dashboard
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Blog Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <Link to="/blog_v1">Blog List </Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blog_v2">Blog Grid</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blog_v3">Blog Masonry</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="#">
                              Blog Details
                              <span className="icon-keyboard_arrow_right"></span>{" "}
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v1">
                                  Blog Details - V1
                                </Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v2">
                                  Blog Details - V2
                                </Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v3">
                                  Blog Details Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Shop
                              <span className="icon-keyboard_arrow_right"></span>{" "}
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <Link to="/shop">Shop List</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/shopsingle">Shop Single</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/shoppingcart">Shopping Cart</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/checkout">Checkout</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="/aboutus">About Us</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/faqs">FAQS</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/termsofuse">Terms Of Use</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/login">Login</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/createaccount">Create Account</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right st-1">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                <div className="header-customize-item bell">
                  <span className="icon-bell"></span>
                  <div className="sub-notification">
                    <div className="sub-notification-heading">
                      <div className="sub-notification-title">Notification</div>
                      <span>5 New</span>
                    </div>
                    <div className="sub-notification-content">
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                    </div>
                    <div className="sub-notification-button">
                      <Link to="#">Read All</Link>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item account">
                  <img src={avt} alt="" />
                  <div className="name">Candidates</div>
                </div>
                <div className="header-customize-item button">
                  <Link to="/">Upload Resume</Link>
                </div>
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome2;
