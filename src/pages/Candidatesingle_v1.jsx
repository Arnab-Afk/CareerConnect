import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Progress from "../components/progressBar/DonutProgress";
import Gotop from "../components/gotop";
import Video from "../components/popup/Video";
import Gallery from "../components/popup/Gallery";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header4 from "../components/header/Header4";
import { getAuth } from "firebase/auth";
import firebase from "../firebase";
import 'firebase/storage';

Candidatesingle_v1.propTypes = {};
const auth=getAuth();
let displayName="candidate";
let photoURL="../assets/images/user/avatar/avt-author-1.jpg";
const user = auth.currentUser 
    if (user !== null) { 
    // The user object has basic properties  
    // such as display name, email, etc. 
    displayName = user.displayName; 
    const email = user.email; 
    photoURL = user.photoURL; 
    const emailVerified = user.emailVerified; 
    const uid = user.uid;
}


function Candidatesingle_v1(props) {
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);

  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

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
                            handleToggle("login");
                          }}
                        >
                          Signup/Login
                        </Link>
                        <Collapse isOpened={toggle.key === "login"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "login" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/createaccount">Signup </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/login">Login </Link>
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
      <Header4 clname="actCan3" handleMobile={handleMobile} />

      <section className="wrapper-author-page-title style2 stc form-sticky fixed-space">
        <div className="tf-container">
          <div className="wd-author-page-title">
            <div className="author-archive-header">
              <img
                src={photoURL}
                alt="jobtex"
                className="logo-company"
              />
              <div className="content">
                <Link to="#" className="tag-head">
                  Available now
                </Link>
                <h4>
                  <Link to="#">Computer Systems Analyst</Link>
                </h4>
                <h3>
                  <Link to="#">{displayName}</Link>
                  <span className="icon-bolt"></span>
                </h3>
                <ul className="author-list">
                  <li className="tag"> Blender </li>
                  <li className="tag"> Sketch </li>
                  <li className="tag"> Adobe XD </li>
                  <li className="tag"> Figma </li>
                  <li className="map">
                    <span className="icon-map-pin"></span>&nbsp; Tokyo, Japan
                  </li>
                  <li className="price">
                    <span className="icon-dolar1"></span>&nbsp; $300/day
                  </li>
                </ul>
              </div>
            </div>
            <div className="author-archive-footer">
              <button className="tf-btn btn-popup">DownLoad CV</button>
              <button className="tf-btn btn-author">Message</button>
            </div>
          </div>
        </div>
      </section>

      <section className="candidates-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article stc tf-tab single-job">
                <TabList className="menu-tab stc">
                  <Tab className="ct-tab">Resumes</Tab>
                  <Tab className="ct-tab">Portfolio</Tab>
                  <Tab className="ct-tab">Contact</Tab>
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>About me</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p className="mg-39">
                      Deloitte's Green Dot Agency is looking to add a Lead User
                      Experience Designer to our experience design team. We want
                      a passionate creative who's inspired by new trends and
                      emerging technologies, and is able to integrate them into
                      memorable user experiences. A problem solver who is
                      entrepreneurial, collaborative, hungry, and humble; can
                      deliver beautifully designed, leading-edge experiences
                      under tight deadlines; and who has demonstrated proven
                      expertise.
                    </p>
                    <h5>Education</h5>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <h5>Experience</h5>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <div className="group-skill group-col-2" ref={progressRef}>
                      <div className="inner cl2">
                        <h5>management skills</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">HTML & cSS</div>
                              <Progress targetHeight={targetHeight} done="60" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">word</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Excel</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inner cl2">
                        <h5>Design</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Figma</div>
                              <Progress targetHeight={targetHeight} done="80" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Photoshop</div>
                              <Progress targetHeight={targetHeight} done="70" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">
                                Ilustration
                              </div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5>Portfolio</h5>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Video />
                          </div>
                        </div>
                      </div>
                      <Gallery />
                    </div>

                    <div className="form-candidate">
                      <h5>Contact Candidate</h5>
                      <form>
                        <div className="group-input">
                          <div className="ip">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="ip">
                            <label>Name</label>
                            <input
                              type="text"
                              placeholder="Name"
                              value="Tony Nguyen |"
                            />
                          </div>
                        </div>
                        <div className="ip out">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="Email"
                            value="jobtex@mail.com"
                          />
                        </div>
                        <div className="ip out">
                          <label>Message</label>
                          <textarea placeholder="Message..."></textarea>
                        </div>
                        <button>Send Private Message</button>
                      </form>
                    </div>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About me</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About Company</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart.
                    </p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details stc po-sticky job-sg">
                <ul className="list-infor">
                  <li>
                    <div className="category">Career Finding</div>
                    <div className="detail">UI UX Designer</div>
                  </li>
                  <li>
                    <div className="category">Location</div>
                    <div className="detail">Hanoi City, VietNam</div>
                  </li>
                  <li>
                    <div className="category">Phone Number</div>
                    <div className="detail">123 456 7890 </div>
                  </li>
                  <li>
                    <div className="category">Email</div>
                    <div className="detail">hi.avitex@gmail.com</div>
                  </li>
                  <li>
                    <div className="category">Offered Salary</div>
                    <div className="detail">$2500/Month</div>
                  </li>
                  <li>
                    <div className="category">Experience time</div>
                    <div className="detail">5 Years</div>
                  </li>
                  <li>
                    <div className="category">Language</div>
                    <div className="detail">English, Vietnamese </div>
                  </li>
                  <li>
                    <div className="category">Age</div>
                    <div className="detail">26 Years Old</div>
                  </li>
                  <li>
                    <div className="category">Qualification</div>
                    <div className="detail">Master Degree</div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <span>Socials:</span>
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
                <div className="preview-cv mgt-32">
                  <div className="title">Samle_cv_jobitex</div>
                  <div className="category">PDF</div>
                  <div className="icon icon-file-pdf"></div>
                </div>
                <a className="btn-dowload">
                  <i className="icon-download"></i> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default Candidatesingle_v1;
