import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen bg-white pt-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-16">
        {/* Left Side - 3D Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative max-w-lg">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="3D E-commerce illustration with laptop, shopping cart, and packages"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl xl:text-6xl text-gray-800 leading-tight mb-8">
            Learn How to{" "}
            <span className="text-[#4cd0d4]">Build Your Own</span>
            <br />
            E-commerce Empire from
            <br />
            <span className="text-gray-800">Scratch</span>
          </h1>

          {/* Enroll Today Button */}
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-[#4cd0d4] to-[#1ab2b7] hover:from-[#3ab8bc] hover:to-[#158a8e] text-white font-serif font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              Enroll Today
              <span className="text-xl">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};