import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  // Define card data for mapping
  const cards = [
    {
      title: "Practical Strategies",
      description:
        "Learn proven e-commerce methods used by successful global sellers.",
      iconSrc: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      iconAlt: "Search",
      bgColor: "bg-[#d2f6f8]",
      iconBgColor: "bg-white",
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from mentors with 7+ figure selling experience.",
      iconSrc: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      iconAlt: "Advice",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      iconBgColor: "bg-[#d2f6f8]",
    },
    {
      title: "Secure & Simple",
      description:
        "Hassle-free enrollment with safe and transparent payment options.",
      iconSrc: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      iconAlt: "Apps",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      iconBgColor: "bg-[#d2f6f8]",
    },
    {
      title: "Fast Support",
      description: "Get help within 12–24 hours from our dedicated team.",
      iconSrc: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      iconAlt: "Customer",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      iconBgColor: "bg-[#d2f6f8]",
    },
  ];

  return (
    <section className="w-full py-16 px-4 lg:px-8 bg-gradient-to-br from-[#f8fdff] to-[#e8f8fa]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="font-medium text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what makes our e-commerce training program stand out from the rest
        </p>
      </div>
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`${card.bgColor} rounded-2xl shadow-xl min-h-[280px] lg:h-[300px] relative hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100`}
          >
            <CardContent className="p-0">
              <div className="relative w-full h-full p-4 lg:p-0">
                {/* Icon container */}
                <div
                  className={`w-20 h-20 lg:w-24 lg:h-24 absolute top-6 lg:top-8 left-1/2 -translate-x-1/2 ${card.iconBgColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden`}
                >
                  <img
                    className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded-full"
                    alt={card.iconAlt}
                    src={card.iconSrc}
                  />
                </div>

                {/* Text content */}
                <div className="absolute w-full max-w-sm top-32 lg:top-36 left-1/2 -translate-x-1/2 px-4">
                  <div className="relative w-full text-center">
                    <div
                      className="font-serif font-bold text-gray-800 text-xl lg:text-2xl text-center leading-tight mb-4 group-hover:text-[#1ab2b7] transition-colors duration-300"
                    >
                      {card.title}
                    </div>

                    <div className="font-medium text-gray-600 text-sm lg:text-base text-center leading-relaxed">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
