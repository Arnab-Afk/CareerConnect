import React, { useEffect, useState,useRef } from "react";
import PropTypes from "prop-types";
import {auth} from '../../firebase';
import { getAuth } from "firebase/auth";
import logo from "../../assets/images/logo.png";
import photoURL from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";
import firebase from "../../firebase";
import { useNavigate } from 'react-router-dom';
import {  signOut} from "firebase/auth";
import 'firebase/storage';
import firebaseConfig from '../../firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";

Header2.propTypes = {};
let displayName = 'Candidate';
let status='Upload Pdf'
function Header2({ clname = "", handleMobile }) {
  const auth = getAuth()
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
  }
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, 
  []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleButtonClick = () => {
    // Trigger the click on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleUpload = () => {
    const user = auth.currentUser;
    const storage = getStorage();
    if (user && file) {
      const storageRef = ref(storage, `pdfs/${user.displayName}/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('File uploaded successfully!', snapshot);
        status='Uploaded'

        // You can add additional logic here, such as storing file metadata in Firebase Database.
      });
    } else {
      console.error('No user logged in or no file selected.');
      status='Failed Log in'
    }
  };
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

  return (
    <header
      id="header"
      className={`header header-default ${scroll ? "is-fixed is-small" : ""}`}
    >
      <div className="tf-container ct2">
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
                <div className="categories">
                  <Link to="#">
                    <span className="icon-grid"></span>Categories
                  </Link>
                  <div className="sub-categorie">
                    <ul className="pop-up">
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-1"></span>Design &
                          Creative
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-8"></span>Digital
                          Marketing
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-2"></span>Development
                          & IT
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-3"></span>Music &
                          Audio
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-4"></span>Finance &
                          Accounting
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-5"></span>Programming
                          & Tech
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-6"></span>Video &
                          Animation
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-7"></span>Writing &
                          translation
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className={`menu ${clname}`}>
                      <li className="menu-item sub1">
                        <Link to="/">Home </Link>
                        <div className="menu-bar">
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children sub2">
                        <Link to="#">Find jobs </Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Jobs Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <NavLink to=""></NavLink>
                              </li>
                              
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item menu-item-has-children sub3">
                        <Link to="#">Employers</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="/employerdashboard">
                              Employers Dashboard
                            </Link>
                            
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children sub4">
                        <Link to="#">Candidates</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Dashboard
                            </Link>
                            
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="#">
                              Joblist
                              
                            </Link>
                            
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/candidatesingle_v1">
                              
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav4">
                            <NavLink to="/candidatesingle_v2">
                              Candidate Single - V2
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item sub5">
                        <Link to="/login">Login</Link>
                        
                      </li>
                      <li className="menu-item sub6">
                        <Link to="/aboutus">About Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right">
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
                    <button onClick={handleLogout}><Link to="/login">Log Out</Link></button>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item account">
                  <img src={photoURL} alt="jobtex" width="40"
        height="40" />
                  <div className="name">{displayName}</div>
                </div>
                <div className="header-customize-item button" onClick={handleButtonClick}>
                  <Link to="#" >Upload Resume</Link>
                </div>
                {/* Hidden file input */}
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
        <div className="header-customize-item button" onClick={handleUpload}>
          <Link>{status}</Link>
            
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

export default Header2;
