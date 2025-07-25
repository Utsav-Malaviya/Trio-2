import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const KeyHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16 px-4 mt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - 3D Object Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="E-commerce 3D illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-normal mb-6">
              <span className="text-gray-800">Learn How to </span>
              <span className="text-[#1ab2b7]">Build Your Own</span>
              <span className="text-gray-800"> E-commerce Empire from Scratch</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 font-medium leading-relaxed">
              Master the art of dropshipping and e-commerce with our comprehensive training program designed for beginners and professionals alike.
            </p>

            <div className="mt-8">
              <Button className="h-12 w-60 lg:h-[57px] lg:w-[280px] bg-gradient-to-r from-[#4cd0d4] to-[#1ab2b7] hover:from-[#3ab8bc] hover:to-[#158a8e] rounded-full shadow-2xl hover:shadow-3xl font-serif font-bold text-lg lg:text-2xl transition-all duration-300 hover:scale-105 group">
                <span className="mr-4">Enroll Today</span>
                <ArrowRightIcon className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
