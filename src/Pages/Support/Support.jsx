import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";

const Support = () => {
  const data = [
    {
      image: img1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real- time with our live parcel tracking feature.From pick - up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: img2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: img2,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      {data.map((d, index) => (
        <div
          key={index}
          className="bg-base-100 shadow-sm rounded-lg p-6 my-6
                     flex flex-col md:flex-row items-center gap-6"
        >
          <div className=" flex justify-center md:justify-start">
            <img src={d.image} alt={d.title} className="w-40 md:w-48 h-auto" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{d.title}</h2>
            <p className="text-gray-600 leading-relaxed">{d.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
