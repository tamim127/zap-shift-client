import React from "react";
import img1 from "../../../assets/be-a-merchant-bg.png";
import img2 from "../../../assets/location-merchant.png";

const CustomerSatisfaction = () => {
  return (
    <section className="max-w-6xl p-6 mx-auto ">
      <div className="absolute">
        <img className="max-w-5xl " src={img1} alt="" />
      </div>
      <div className="bg-secondary  p-12 rounded-2xl">
        <div className="flex items-center mt-6 gap-4">
          <div className="p-3 space-y-3">
            <h1 className="text-4xl   font-bold text-base-100">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className=" font-medium text-base-200">
              We offer the lowest delivery charge with the highest value along
              with <br /> 100% safety of your product. Pathao courier delivers your
              parcels in every <br /> corner of Bangladesh right on time.
            </p>
            <div className="flex gap-3 items-center">
              <button className="btn bg-primary text-base-300 rounded-2xl">
                Become a Merchant
              </button>
              <button className="btn bg-transparent border border-primary text-primary rounded-2xl">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
          <div>
            <img src={img2} alt="" className="w-[500px] h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
