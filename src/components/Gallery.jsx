import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, ImageTN } from "./Data";
import SwiperNavigation from "./SwiperNavigation";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";

function Gallery({ setShowLightbox }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        onClick={() => setShowLightbox(true)}
        loop={true}
        spaceBetween={35}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
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
    </>
  );
}

export default Gallery;
