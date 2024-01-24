import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperNavigation from "./SwiperNavigation";
import { Image, ImageTN } from "./Data";

function Lightbox() {
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
      </div>
    </div>
  );
}

export default Lightbox;