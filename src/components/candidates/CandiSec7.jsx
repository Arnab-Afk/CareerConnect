import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import SortBuy from "../dropdown/SortBuy";

CandiSec7.propTypes = {};

function CandiSec7(props) {
  const { data } = props;
  return (
    <section className="candidates-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4 ctn2">
            <Sidebar />
          </div>

          <div className="col-lg-8 tf-tab ctn2">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <p className="nofi-job"> Showing all 0 result</p>
                </div>
                <SortBuy />
              </div>
              <button className="btn-pri">Reset Filter</button>
            </div>
          </div>
          <ul className="pagination-job p-top-st1">
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
      </div>
    </section>
  );
}

export default CandiSec7;
