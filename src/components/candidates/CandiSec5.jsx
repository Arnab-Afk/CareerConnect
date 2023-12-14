import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";
import MapCandidate from "../map/MapCandidate";
import dataMap from "../../assets/fakeData/dataMap";

CandiSec5.propTypes = {};

function CandiSec5(props) {
  const { data } = props;
  const { handlePopup } = props;

  return (
    <section>
      <div className="tf-container ctn-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-half-map">
              <div className="content-left stc">
                <div className="wd-findjob-filer">
                  <Link className="button-filter" onClick={handlePopup}>
                    <i className="icon-filter"></i> Filters
                  </Link>
                  <SortBuy />
                </div>
                <p className="nofi-job">
                  <span>1249</span> employers recommended for you
                </p>
                <div className="content-job style-scroll">
                  {data.slice(0, 6).map((idx) => (
                    <div key={idx.id} className="features-job wd-thum-career">
                      <div className="job-archive-header">
                        <div className="career-header-left">
                          <img src={idx.avt} alt="jobtex" className="thumb" />
                          <div className="career-left-inner">
                            <h4>
                              <Link to="/Candidatesingle_v1">{idx.unit}</Link>
                            </h4>
                            <h3>
                              <Link to="/Candidatesingle_v1">{idx.name}</Link>
                              &nbsp;
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul className="career-info">
                              <li>{idx.cate}</li>
                              <li>
                                <span className="icon-map-pin"></span>
                                {idx.map}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="career-header-right">
                          <span className="icon-heart"></span>
                          <Link to="/Candidatesingle_v1" className="tf-btn">
                            View Profile
                          </Link>
                        </div>
                      </div>
                      <div className="job-archive-footer">
                        <div className="career-footer-left">
                          <ul className="career-tag">
                            <li>
                              <Link to="#">Blender</Link>
                            </li>
                            <li>
                              <Link to="#">Sketch</Link>
                            </li>
                            <li>
                              <Link to="#">Adobe XD</Link>
                            </li>
                            <li>
                              <Link to="#">Figma</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="carrer-footer-right">
                          <span className="icon-dolar1"></span>
                          <p>${idx.price}/month</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="pagination-job absolute">
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
              <div className="content-right">
                <MapCandidate className={"row-height"} markers={dataMap} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CandiSec5;
