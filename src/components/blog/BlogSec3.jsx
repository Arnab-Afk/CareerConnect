import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogSec3.propTypes = {};

function BlogSec3(props) {
  const { data } = props;
  return (
    <section className="blog-section">
      <div className="tf-container">
        <div className="masonry-wrap">
          {data.slice(12, 21).map((idx) => (
            <div key={idx.id} className="widget-blog-1 style-1 stc">
              <div className="img-blog">
                <img src={idx.img} alt="image" />
              </div>
              <div className="content stc">
                <span className="sub-title">{idx.cate}</span>
                <h3 className="main-title">
                  <Link to="/blogsingle_v1">{idx.title}</Link>
                </h3>
                <ul className="meta">
                  <li className="author">
                    <span>by</span>
                    {idx.author}
                  </li>
                  <li className="time">
                    <span className="icon-calendar"></span> {idx.time}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination-job">
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
    </section>
  );
}

export default BlogSec3;
