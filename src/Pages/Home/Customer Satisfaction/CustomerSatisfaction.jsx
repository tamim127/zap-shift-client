import React from "react";
import img1 from "../../../assets/be-a-merchant-bg.png";
import img2 from "../../../assets/location-merchant.png";

const CustomerSatisfaction = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Background image inside container */}
      <div className="absolute  rounded-2xl overflow-hidden mb-6">
        <img src={img1} alt="" className="md:max-w-6xl h-auto overflow-hidden " />
      </div>

      <div className="bg-secondary p-6 md:p-12 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="space-y-4 mt-5 text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-base-100 leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>

            <p className="text-base-200 font-medium leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels everywhere in Bangladesh!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="btn bg-primary text-base-300 rounded-2xl px-6">
                Become a Merchant
              </button>
              <button className="btn border bg-gray-700 border-primary text-primary rounded-2xl px-6">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end flex-1">
            <img
              src={img2}
              alt=""
              className="w-64 sm:w-80 md:w-[380px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
