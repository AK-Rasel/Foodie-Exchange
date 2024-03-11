import HeadTitle from "../../../Utility/Shared/HeadTitle ";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <section>
      <HeadTitle
        titleHead={"What Our Clients Say"}
        titleMain={"TESTIMONIALS"}
      />
      <div>
        <Swiper
          autoplay={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-36 text-center flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 140 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-7xl my-6" />
                <p>{review.details}</p>
                <h3 className="text-2xl text-custom-red my-3 uppercase font-normal">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
