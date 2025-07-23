import React from "react";

export const PlansSection = (): JSX.Element => {
  const performanceCards = [
    {
      title: "Proven Track Record",
      description: "A track record of past trades that demonstrates actionable market insights.",
      icon: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      isHighlighted: false,
      hasKIcon: false,
    },
    {
      title: "Transparency You Can Trust",
      description: "Full visibility into trade results to help assess the value of our recommendations.",
      icon: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      isHighlighted: false,
      hasKIcon: false,
    },
    {
      title: "Measured Success",
      description: "Every trade is analyzed for accuracy, highlighting real investment opportunities.",
      icon: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      isHighlighted: true,
      hasKIcon: false,
    },
    {
      title: "See the Value First",
      description: "Evaluate trade history before subscribing to understand the impact of expert insights.",
      icon: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      isHighlighted: false,
      hasKIcon: true,
    },
  ];

  return (
    <section className="w-full min-h-screen py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif font-bold text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
            Past <span className="text-green-500">Performance</span>
          </h1>
          <p className="font-medium text-lg text-gray-600 max-w-2xl mx-auto">
            Real results, real trades - showcasing past performance to build confidence
          </p>
        </div>

        {/* Performance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {performanceCards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                card.isHighlighted ? "border-4 border-blue-400" : ""
              }`}
            >
              {/* K Icon for last card */}
              {card.hasKIcon && (
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
              )}

              {/* Card Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative">
                  <img
                    src={card.icon}
                    alt="Performance icon"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  {/* Checkmark overlay */}
                  <div className="absolute inset-0 bg-green-500/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="font-serif font-bold text-xl lg:text-2xl text-gray-800 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="font-medium text-gray-700 text-sm lg:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};