import React from "react";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa6";

const HowitWorks = () => {
  const works = [
    {
      icon: <FaTruck className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
      title: "Booking Pick & Drop",
      description:
        "We collect parcels directly from your home or office and deliver to any address in Bangladesh. ",
    },
    {
      icon: (
        <FaMoneyBillWave className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
      ),
      title: "Cash On Delivery (COD)",
      description:
        "Pay only when you receive your product. Trusted COD service for e-commerce sellers. ",
    },
    {
      icon: <FaWarehouse className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: "Delivery Hub Network",
      description:
        "Drop off or pick up parcels from any of our 50+ hubs across Bangladesh. ",
    },
    {
      icon: (
        <FaHandshake className="w-10 h-10 md:w-12 md:h-12 text-purple-600" />
      ),
      title: "SME & Corporate Booking",
      description:
        "Special bulk rates for businesses. Tailored logistics for e-commerce, factories, and hospitals. ",
    },
  ];

  return (
    <section className=" max-w-6xl mx-auto mt-20  ">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold ">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl p-5 md:p-6  flex flex-col "
            >
              <div className="mb-4 ">{work.icon}</div> 
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {work.title}
              </h3>
              <p className="flex-1">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
