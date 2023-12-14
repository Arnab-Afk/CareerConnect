import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Gallery from "../popup/Gallery";
import Video from "../popup/Video";

TabJob.propTypes = {};

function TabJob(props) {
  const { data } = props;
  const { handlePopup } = props;

  return (
    <section className="tab-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="group-job-sidebar">
              <TabList className="list-job menu-tab">
                {data.map((idx) => (
                  <Tab key={idx.id} className="features-job mg-bt-0 ct-tab">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        <div className="logo-company">
                          <img src={idx.img} alt="Jobtex" />
                        </div>
                        <div className="box-content">
                          <h4>
                            <Link to="/Jobsingle_v1">{idx.cate}</Link>
                          </h4>
                          <h3>
                            <Link to="/Jobsingle_v1">{idx.title}</Link>&nbsp;
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
                            <Link to="#">Contract</Link>{" "}
                          </li>
                          <li>
                            <Link to="#">Remote</Link>{" "}
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
                            {idx.price} <span className="year">/year</span>
                          </p>
                        </div>
                        <p className="days">{idx.apply}</p>
                      </div>
                    </div>
                  </Tab>
                ))}

                <Link to="#" className="btn-load">
                  Load more Job Results (3719)
                </Link>
              </TabList>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12" id="zIndex">
            {data.map((idx) => (
              <TabPanel className="content-tab sticky-home2 po-sticky add-mgt">
                <article className={`job-article ${idx.stt}`}>
                  <div className="top-content">
                    <div className="features-job style-2 stc-apply">
                      <div className="job-archive-header">
                        <div className="inner-box">
                          <div className="logo-company">
                            <img src={idx.img} alt="Jobtex" />
                          </div>
                          <div className="box-content">
                            <h4>
                              <Link to="/Jobsingle_v1">
                                Rockstar Games New York
                              </Link>
                            </h4>
                            <h3>
                              <Link to="/Jobsingle_v1">
                                Senior UI/UX Designer
                              </Link>
                              &nbsp;
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul>
                              <li>
                                <span className="icon-map-pin"></span>
                                Las Vegas, NV 89107, USA
                              </li>
                              <li>
                                <span className="icon-calendar"></span>2 days
                                ago
                              </li>
                            </ul>
                            <div className="button-readmore">
                              <span className="icon-heart"></span>
                              <Link
                                className="btn-apply btn-popup"
                                onClick={handlePopup}
                              >
                                <span className="icon-send"></span>
                                Apply Now
                              </Link>
                            </div>
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
                              <Link to="#"> Remote</Link>
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
                            <span className="icon-dollar"></span>
                            <p>
                              $83,000 - $110,000{" "}
                              <span className="year">/year</span>
                            </p>
                          </div>
                          <p className="days">32 days left to apply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-content home2">
                    <h5>Full Job Description</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p className="mg-19">
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
                    <h6>The Work You'll Do:</h6>
                    <ul className="list-dot">
                      <li>
                        Support the Creative Directors and Associate Creative
                        Directors of experience design to concept and oversee
                        the production of bold, innovative, award-winning
                        campaigns and digital experiences.
                      </li>
                      <li>
                        Make strategic and tactical UX decisions related to
                        design and usability as well as features and functions.
                      </li>
                      <li>
                        Creates low- and high-fidelity wireframes that represent
                        a user's journey.
                      </li>
                      <li>
                        Effectively pitch wireframes to and solutions to
                        stakeholders. You'll be the greatest advocate for our
                        work, but you'll also listen and internalize feedback so
                        that we can come back with creative that exceeds
                        expectations.
                      </li>
                    </ul>
                    <h6>What you'll bring:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Passion for Human-Centered Design-a drive to make
                        interactive technology better for people.
                      </li>
                      <li>Thorough knowledge of UX/UI best practices.</li>
                      <li>
                        Understanding of brand identity and working within a
                        defined design system as well as contributing to it.
                      </li>
                      <li>
                        A mastery of craft. You dream about color, typography,
                        and interaction design every day. You are proficient
                        using tools like Figma and Adobe XD. You can efficiently
                        use your skill set to develop new designs within
                        existing and new visual systems and design languages.
                      </li>
                      <li>
                        A portfolio which highlights strong understanding of UX
                        design including but not limited to: user flows, IA, and
                        translating customer research, analytics, and insights
                        into wireframes and high-fidelity designs.
                      </li>
                      <li>
                        Possess problem-solving skills, an investigative
                        mentality, and a proactive nature-committed to
                        delivering solutions.
                      </li>
                      <li>Possess problem-solving skills</li>
                    </ul>
                    <h6>Qualifications:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Bachelor's degree preferred, or equivalent experience.
                      </li>
                      <li>
                        At least 5-8 years of experience with UX and UI design.
                      </li>
                      <li>
                        2 years of experience with design thinking or similar
                        framework that focuses on defining users' needs early.
                      </li>
                      <li>
                        Strong portfolio showing expert concept, layout, and
                        typographic skills, as well as creativity and ability to
                        adhere to brand standards.
                      </li>
                      <li>
                        Expertise in Figma, Adobe Creative Cloud suite,
                        Microsoft suite.
                      </li>
                      <li>
                        Ability to collaborate well with cross-disciplinary
                        agency team and stakeholders at all levels.
                      </li>
                      <li>
                        Forever learning: Relentless desire to learn and
                        leverage the latest web technologies.
                      </li>
                      <li>
                        Detail-oriented: You must be highly organized, be able
                        to multi-task, and meet tight deadlines.
                      </li>
                      <li>
                        Independence: The ability to make things happen with
                        limited direction. Excellent proactive attitude,
                        take-charge personality, and "can-do" demeanor.
                      </li>
                      <li>
                        Proficiency with Front-End UI technologies a bonus but
                        not necessary (such as HTML, CSS, JavaScript).
                      </li>
                    </ul>
                    <p>
                      For individuals assigned and/or hired to work in Colorado
                      or Nevada, Deloitte is required by law to include a
                      reasonable estimate of the compensation range for this
                      role. This compensation range is specific to the State of
                      Colorado and the State of Nevada and takes into account
                      the wide range of factors that are considered in making
                      compensation decisions including but not limited to skill
                      sets; experience and training; licensure and
                      certifications; and other business and organizational
                      needs. The disclosed range estimate has not been adjusted
                      for the applicable geographic differential associated with
                      the location at which the position may be filled. At
                      Deloitte, it is not typical for an individual to be hired
                      at or near the top of the range for their role and
                      compensation decisions are dependent on the facts and
                      circumstances of each case. A reasonable estimate of the
                      current range is $86425- $177470.
                    </p>
                    <p>
                      You may also be eligible to participate in a discretionary
                      annual incentive program, subject to the rules governing
                      the program, whereby an award, if any, depends on various
                      factors, including, without limitation, individual and
                      organizational performance.
                    </p>
                    <div className="post-navigation d-flex aln-center">
                      <div className="wd-social d-flex aln-center">
                        <span>Social Profiles:</span>
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
                      <Link to="#" className="frag-btn">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H13C13.1857 0 13.3678 0.0517147 13.5257 0.149349C13.6837 0.246984 13.8114 0.386681 13.8944 0.552786C13.9775 0.718892 14.0126 0.904844 13.996 1.08981C13.9793 1.27477 13.9114 1.45143 13.8 1.6L11.25 5L13.8 8.4C13.9114 8.54857 13.9793 8.72523 13.996 8.91019C14.0126 9.09516 13.9775 9.28111 13.8944 9.44721C13.8114 9.61332 13.6837 9.75302 13.5257 9.85065C13.3678 9.94829 13.1857 10 13 10H3C2.73478 10 2.48043 10.1054 2.29289 10.2929C2.10536 10.4804 2 10.7348 2 11V14C2 14.2652 1.89464 14.5196 1.70711 14.7071C1.51957 14.8946 1.26522 15 1 15C0.734784 15 0.48043 14.8946 0.292893 14.7071C0.105357 14.5196 0 14.2652 0 14V3Z"
                            fill="#64666C"
                          />
                        </svg>
                        Report job
                      </Link>
                    </div>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Video />
                          </div>
                        </div>
                      </div>
                      <Gallery />
                    </div>

                    {/* <div className="job-rating">
                      <h6>reviews</h6>
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
                                    src={require("../../assets/images/review/avt.jpg")}
                                    alt="images"
                                  />
                                </div>
                                <div className="infor">
                                  <h5>
                                    <Link to="#">Dianne Russell</Link>
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
                                    Great 401K benefits- not based on a match
                                    but is 8% contribution
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
                                    src={require("../../assets/images/review/avt.jpg")}
                                    alt="images"
                                  />
                                </div>
                                <div className="infor">
                                  <h5>
                                    <Link to="#">Dianne Russell</Link>
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
                                    Great 401K benefits- not based on a match
                                    but is 8% contribution
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="btn-like">
                              Was this helpful?
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
                                    src={require("../../assets/images/review/avt.jpg")}
                                    alt="images"
                                  />
                                </div>
                                <div className="infor">
                                  <h5>
                                    <Link to="#">Dianne Russell</Link>
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
                                    Great 401K benefits- not based on a match
                                    but is 8% contribution
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="btn-like">
                              Was this helpful?
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
                      <Link to="Joblist_v1" className="btn-load">
                        See more reviews (719)
                      </Link>
                    </div> */}
                    <div className="related-job">
                      <h6>Related Jobs</h6>
                      <div className="features-job mg-bt-0">
                        <div className="job-archive-header">
                          <div className="inner-box">
                            <div className="logo-company">
                              <img
                                src={require("../../assets/images/logo-company/cty2.png")}
                                alt="jobtex"
                              />
                            </div>
                            <div className="box-content">
                              <h4>
                                <Link to="/Jobsingle_v1">
                                  Tamari Law Group LLC
                                </Link>
                              </h4>
                              <h3>
                                <Link to="/Jobsingle_v1">
                                  HR Administration
                                </Link>
                                <span className="icon-bolt"></span>
                              </h3>
                              <ul>
                                <li>
                                  <span className="icon-map-pin"></span>
                                  Las Vegas, NV 89107, USA
                                </li>
                                <li>
                                  <span className="icon-calendar"></span>2 days
                                  ago
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
                                <Link to="#"> Part-time</Link>
                              </li>
                              <li>
                                <Link to="$"> Remote</Link>
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
                                $83,000 - $110,000{" "}
                                <span className="year">/year</span>
                              </p>
                            </div>
                            <p className="days">24 days left to apply</p>
                          </div>
                        </div>
                      </div>
                      <div className="features-job mg-bt-0">
                        <div className="job-archive-header">
                          <div className="inner-box">
                            <div className="logo-company">
                              <img
                                src={require("../../assets/images/logo-company/cty7.png")}
                                alt="jobtex"
                              />
                            </div>
                            <div className="box-content">
                              <h4>
                                <Link to="/Jobsingle_v1">
                                  Tamari Law Group LLC
                                </Link>
                              </h4>
                              <h3>
                                <Link to="/Jobsingle_v1">
                                  HR Administration
                                </Link>
                                <span className="icon-bolt"></span>
                              </h3>
                              <ul>
                                <li>
                                  <span className="icon-map-pin"></span>
                                  Las Vegas, NV 89107, USA
                                </li>
                                <li>
                                  <span className="icon-calendar"></span>2 days
                                  ago
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
                                <Link to="#"> Part-time</Link>
                              </li>
                              <li>
                                <Link to="#"> Remote</Link>
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
                                $83,000 - $110,000{" "}
                                <span className="year">/year</span>
                              </p>
                            </div>
                            <p className="days">24 days left to apply</p>
                          </div>
                        </div>
                      </div>
                      <div className="features-job mg-bt-0">
                        <div className="job-archive-header">
                          <div className="inner-box">
                            <div className="logo-company">
                              <img
                                src={require("../../assets/images/logo-company/cty8.png")}
                                alt="jobtex"
                              />
                            </div>
                            <div className="box-content">
                              <h4>
                                <Link to="/Jobsingle_v1">
                                  Tamari Law Group LLC
                                </Link>
                              </h4>
                              <h3>
                                <Link to="/Jobsingle_v1">
                                  HR Administration
                                </Link>
                                <span className="icon-bolt"></span>
                              </h3>
                              <ul>
                                <li>
                                  <span className="icon-map-pin"></span>
                                  Las Vegas, NV 89107, USA
                                </li>
                                <li>
                                  <span className="icon-calendar"></span>2 days
                                  ago
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
                                <Link to="#"> Part-time</Link>
                              </li>
                              <li>
                                <Link to="#"> Remote</Link>
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
                                $83,000 - $110,000{" "}
                                <span className="year">/year</span>
                              </p>
                            </div>
                            <p className="days">24 days left to apply</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default TabJob;
