import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It gently pulls your shoulders back and aligns your spine without restricting movement.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes! Our Posture Pro is fully adjustable and designed to fit chest sizes from 28″ to 48″. Suitable for teens, adults, and seniors — both men and women.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Absolutely. 94% of our users report noticeable improvement in posture and reduced back/neck pain within 2 weeks of consistent use. Backed by chiropractors and physical therapists.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Yes! The premium version comes with built-in smart sensors and gentle vibration reminders when you slouch. Connects to our mobile app for real-time posture tracking.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "Just enter your email below the 'Notify Me' button on the product page. You'll get an instant email + SMS the moment it's back — usually within 24 hours!",
  },
];

const FAQSection = () => {
 
  const [openItems, setOpenItems] = useState([0]); 

  const toggleItem = (index) => {
    setOpenItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) 
          : [...prev, index] 
    );
  };

  return (
    <section className="w-full py-16 lg:py-24 ">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-teal-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

              
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary  text-base-300 font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            See All FAQs
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
