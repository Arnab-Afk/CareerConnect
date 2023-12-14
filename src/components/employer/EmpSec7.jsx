import React from "react";
import PropTypes from "prop-types";
import MapSection from "../map";
import dataMap from "../../assets/fakeData/dataMap";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";

EmpSec7.propTypes = {};

function EmpSec7(props) {
  const { data } = props;
  const { handlePopup } = props;
  return (
    <section>
      <div className="tf-container ctn-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-half-map">
              <div className="content-left">
                <div className="wd-findjob-filer mb1">
                  <Link className="button-filter" onClick={handlePopup}>
                    <i className="icon-filter"></i> Filters
                  </Link>
                  <SortBuy />
                </div>
                <p className="nofi-job">
                  <span>1249</span> employers recommended for you
                </p>
                <div className="content-job style-scroll style-1">
                  {data.map((idx) => (
                    <div key={idx.id} className="employer-block style-2">
                      <div className="inner-box">
                        <div className="logo-company">
                          <img
                            src={idx.img}
                            alt="images/logo-company/cty17.png"
                          />
                        </div>
                        <div className="box-content">
                          <div className="star">
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                          </div>
                          <h3>
                            <Link to="/Employersingle_v1">{idx.title}</Link>
                            &nbsp;
                            <span className="icon-bolt"></span>
                          </h3>
                          <p className="info">
                            <span className="icon-map-pin"></span>
                            {idx.map}
                          </p>
                        </div>
                        <div className="button-readmore">
                          <span className="icon-heart"></span>
                          <button className="btn-employer">
                            2 job openings
                          </button>
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
                <MapSection className={"row-height"} markers={dataMap} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmpSec7;
