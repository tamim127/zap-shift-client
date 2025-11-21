import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const data = [
    {
      id: "story",
      title: "Story",
      content:
        "ZapShift started with a simple vision: to make parcel delivery fast, reliable, and completely hassle-free for everyone. What began as a small initiative with a handful of passionate individuals has grown into a trusted logistics platform used by thousands every day. In the early days, we focused on understanding the real challenges people face with deliveries — delayed shipments, unclear tracking, and lack of transparency. By combining technology with a customer-first approach, we started building solutions that solved these problems effectively. Today, ZapShift stands as a testament to innovation, trust, and persistence — a journey from a small dream to a nationwide service that connects people and businesses seamlessly.",
    },
    {
      id: "mission",
      title: "Mission",
      content:
        "Our mission is clear and unwavering: “To deliver every parcel with speed, accuracy, and complete peace of mind.” We aim to make logistics effortless and reliable for everyone. From individual users sending personal packages to businesses managing bulk shipments, our goal is to ensure every parcel reaches its destination safely and on time. ZapShift leverages advanced technology for real-time tracking, optimized routing, and proactive customer updates, so users always know the status of their deliveries. More than just delivering parcels, our mission is to build trust and confidence in every transaction.",
    },
    {
      id: "success",
      title: "Success",
      content:
        "ZapShift's success is defined by the impact we create for our users and partners. With thousands of parcels delivered each month, we maintain a high on-time delivery rate that businesses and individuals rely on. Our success is also measured by the innovations we bring to the logistics space — from live tracking dashboards to predictive delivery notifications — all designed to improve efficiency and customer satisfaction. We have grown steadily by listening to feedback, analyzing challenges, and continuously refining our operations. Every delivery, every satisfied customer, and every milestone achieved reflects our commitment to excellence and consistency.",
    },
    {
      id: "team",
      title: "Team & Others",
      content:
        "At the heart of ZapShift is a team of dedicated professionals passionate about redefining delivery services. Our developers, logistics experts, riders, and customer support agents work together to ensure seamless operations every day. We foster a culture of collaboration, innovation, and transparency, where every team member is empowered to solve problems creatively and efficiently. Beyond the core team, ZapShift partners with local couriers, businesses, and tech providers to create a holistic logistics ecosystem. Together, we are more than a delivery service — we are a trusted partner committed to connecting people, businesses, and communities across Bangladesh.",
    },
  ];

  // Find active tab content
  const activeContent = data.find((d) => d.id === activeTab)?.content;

  return (
    <section className=" max-w-7xl my-20 mx-auto  px-4 sm:px-6 lg:px-10">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-5xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-10 ">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-700 text-xl sm:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 flex-wrap ">
          {data.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`px-4 py-2 rounded-2xl font-medium transition-colors duration-300 ${
                activeTab === d.id
                  ? "bg-primary text-base-300 shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-teal-100"
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-10 text-gray-800 text-base sm:text-lg shadow-inner transition-all duration-300">
          {activeContent}
        </div>
      </div>
    </section>
  );
};

export default About;
