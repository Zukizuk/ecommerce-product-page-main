import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, ImageTN } from "./Data";
import SwiperNavigation from "./SwiperNavigation";

function Gallery() {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      spaceBetween={35}
      slidesPerView={1}
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
  );
}

export default Gallery;
