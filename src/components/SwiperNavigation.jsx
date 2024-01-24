import { useSwiper } from "swiper/react";

function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className="custom-navigation">
      <button
        aria-label="slide prev"
        onClick={() => swiper.slidePrev()}
      ></button>
      <button
        aria-label="slider next"
        onClick={() => swiper.slideNext()}
      ></button>
    </div>
  );
}

export default SwiperNavigation;
