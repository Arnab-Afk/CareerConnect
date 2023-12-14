import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Blog01.propTypes = {};

function Blog01(props) {
  const { data } = props;
  const { className } = props;
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title style-2 style-4">
              <div className="group-title">
                <h1>Latest News</h1>
                <p>Jobtex’s Blog provides valuable content to the job seeker</p>
              </div>
            </div>
          </div>
          {data.slice(0, 3).map((idx) => (
            <div key={idx.id} className="col-lg-4 wow fadeInUp">
              <div className="box-latest">
                <div className="img-latest">
                  <img src={idx.img} alt="Jobtex" />
                </div>
                <div className="box-content">
                  <div className="heading">
                    <Link to="#" className="tag">
                      {idx.cate}
                    </Link>
                    <h3>
                      <Link to="blog-detail-side-bar.html"> {idx.title}</Link>
                    </h3>
                  </div>
                  <ul className="date-post">
                    <li>by {idx.author}</li>
                    <li>
                      <span className="icon-calendar"></span>
                      {idx.time}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog01;
