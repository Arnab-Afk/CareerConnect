import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

Header03.propTypes = {};

function Header03({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };
  return (
    <header id="header" className="header header-style2">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <ul className="usefull-link">
                  <li>
                    <Link to="/employers_v1">For Employers</Link>
                  </li>
                  <li>
                    <Link to="/candidates_v1">For Candidates</Link>
                  </li>
                </ul>
              </div>
              <div className="header-ct-center">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img className="site-logo" src={logo} alt="Image" />
                  </Link>
                </div>
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
                                <NavLink to="/blog_v1">Blog List - V1 </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/blog_v2">Blog Grid</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/blog_v3">Blog Masonry</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="#">
                              Blog Details
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/blogsingle_v1">
                                  Blog Details - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/blogsingle_v2">
                                  Blog Details - V2
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/blogsingle_v3">
                                  Blog Details Sidebar
                                </NavLink>
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
                                <NavLink to="/shop">Shop List</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/shopsingle">Shop Single</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/shoppingcart">
                                  Shopping Cart
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/checkout">Checkout</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/aboutus">About Us</NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/faqs">FAQS</NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/termsofuse">Terms Of Use</NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/pricing">Pricing</NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/login">Login</NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/createaccount">
                              Create Account
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/contactus">Contact Us</NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right">
                <div className="header-customize-item help">
                  <Link to="/termofuse">
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
                <div className="header-customize-item login">
                  <Link to="/login">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#121212"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#121212"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="item-login">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/createaccount">register</Link>
                    </li>
                  </ul>
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

export default Header03;
