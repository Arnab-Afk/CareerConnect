import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";

Partner.propTypes = {};

function Partner(props) {
  const { data } = props;
  return (
    <section>
      <div className="wd-partner">
        <div className="tf-container">
          <h1 className="title-partner">
            Over 100,000 recruiters use Jobtex to modernize their hiring
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={68.95}
            slidesPerView={6}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            className="partner-type-6"
            loop={true}
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 6,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to="#" className="logo-partner">
                  <img src={item.img} alt="Jobtex" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partner;
