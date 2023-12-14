import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import StarProgress from "../components/progressBar/StarProgress";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Rating } from "react-simple-star-rating";
import Gotop from "../components/gotop";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header4 from "../components/header/Header4";

Shopsingle.propTypes = {};

function Shopsingle(props) {
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);

  const [count, setCount] = useState(1);

  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMinis = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                        <Collapse isOpened={toggle.key === "home"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "home" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/">Home Page 01 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v2">Home Page 02 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v3">Home Page 03 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v4">Home Page 04 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v5">Home Page 05 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v6">Home Page 06 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v7">Home Page 07 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v8">Home Page 08 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v9">Home Page 09 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v10">Home Page 10 </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Find jobs
                        </Link>
                        <Collapse isOpened={toggle.key === "job"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "job" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-list-sidebar">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid-sidebar">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v5">
                                List Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v6">
                                Grid Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v7">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v8">Top Map Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v9">Half Map - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v10">Half Map - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v1">Jobs Single - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v2">Jobs Single - V2</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Employers
                        </Link>
                        <Collapse isOpened={toggle.key === "employers"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "employers" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item">
                              <Link to="/employers_v1">List Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v4">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v5">Full Width</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v6">Top Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v7">Half Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v1">
                                Employers Single - V1
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v2">
                                Employers Single - V2
                              </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/employerreview">
                                Employers Reviews
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employernotfound">
                                Employers Not Found
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("candidate");
                          }}
                        >
                          Candidates
                        </Link>
                        <Collapse isOpened={toggle.key === "candidate"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "candidate" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v4">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v5">Half Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v6">No Available V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v7">No Available V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v1">
                                Candidate Single - V1
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v2">
                                Candidate Single - V2
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecv">Sample CV</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvslidebar">
                                Sample CV Sidebar
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvdetails">CV Details</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("blog");
                          }}
                        >
                          Blog
                        </Link>
                        <Collapse isOpened={toggle.key === "blog"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "blog" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v1">Blog List </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v2">Blog Grid</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v3">Blog Masonry</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v1">Blog Details - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v2">Blog Details - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v3">
                                Blog Details Sidebar
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile current-item">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Pages
                        </Link>
                        <Collapse isOpened={toggle.key === "pages"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "pages" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/faqs">FAQS</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/termsofuse">Terms Of Use</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/pricing">Pricing</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shop">Shop List</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shoppingcart">Shopping Cart</Link>
                            </li>
                            <li className="menu-item menu-item-mobile current-item">
                              <Link to="/shopsingle">Shop Single</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/login">Login</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/createaccount">Create Account</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/contactus">Contact Us</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-1"></span>Design &
                        Creative
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-8"></span>Digital
                        Marketing
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-2"></span>Development &
                        IT
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-3"></span>Music & Audio
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-4"></span>Finance &
                        Accounting
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-5"></span>Programming &
                        Tech
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-6"></span>Video &
                        Animation
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-7"></span>Writing &
                        translation
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="header-customize-item button">
            <Link to="/">Upload Resume</Link>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header2 clname="actPage2" handleMobile={handleMobile} />
      <Breadcrumb title="Shop Details" className="breadcrumb-section" />
      <section className="shop-deltail-section">
        <div className="tf-container st3">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-details group-col-2">
                <div className="shop-thumb cl2">
                  <img
                    src={require("../assets/images/review/shop.jpg")}
                    alt="images"
                  />
                </div>
                <div className="shop-content cl2">
                  <h5>Manager Onboarding</h5>
                  <div className="group-rating">
                    <ul className="list-star">
                      <li className="icon-star-full"></li>
                      <li className="icon-star-full"></li>
                      <li className="icon-star-full"></li>
                      <li className="icon-star-full"></li>
                      <li className="icon-star-full disable"></li>
                    </ul>
                    <p>(1.234 reviews)</p>
                  </div>
                  <p className="des">
                    Are you a User Experience Designer with a track record of
                    delivering intuitive digital experiences that drive results?
                    Are you a strategic storyteller and systems thinker who can
                    concept and craft smart, world-class campaigns across a
                    variety of mediums?
                  </p>
                  <div className="group-category">
                    <div className="sku">
                      <span>SKU:</span> A515-56-36UT
                    </div>
                    <ul className="category">
                      <li>
                        <span>Category:</span>
                      </li>
                      <li>
                        <Link to="#">Career</Link>
                      </li>
                      <li>
                        <Link to="#">Human</Link>
                      </li>
                      <li>
                        <Link to="#">Self help</Link>
                      </li>
                    </ul>
                  </div>
                  <h5 className="price">$9.00</h5>
                  <form>
                    <div className="group-ip stc">
                      <div className="quantity">
                        <span
                          className="btn-quantity minus-btn"
                          onClick={handleMinis}
                        >
                          <i className="icon-minus"></i>
                        </span>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={count}
                        />
                        <span
                          className="btn-quantity plus-btn"
                          onClick={handlePlus}
                        >
                          <i className="icon-plus"></i>
                        </span>
                      </div>

                      <div class="box-btn">
                        <button>Add to cart</button>
                        <Link to="#" class="heart-btn">
                          <i class="icon-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </form>
                  <h6 className="title2">Get it today</h6>
                  <div className="icon-content mgb13">
                    <div className="icon">
                      <i className="icon-return"></i>
                    </div>
                    <div className="content">
                      <div className="title">100 - Day Returns</div>
                      <p>
                        Not impressed? Get a refund. You have 100 days to break
                        our hearts.
                      </p>
                    </div>
                  </div>
                  <div className="icon-content">
                    <div className="icon">
                      <i className="icon-shipping"></i>
                    </div>
                    <div className="content">
                      <div className="title">Fast Shipping</div>
                      <p>Free Delivery When order from $500.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tf-container st4">
          <div className="row">
            <Tabs className="col-lg-12 tf-tab">
              <div className="group-tab">
                <TabList className="menu-tab shop-detail-tab">
                  <Tab className="ct-tab">Review</Tab>
                  <Tab className="ct-tab">Description</Tab>
                </TabList>
              </div>
              <div className="content-tab">
                <TabPanel className="inner animation-tab">
                  <div className="job-rating st2">
                    <div className="group-title">
                      <h6>Customer reviews</h6>
                      <Link to="#" className="btn">
                        Write a review
                      </Link>
                    </div>
                    <div className="rating-review">
                      <div className="left-rating">
                        <h2>4.8</h2>
                        <ul className="list-star">
                          <li className="icon-star-full"></li>
                          <li className="icon-star-full"></li>
                          <li className="icon-star-full"></li>
                          <li className="icon-star-full"></li>
                          <li className="icon-star-full"></li>
                        </ul>
                        <p className="count-rating">(1,968 Ratings)</p>
                      </div>
                      <div className="right-rating" ref={progressRef}>
                        <ul className="rating-list">
                          <li className="rating-details">
                            <span className="number-rating">5</span>
                            <StarProgress
                              targetHeight={targetHeight}
                              percent={60}
                            />
                            <span className="percent">60%</span>
                          </li>
                          <li className="rating-details">
                            <span className="number-rating">4</span>
                            <StarProgress
                              targetHeight={targetHeight}
                              percent={20}
                            />
                            <span className="percent">20%</span>
                          </li>
                          <li className="rating-details">
                            <span className="number-rating">3</span>
                            <StarProgress
                              targetHeight={targetHeight}
                              percent={10}
                            />
                            <span className="percent">10%</span>
                          </li>
                          <li className="rating-details">
                            <span className="number-rating">2</span>
                            <StarProgress
                              targetHeight={targetHeight}
                              percent={7}
                            />
                            <span className="percent">7%</span>
                          </li>
                          <li className="rating-details">
                            <span className="number-rating last">1</span>
                            <StarProgress
                              targetHeight={targetHeight}
                              percent={3}
                            />
                            <span className="percent">3%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="client-review">
                      <li className="client-item">
                        <div className="content">
                          <div className="top-content">
                            <div className="avatar">
                              <div className="avt">
                                <img
                                  src={require("../assets/images/review/avt2.jpg")}
                                  alt="images"
                                />
                              </div>
                              <div className="infor">
                                <h5>
                                  <Link to="#">Ariel Houessou</Link>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
                                      fill="#37B853"
                                    />
                                    <path
                                      d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z"
                                      fill="white"
                                    />
                                  </svg>
                                </h5>
                                <Link to="#" className="date">
                                  August 13, 2023
                                </Link>
                                <ul className="list-star">
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                </ul>
                                <p>
                                  Great 401K benefits- not based on a match but
                                  is 8% contribution
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link to="#" className="btn-like">
                            Was this helpful?{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                            >
                              <path
                                d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z"
                                fill="#6A6A6A"
                              />
                            </svg>
                          </Link>
                        </div>
                      </li>
                      <li className="client-item">
                        <div className="content">
                          <div className="top-content">
                            <div className="avatar">
                              <div className="avt">
                                <img
                                  src={require("../assets/images/review/avt3.jpg")}
                                  alt="images"
                                />
                              </div>
                              <div className="infor">
                                <h5>
                                  <Link to="#">Antony Bessan</Link>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
                                      fill="#37B853"
                                    />
                                    <path
                                      d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z"
                                      fill="white"
                                    />
                                  </svg>
                                </h5>
                                <Link to="#" className="date">
                                  August 13, 2023
                                </Link>
                                <ul className="list-star">
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                </ul>
                                <p>
                                  Great 401K benefits- not based on a match but
                                  is 8% contribution
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link to="#" className="btn-like">
                            Was this helpful?{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                            >
                              <path
                                d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z"
                                fill="#6A6A6A"
                              />
                            </svg>
                          </Link>
                        </div>
                      </li>
                      <li className="client-item">
                        <div className="content">
                          <div className="top-content">
                            <div className="avatar">
                              <div className="avt">
                                <img
                                  src={require("../assets/images/review/avt.jpg")}
                                  alt="images"
                                />
                              </div>
                              <div className="infor">
                                <h5>
                                  <Link to="#">Jean Paul Sessou</Link>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
                                      fill="#37B853"
                                    />
                                    <path
                                      d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z"
                                      fill="white"
                                    />
                                  </svg>
                                </h5>
                                <Link to="#" className="date">
                                  August 13, 2023
                                </Link>
                                <ul className="list-star">
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                  <li className="icon-star-full"></li>
                                </ul>
                                <p>
                                  Great 401K benefits- not based on a match but
                                  is 8% contribution
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link to="#" className="btn-like">
                            Was this helpful?{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                            >
                              <path
                                d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z"
                                fill="#6A6A6A"
                              />
                            </svg>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <Link to="#" className="btn-load">
                      See more reviews (719)
                    </Link>
                    <div className="form-candidate st2">
                      <div className="group-title">
                        <h6>Be the first to review</h6>
                        <div className="inner">
                          <p>Your Rating:</p>
                          <Rating initialValue={4} />
                        </div>
                      </div>
                      <form method="post">
                        <div className="group-input">
                          <div className="ip">
                            <label>Name</label>
                            <input
                              type="text"
                              placeholder="Your Name"
                              value="Tony Nguyen |"
                            />
                          </div>
                          <div className="ip">
                            <label>Email</label>
                            <input
                              type="email"
                              placeholder="Email"
                              value="jobtex@mail.com"
                            />
                          </div>
                        </div>
                        <div className="group-ant-choice st">
                          <div className="sub-ip">
                            <input type="checkbox" />
                            Save your name, email for the next time review
                          </div>
                        </div>
                        <div className="ip out">
                          <label>Review</label>
                          <textarea placeholder="Write comment "></textarea>
                        </div>
                        <button>Submit Review</button>
                      </form>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="inner animation-tab">
                  <div className="shop-description">
                    <h6>INSTANT #1 NEW YORK TIMES BESTSELLER!</h6>
                    <p>
                      From FOX News anchor and author Harris Faulkner comes a
                      collection of powerful, true-life stories of resilience,
                      healing, rescue, and protection. We need reminders of
                      God’s power now more than ever.
                    </p>
                    <p>
                      We often think about prayer as a wish list, with God as
                      Santa Claus. The reality is that the power of prayer
                      reminds us not only how small we are, but also how big God
                      is. Prayer is hope put into action. And prayer works.
                    </p>
                    <p>
                      From the aftermath of the devastating earthquake in Haiti
                      to the theater shooting in Aurora, Colorado, believers
                      testify to how God inspired hope even when all seemed
                      lost.
                    </p>
                    <p>
                      Two teenagers who were saved from treacherous seas by a
                      vessel named Amen now give thanks for the rescue that
                      changed their lives. A woman’s near-death experience with
                      COVID-19 turned out to be the crisis freeing her from
                      despair. Others speak to how prayer helped them navigate
                      family trauma, overcome abuse, and cope with mental
                      illness and depression. Historical accounts of miracles
                      testify to God’s power throughout time, and Faulkner
                      recounts the role of faith and prayer in her own life and
                      the life of her father.
                    </p>
                    <p>
                      Along with these stories of God’s presence, the book
                      includes an exclusive packet of newly written prayers.
                      Created to reflect the current times, this prayer booklet
                      will provide a road map for putting the lessons of these
                      stories into action. Faith Still Moves Mountains reminds
                      us that God’s light always shines through the darkness.
                      Through these testimonies, we learn prayer isn’t just a
                      ritual, it’s a vital spiritual strategy in a world that
                      wants us to give up the fight.
                    </p>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </>
  );
}

export default Shopsingle;
