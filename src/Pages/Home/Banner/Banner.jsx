import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="mx-6 my-8 relative">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={0}>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>

      {/* Button container */}
      <div className="absolute flex gap-3 bottom-20 left-20">
        <Link to="" className="bg-primary btn rounded-2xl">
          Track Your Parcel
        </Link>

        <Link
          to=""
          className="bg-black font-extrabold flex justify-center items-center text-2xl text-primary w-10 h-10 rounded-full"
        >
          <FiArrowUpRight />
        </Link>

        <Link
          to=""
          className="btn bg-base-100 border border-base-200 rounded-2xl"
        >
          Be a rider
        </Link>
      </div>
    </div>
  );
};


export default Banner;
