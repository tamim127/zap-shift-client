import React from "react";
import Banner from "../Banner/Banner";
import HowitWorks from "../HowitWorks/HowitWorks";
import OurServices from "../OurServices/OurServices";
import Support from "../../Support/Support";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import CustomerSatisfaction from "../Customer Satisfaction/CustomerSatisfaction.jsx";
import Brand from "../Brands/Brand.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HowitWorks />
      <OurServices />
      <Brand/>
      <Support />
      <CustomerSatisfaction/>
      <TestimonialSlider />
      <FAQ/>
    </div>
  );
};

export default Home;
