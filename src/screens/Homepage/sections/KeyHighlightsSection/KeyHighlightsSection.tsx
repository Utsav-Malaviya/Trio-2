import React from "react";

export const KeyHighlightsSection = (): JSX.Element => {
  const highlightItems = [
    {
      title: "Learning",
      description: "Learn Real Dropshipping Techniques",
      icon: "⏰",
    },
    {
      title: "Sell",
      description: "Sell Globally via Amazon, Shopify & More",
      icon: "📈",
    },
    {
      title: "Start",
      description: "Start with Zero Inventory or Tech Skills",
      icon: "📋",
    },
    {
      title: "Trust",
      description: "100% Transparent Process & Ongoing Support",
      icon: "🔔",
    },
  ];

  return (
    <section className="w-full py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-roboto-serif font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
            Key <span className="text-[#1ab2b7]">Highlights</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                className="w-full max-w-md lg:max-w-lg h-auto object-cover"
                alt="E-commerce team working with analytics"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              />
            </div>
          </div>

          {/* Right Side - Connected Highlights */}
          <div className="w-full lg:w-1/2 relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute left-0 top-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 400 500">
                {/* Dashed connecting lines */}
                <path
                  d="M 0 80 Q 50 80 80 120"
                  stroke="#1ab2b7"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
                <path
                  d="M 0 200 Q 30 200 80 180"
                  stroke="#1ab2b7"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
                <path
                  d="M 0 320 Q 30 320 80 280"
                  stroke="#1ab2b7"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
                <path
                  d="M 0 440 Q 50 440 80 380"
                  stroke="#1ab2b7"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
              </svg>
            </div>

            <div className="space-y-12 lg:space-y-16 lg:ml-20">
              {highlightItems.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#1ab2b7] to-[#4cd0d4] rounded-full shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl lg:text-3xl">{item.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-roboto-serif font-bold text-2xl lg:text-3xl text-gray-800 mb-2 group-hover:text-[#1ab2b7] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-poppins font-medium text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};