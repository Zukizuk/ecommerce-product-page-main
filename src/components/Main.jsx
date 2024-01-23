import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, ImageTN } from "./Data";
import "swiper/scss";
import SwiperNavigation from "./SwiperNavigation";

export default function Main() {
  return (
    <main>
      <div className="gallery">
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
        <div className="small"></div>
      </div>
      <div className="text__container">
        <h1>Sneaker Company</h1>
        <h2> Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price__container">
          <p>
            $125.00
            <span className="discount">
              <p>50%</p>
            </span>
          </p>
          <span className="initial__price">$250.00</span>
        </div>
        <div className="bottom">
          <div className="number">
            <button className="minus"></button>
            <span>
              <p>0</p>
            </span>
            <button className="plus"></button>
          </div>
          <button type="submit">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
