import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, ImageTN } from "./Data";
import SwiperNavigation from "./SwiperNavigation";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";
import { useRef } from "react";

function Gallery() {
  const thumbsSwiper = useRef(null);

  const handleThumb = (index) => {
    if (thumbsSwiper.current && thumbsSwiper.current.swiper) {
      thumbsSwiper.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Thumbs]}
        loop={true}
        spaceBetween={35}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper.current && thumbsSwiper.current.swiper }}
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
        className="small"
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        onSwiper={(swiper) => (thumbsSwiper.current = { swiper })}
        watchSlidesProgress={true}
      >
        {ImageTN.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => handleThumb(index)}
              className="thumbnails"
            ></SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Gallery;
