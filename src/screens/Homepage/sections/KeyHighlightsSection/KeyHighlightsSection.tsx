import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const KeyHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 mt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="E-commerce background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80"></div>
      </div>
      
      <div className="w-full max-w-5xl font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center leading-tight lg:leading-normal relative z-10 mb-6">
        <span className="text-gray-800 drop-shadow-sm">Learn How to </span>
        <span className="text-[#1ab2b7] drop-shadow-sm">Build Your Own</span>
        <span className="text-gray-800 drop-shadow-sm"> E-commerce Empire from Scratch</span>
      </div>

      <p className="text-center text-gray-600 text-lg md:text-xl max-w-3xl mb-8 relative z-10 font-medium">
        Master the art of dropshipping and e-commerce with our comprehensive training program designed for beginners and professionals alike.
      </p>

      <div className="mt-4 lg:mt-8 relative z-10">
        <Button className="h-12 w-60 lg:h-[57px] lg:w-[280px] bg-gradient-to-r from-[#4cd0d4] to-[#1ab2b7] hover:from-[#3ab8bc] hover:to-[#158a8e] rounded-full shadow-2xl hover:shadow-3xl font-serif font-bold text-lg lg:text-2xl transition-all duration-300 hover:scale-105 group">
          <span className="mr-4">Enroll Today</span>
          <ArrowRightIcon className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#4cd0d4]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#1ab2b7]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
