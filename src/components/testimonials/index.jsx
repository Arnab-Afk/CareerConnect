import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

Testimonials.propTypes = {};

function Testimonials(props) {
  const { data } = props;
  const { className } = props;

  const [dataBlock] = useState({
    title: "What our clients are saying",
    text: "Showing companies based on reviews and recent job openings",
  });

  return (
    <section className={className}>
      <div className="wrap-testimonials over-flow-hidden">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-title style-2">
                <div className="group-title">
                  <h1>{dataBlock.title}</h1>
                  <p>{dataBlock.text}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp">
              <Swiper
                modules={[Pagination]}
                spaceBetween={32}
                pagination={{ clickable: true }}
                loop
                slidesPerView={3}
                className="tes-slider"
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 32,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="wd-testimonials">
                      <p className="description">{item.text}</p>
                      <div className="author-group">
                        <div className="avatar">
                          <img src={item.avt} alt="Jobtex" />
                        </div>
                        <div className="infor">
                          <h6>{item.name}</h6>
                          <div className="position">{item.postion}</div>
                          <ul className="rating">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.94418 8.42155L0.367213 6.2883C-0.11917 5.89933 0.094156 5.11714 0.711378 5.02896L4.36635 4.86612L5.92719 0.953019C6.03598 0.736138 6.25713 0.599609 6.49961 0.599609C6.74209 0.599609 6.96324 0.736849 7.07203 0.953019L8.63286 4.86612L12.2878 5.02896C12.9051 5.11714 13.1184 5.89933 12.632 6.2883L10.055 8.42155L10.7583 12.5864C10.8394 13.1545 10.2492 13.5798 9.73647 13.3231L6.49961 11.2659L3.26275 13.3224C2.74935 13.5791 2.15986 13.1538 2.24092 12.5857L2.94418 8.42155Z"
                                  fill="#FFB321"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.94418 8.42155L0.367213 6.2883C-0.11917 5.89933 0.094156 5.11714 0.711378 5.02896L4.36635 4.86612L5.92719 0.953019C6.03598 0.736138 6.25713 0.599609 6.49961 0.599609C6.74209 0.599609 6.96324 0.736849 7.07203 0.953019L8.63286 4.86612L12.2878 5.02896C12.9051 5.11714 13.1184 5.89933 12.632 6.2883L10.055 8.42155L10.7583 12.5864C10.8394 13.1545 10.2492 13.5798 9.73647 13.3231L6.49961 11.2659L3.26275 13.3224C2.74935 13.5791 2.15986 13.1538 2.24092 12.5857L2.94418 8.42155Z"
                                  fill="#FFB321"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.94418 8.42155L0.367213 6.2883C-0.11917 5.89933 0.094156 5.11714 0.711378 5.02896L4.36635 4.86612L5.92719 0.953019C6.03598 0.736138 6.25713 0.599609 6.49961 0.599609C6.74209 0.599609 6.96324 0.736849 7.07203 0.953019L8.63286 4.86612L12.2878 5.02896C12.9051 5.11714 13.1184 5.89933 12.632 6.2883L10.055 8.42155L10.7583 12.5864C10.8394 13.1545 10.2492 13.5798 9.73647 13.3231L6.49961 11.2659L3.26275 13.3224C2.74935 13.5791 2.15986 13.1538 2.24092 12.5857L2.94418 8.42155Z"
                                  fill="#FFB321"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.94418 8.42155L0.367213 6.2883C-0.11917 5.89933 0.094156 5.11714 0.711378 5.02896L4.36635 4.86612L5.92719 0.953019C6.03598 0.736138 6.25713 0.599609 6.49961 0.599609C6.74209 0.599609 6.96324 0.736849 7.07203 0.953019L8.63286 4.86612L12.2878 5.02896C12.9051 5.11714 13.1184 5.89933 12.632 6.2883L10.055 8.42155L10.7583 12.5864C10.8394 13.1545 10.2492 13.5798 9.73647 13.3231L6.49961 11.2659L3.26275 13.3224C2.74935 13.5791 2.15986 13.1538 2.24092 12.5857L2.94418 8.42155Z"
                                  fill="#FFB321"
                                />
                              </svg>
                            </li>
                            <li className="inactive">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.94418 8.42155L0.367213 6.2883C-0.11917 5.89933 0.094156 5.11714 0.711378 5.02896L4.36635 4.86612L5.92719 0.953019C6.03598 0.736138 6.25713 0.599609 6.49961 0.599609C6.74209 0.599609 6.96324 0.736849 7.07203 0.953019L8.63286 4.86612L12.2878 5.02896C12.9051 5.11714 13.1184 5.89933 12.632 6.2883L10.055 8.42155L10.7583 12.5864C10.8394 13.1545 10.2492 13.5798 9.73647 13.3231L6.49961 11.2659L3.26275 13.3224C2.74935 13.5791 2.15986 13.1538 2.24092 12.5857L2.94418 8.42155Z"
                                  fill="#FFB321"
                                />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
