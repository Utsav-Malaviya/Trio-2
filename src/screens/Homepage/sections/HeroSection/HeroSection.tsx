import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const featureItems = [
    {
      title: "Learning",
      description: "Learn Real Dropshipping Techniques",
      icon: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      iconAlt: "Routine",
    },
    {
      title: "Sell",
      description: "Sell Globally via Amazon, Shopify & More",
      icon: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      iconAlt: "Sell",
    },
    {
      title: "Start",
      description: "Start with Zero Inventory or Tech Skills",
      icon: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      iconAlt: "Start",
    },
    {
      title: "Trust",
      description: "100% Transparent Process & Ongoing Support",
      icon: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      iconAlt: "Bell",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
        <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-800 mb-4">
          Why Choose Our Program?
        </h2>
        <p className="font-medium text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the key features that make our e-commerce training program the best choice for your success
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="relative flex-shrink-0 w-full lg:w-auto group">
          <img
            className="w-full max-w-md lg:w-[420px] lg:h-[420px] mx-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
            alt="E-commerce success"
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1ab2b7]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="relative flex-grow w-full">
          <div className="absolute hidden lg:block w-1 bg-gradient-to-b from-[#1ab2b7] to-[#4cd0d4] h-[400px] left-8 top-1/2 -translate-y-1/2 rounded-full shadow-lg"></div>

          <div className="lg:ml-16 space-y-8 lg:space-y-12">
            {featureItems.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent group hover:bg-white/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col sm:flex-row items-start p-0 gap-4 lg:gap-5">
                  <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#1ab2b7] to-[#4cd0d4] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      alt={item.iconAlt}
                      src={item.icon}
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="font-serif font-bold text-gray-800 text-xl lg:text-2xl leading-tight group-hover:text-[#1ab2b7] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-medium text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
