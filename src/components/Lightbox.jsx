import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperNavigation from "./SwiperNavigation";
import { Image, ImageTN } from "./Data";
import close from "../images/icon-close.svg";

function Lightbox({ setShowLightbox }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="lightbox">
      <div className="swiper-container">
        <Swiper
          loop={true}
          spaceBetween={35}
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation, Thumbs, FreeMode]}
          className="mySwiper2"
        >
          {Image.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            );
          })}
          <SwiperNavigation />
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, FreeMode]}
          className="small mySwiper"
        >
          {ImageTN.map((image, index) => {
            return (
              <SwiperSlide key={index} className="thumbnails">
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="close" onClick={() => setShowLightbox(false)}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
