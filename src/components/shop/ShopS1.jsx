import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";

ShopS1.propTypes = {};

const options = [
  { value: "op4", label: "Sort by (Default)" },
  { value: "op5", label: "New" },
  { value: "op6", label: "Last" },
];

function ShopS1(props) {
  const { data } = props;
  return (
    <section className="shop-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <p className="nofi-job">
                    <span>1249&nbsp;</span>Candidates Recommended for You
                  </p>
                </div>
                <div className="group-select">
                  <Dropdown
                    options={options}
                    className="react-dropdown sort-buy"
                    value={options[0]}
                  />
                </div>
              </div>
            </div>
            <div className="content-tab">
              <div className="inner">
                <div className="group-col-3">
                  {data.map((idx) => (
                    <div
                      key={idx.id}
                      className="employer-block style-3 cl3 wd-shop stc"
                    >
                      <div className="inner-box">
                        <Link to="#">
                          <div className="product-main-images">
                            <img
                              className="logo-company"
                              src={idx.img1}
                              alt="jobtex"
                            />
                          </div>
                          <div className="product-hover-images">
                            <img
                              className="logo-company"
                              src={idx.img2}
                              alt="jobtex"
                            />
                          </div>
                        </Link>
                        <div className="box-content">
                          <h3>
                            <Link to="#">{idx.title}</Link>
                          </h3>
                          <ul className="price">
                            <li className="price-first">{idx.price}</li>
                            <li className="bold">{idx.pricesale}</li>
                          </ul>
                        </div>
                        <ul className="list-btn-action">
                          <li>
                            <Link
                              to="#"
                              className="wish-list"
                              data-tooltip="Add to wish list"
                            >
                              <i className="icon-heart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="compare"
                              data-tooltip="Compare"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xlink="http://www.w3.org/1999/xlink"
                                svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512"
                                space="preserve"
                                className=""
                              >
                                <g transform="matrix(6.123233995736766e-17,-1,1,6.123233995736766e-17,0.0009007453918172814,511.99912214279175)">
                                  <path
                                    fillRule="evenodd"
                                    d="M143.648 462.801V19.45h-24.641V462.8l-77.362-77.356-17.423 17.423 98.391 98.391a12.306 12.306 0 0 0 17.418 0l98.397-98.391L221 385.444zM470.35 126.556l-77.357-77.362V492.55h-24.641V49.194L291 126.556l-17.428-17.423 98.386-98.396a12.32 12.32 0 0 1 17.423 0l98.397 98.396z"
                                    clipRule="evenodd"
                                    fill="#000000"
                                    data-original="#000000"
                                    className=""
                                  ></path>
                                </g>
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="view"
                              data-tooltip="Quick view"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xlink="http://www.w3.org/1999/xlink"
                                svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 24 24"
                                space="preserve"
                                className=""
                              >
                                <g>
                                  <g data-name="Layer 2">
                                    <path
                                      d="M12 18.53a11.71 11.71 0 0 1-7.44-2.65l-3.09-2.53a1.74 1.74 0 0 1 0-2.7l3.09-2.53a11.78 11.78 0 0 1 14.88 0l3.09 2.53a1.74 1.74 0 0 1 0 2.7l-3.09 2.53A11.69 11.69 0 0 1 12 18.53zM12 7a10.22 10.22 0 0 0-6.49 2.28l-3.09 2.53a.25.25 0 0 0 0 .38l3.09 2.53a10.27 10.27 0 0 0 13 0l3.09-2.53a.25.25 0 0 0 0-.38l-3.11-2.53A10.24 10.24 0 0 0 12 7z"
                                      fill="#000000"
                                      data-original="#000000"
                                      className=""
                                    ></path>
                                    <path
                                      d="M12 18.25A6.25 6.25 0 1 1 18.25 12 6.25 6.25 0 0 1 12 18.25zm0-11A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.25z"
                                      fill="#000000"
                                      data-original="#000000"
                                      className=""
                                    ></path>
                                    <path
                                      d="M15 12a3 3 0 1 1-2.2-2.89 1.47 1.47 0 0 0-.3.89 1.5 1.5 0 0 0 1.5 1.5 1.47 1.47 0 0 0 .89-.3 3 3 0 0 1 .11.8z"
                                      fill="#000000"
                                      data-original="#000000"
                                      className=""
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                            </Link>
                          </li>
                        </ul>
                        <div className="group-btn">
                          <Link to="shop-details.html" className="btn-employer">
                            add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="pagination-job padding">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopS1;
