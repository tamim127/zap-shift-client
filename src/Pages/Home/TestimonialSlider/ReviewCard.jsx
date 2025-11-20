import React from "react";
const ReviewCard = ({ review, isActive, isNext, isPrev }) => {
 

  return (
    <div
      className={`bg-white rounded-3xl p-10 shadow-xl transition-all duration-300
                  ${
                    isActive
                      ? "scale-100 opacity-100"
                      : isNext || isPrev
                      ? "scale-90 opacity-50"
                      : "scale-75 opacity-20"
                  }
                `}
    >
      <div className="flex justify-between mb-6">
        <span className="text-6xl text-teal-500 font-serif leading-none">
          ”
        </span>
      </div>

      <p className="text-gray-700 text-lg text-center mb-8">
        {review.review || review.text}
      </p>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-300 shadow-lg mb-4">
          {review.user_photoURL ? (
            <img
              src={review.user_photoURL}
              alt={review.userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl">
              {review.userName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>
        <h4 className="font-semibold text-gray-900 text-lg">
          {review.userName || review.author}
        </h4>
        <p className="text-teal-600 font-medium text-sm">
          {review.role || "Customer"}
        </p>
      </div>
    </div>
  );
};
export default ReviewCard;
