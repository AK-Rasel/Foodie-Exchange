import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";

// import "styles.css";

const Category = () => {
  return (
    <div className="max-w-[1140px] px-5 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <h3 className="text-center font-cinzel font-semibold text-xl -mt-16 mb-20 text-white drop-shadow-md">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h3 className="text-center font-cinzel font-semibold text-xl -mt-16 mb-20 text-white drop-shadow-md">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <h3 className="text-center font-cinzel font-semibold text-xl -mt-16 mb-20 text-white drop-shadow-md">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <h3 className="text-center font-cinzel font-semibold text-xl -mt-16 mb-20 text-white drop-shadow-md">
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <h3 className="text-center font-cinzel font-semibold text-xl -mt-16 mb-20  text-white drop-shadow-md">
            SALADS
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
