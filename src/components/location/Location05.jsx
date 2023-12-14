import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lo4 from "../../assets/images/review/lo4.jpg";
import lo1 from "../../assets/images/review/lo1.jpg";
import lo3 from "../../assets/images/review/lo3.jpg";
import lo5 from "../../assets/images/review/lo5.jpg";
import lo6 from "../../assets/images/review/lo6.jpg";
import lo7 from "../../assets/images/review/lo7.jpg";
import lo8 from "../../assets/images/review/lo8.jpg";

Location05.propTypes = {};

function Location05({ className }) {
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>Jobs by Location</h1>
                <p>Find your favourite jobs and get the benefits of yourself</p>
              </div>
              <button className="tf-button">
                All Location
                <span className="icon-arrow-right2"></span>
              </button>
            </div>
          </div>

          <div className="col-md-12 wow fadeInUp">
            <div className="group-location">
              <div className="box-3">
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo4} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">Canada</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo1} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">Germany</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-6">
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo7} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">United States</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-3">
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo3} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">United Kingdom</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo6} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">France</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-3">
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo5} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">India</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
                <div className="wd-job-location">
                  <div className="features">
                    <img src={lo8} alt="images" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/jobsingle_v1">Viet Nam</Link>
                    </h6>
                    <Link to="#" className="category">
                      Open Jobs (3)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location05;
