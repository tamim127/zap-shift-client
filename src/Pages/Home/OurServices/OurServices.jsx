import React from 'react';
import { FaTruck } from 'react-icons/fa6';

import {

  FaMoneyBillWave,
  FaWarehouse,
  FaHome,
  FaBoxOpen,
  FaUndoAlt,
} from "react-icons/fa";
import {
  MdLocalShipping,
  MdAccountBalanceWallet,
  MdSwapHoriz,
} from "react-icons/md";
const OurServices = () => {

    const services = [
      {
        icon: <FaTruck className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
        title: "Express & Standard Delivery",
        description:
          "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      },
      {
        icon: (
          <MdAccountBalanceWallet className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
        ),
        title: "Nationwide Delivery",
        description:
          "Pay only when you receive your product. Trusted COD service for e-commerce sellers.",
      },
      {
        icon: (
          <FaWarehouse className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
        ),
        title: "Fulfillment Solution",
        description:
          "Drop off or pick up parcels from any of our 50+ hubs across Bangladesh.",
      },
      {
        icon: <FaHome className="w-10 h-10 md:w-12 md:h-12 text-purple-600" />,
        title: "Cash on Home Delivery",
        description:
          "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      },
      {
        icon: (
          <FaBoxOpen className="w-10 h-10 md:w-12 md:h-12 text-indigo-600" />
        ),
        title: "Corporate Service / Contract In Logistics",
        description:
          "Customized corporate services which includes warehouse and inventory management support.",
      },
      {
        icon: (
          <MdSwapHoriz className="w-10 h-10 md:w-12 md:h-12 text-orange-600" />
        ),
        title: "Parcel Return",
        description:
          "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      },
    ];
    return (
      <section className=" bg-secondary  mx-6 py-12 md:py-16 rounded-2xl my-20 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-base-100 font-bold ">
              Our Services
            </h2>
            <p className='text-base-200'>
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to <br /> business shipments —
              we deliver on time, every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md hover:bg-primary  text-center hover:scale-105 transition-all duration-300 rounded-2xl p-5 md:p-6  flex flex-col "
              >
                <div className="mb-4 flex justify-center ">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="flex-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default OurServices;