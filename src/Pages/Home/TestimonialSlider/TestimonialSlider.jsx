import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import img from '../../../assets/customer-top.png'

// Loader Component
const Loader = () => (
  <div className="flex items-center justify-center h-96">
    <p className="text-xl text-gray-500 animate-pulse">Loading reviews...</p>
  </div>
);

const TestimonialSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/data/reviews.json");
        if (!res.ok) throw new Error("Failed to load reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) return <Loader />;
  if (error) return <EmptyState message={error} />;
  if (!reviews.length) return <EmptyState message="No reviews found!" />;

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className=" text-center my-5 space-y-5 ">
          <div className="flex justify-center">
            <img src={img} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="font-extrabold text-4xl">
              What our customers are sayings
            </h1>
            <p className="text-gray-400">
              Enhance posture, mobility, and well-being effortlessly with
              Posture Pro. Achieve proper alignment, reduce <br /> pain, and
              strengthen your body with ease!
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="!w-80 sm:!w-96">
              {({ isActive, isNext, isPrev }) => (
                <ReviewCard
                  review={review}
                  isActive={isActive}
                  isNext={isNext}
                  isPrev={isPrev}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button className="swiper-button-prev-custom absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>
        <button className="swiper-button-next-custom absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
