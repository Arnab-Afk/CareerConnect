import Reac, { useState } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

Category07.propTypes = {};

function Category07(props) {
  const [dataList] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);

  const { data } = props;
  return (
    <section className="testimonials-category-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title style-2">
              <div className="group-title">
                <h1>Browse by category</h1>
                <p>Recruitment Made Easy in 100 seconds</p>
              </div>
            </div>
          </div>

          <div className=" col-md-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop
              className="tes-category-job"
            >
              {dataList.map((idx) => (
                <SwiperSlide key={idx.id}>
                  <div className="group-category-job padding wow fadeInUp">
                    {data.map((idx) => (
                      <div
                        key={idx.id}
                        className={`job-category-box ${idx.active}`}
                      >
                        <div className="job-category-header">
                          <h1>
                            <Link to="/joblist_v1">{idx.title}</Link>
                          </h1>
                          <p>{idx.unit}</p>
                        </div>
                        <Link to="/joblist_v1" className="btn-category-job">
                          Explore Jobs
                          <span className="icon-keyboard_arrow_right"></span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category07;
