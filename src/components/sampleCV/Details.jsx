import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Progress from "../../components/progressBar/DonutProgress";
import { useRef, useEffect, useState } from "react";

Details.propTypes = {};

function Details(props) {
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

  return (
    <section className="candidates-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="wd-cv-item">
              <div className="item-group">
                <div className="content-left">
                  <div className="avatar">
                    <img
                      src={require("../../assets/images/review/cv-avt.jpg")}
                      alt="images"
                    />
                  </div>
                  <div ref={progressRef}>
                    <h6>tools</h6>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--premiere">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">
                            ADOBE PHOTOSHOP
                          </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--illustrator">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">
                            ADOBE ILLUStrator
                          </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--indesign">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">ADOBE INDESIGN</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--aftereffects">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">
                            ADOBE AFTER EFFECTS
                          </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--premiere">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">ADOBE Premiere</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--xd">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">ADOBE XD</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--figma">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">Figma</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--sketch">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">Sketch</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--zeplin">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">ZEPLIN</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--invision">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">INVISION</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--abstract"></span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">Abstract</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--principle"></span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">Principle</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill mg-bt-40">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--protopie">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">PROTOPIE</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <h6 className="mg-bt-26">Other Tools</h6>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--magento"></span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">
                            MAGENTO / ADOBE{" "}
                          </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--salesforce">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                            <span className="path9"></span>
                            <span className="path10"></span>
                            <span className="path11"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">SALESFORCE </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--jira"></span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">
                            ATLASSIAN JIRA{" "}
                          </div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                    <div className="wd-cv-skill">
                      <div className="progress-item">
                        <div className="icon">
                          <span className="icon-logo--slack">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </span>
                        </div>
                        <div className="progress-heading">
                          <div className="heading-progress">SLACK</div>
                          <Progress targetHeight={targetHeight} done="50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="profile">
                    <h2>SHERLOCK</h2>
                    <h4>DECKARD BAGGINS</h4>
                    <h6>Job title</h6>
                    <p>
                      "Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <h6 className="title-cv">Experience</h6>
                  <div className="cv-road-map">
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>At vero eos et accusamus et</h6>
                        <div className="sub-heading">Company name - TOWN</div>
                        <ul className="list-dot">
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>At vero eos et accusamus et</h6>
                        <div className="sub-heading">Company name - TOWN</div>
                        <ul className="list-dot">
                          <li>
                            Sed ut perspiciatis unde omnis iste natus error sit
                          </li>
                          <li>
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti{" "}
                          </li>
                          <li>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>At vero eos et accusamus et</h6>
                        <div className="sub-heading">Company name - TOWN</div>
                        <ul className="list-dot">
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit elit
                          </li>
                          <li>
                            Excepteur sint occaecat cupidatat non proident
                          </li>
                          <li>
                            Itaque earum rerum hic tenetur a sapiente delectus,
                            ut aut reiciendis voluptatibus
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6 className="title-cv">Education</h6>
                  <div className="cv-road-map">
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>At vero eos et accusamus et</h6>
                        <div className="sub-heading">Company name - TOWN</div>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>Sed ut perspiciatis unde omnis</h6>
                        <div className="sub-heading">Company name - TOWN</div>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="history">2020-2021</div>
                      <div className="dot-icon"></div>
                      <div className="content">
                        <h6>Et harum quidem rerum facilis </h6>
                        <div className="sub-heading">Company name - TOWN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cv-form-details po-sticky">
              <h6>Basic CV</h6>
              <ul className="list-infor">
                <li>
                  <div className="category">Job</div>
                  <div className="detail">UI UX Designer</div>
                </li>
                <li>
                  <div className="category">File</div>
                  <div className="detail">PDF</div>
                </li>
                <li>
                  <div className="category">Stype</div>
                  <div className="detail">Minimal, Create</div>
                </li>
                <li>
                  <div className="category">Language</div>
                  <div className="detail">English</div>
                </li>
              </ul>
              <p>Suitable for 1000+ companies</p>
              <ul className="list-partner">
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty13.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty14.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty11.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty16.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty15.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty10.png")}
                      alt="images"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={require("../../assets/images/logo-company/cty10.png")}
                      alt="images"
                    />
                  </Link>
                </li>
              </ul>
              <div className="preview-cv">
                <div className="title">Samle_cv_jobitex</div>
                <div className="category">PDF</div>
                <div className="icon icon-file-pdf"></div>
              </div>
              <Link to="#" className="btn-dowload">
                <i className="icon-download"></i> Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
