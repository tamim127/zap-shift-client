import React from "react";
import Banner from "../Banner/Banner";
import HowitWorks from "../HowitWorks/HowitWorks";
import OurServices from "../OurServices/OurServices";


const Home = () => {
  return (
    <div className="min-h-screen">
          <Banner />
          <HowitWorks />
          <OurServices/>
    </div>
  );
};

export default Home;
