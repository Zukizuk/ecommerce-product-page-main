import { useSwiper } from "swiper/react";

function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className="custom-navigation">
      <button onClick={() => swiper.slidePrev()}></button>
      <button onClick={() => swiper.slideNext()}></button>
    </div>
  );
}

export default SwiperNavigation;
