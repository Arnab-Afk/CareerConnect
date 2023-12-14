import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/partners/page-logo-1.png";
import img2 from "../../assets/images/partners/page-logo-2.png";
import img3 from "../../assets/images/partners/page-logo-3.png";
import img4 from "../../assets/images/partners/page-logo-4.png";
import img5 from "../../assets/images/partners/page-logo-5.png";
import img6 from "../../assets/images/partners/page-logo-6.png";
import img7 from "../../assets/images/partners/page-logo-7.png";

const dataPartner = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
];

function Partner() {
  return (
    <section>
      <div className="wd-partner style-1">
        <div className="tf-container">
          <h1 className="title-partner">
            Used by 10.000+ companies around the world
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={68.95}
            slidesPerView={6}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            className="partner-type-7"
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
                slidesPerView: 7,
              },
            }}
          >
            {dataPartner.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to="#" className="logo-partner">
                  <img src={item.img} alt="img" />
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
