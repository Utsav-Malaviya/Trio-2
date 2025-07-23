import React from "react";
import { NavigationBarSection } from "../Homepage/sections/NavigationBarSection/NavigationBarSection";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <NavigationBarSection />
        
        {/* Main Content */}
        <section className="pt-24 pb-16 px-4 lg:px-8 bg-gray-50 min-h-screen">
          <div className="max-w-6xl mx-auto">
            {/* Who We Are Section */}
            <div className="mb-16">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-800 mb-8">
                Who We Are
              </h1>
              <p className="font-medium text-lg text-gray-700 leading-relaxed max-w-4xl">
                <span className="text-[#1ab2b7] font-semibold">Bulls & Bears</span> is a data-driven stock market insights platform designed to help traders and investors 
                make smarter decisions. We provide financial advisory services, our team of 
                experienced analysts shares stock recommendations based on extensive market research.
              </p>
            </div>

            {/* Our Mission Section */}
            <div className="relative">
              <h2 className="font-serif font-bold text-4xl lg:text-5xl text-gray-800 mb-8">
                Our <span className="text-[#4cd0d4]">Mission</span>
              </h2>
              
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-full lg:w-1/2">
                  <p className="font-medium text-lg text-gray-700 leading-relaxed mb-8">
                    To provide reliable, educational, and insightful stock market analysis 
                    that empowers investors and traders to navigate the stock market with 
                    confidence.
                  </p>
                </div>
                
                <div className="w-full lg:w-1/2 relative">
                  {/* Green curved background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4cd0d4]/30 to-[#1ab2b7]/40 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-gradient-to-br from-[#4cd0d4]/20 to-[#1ab2b7]/30 rounded-3xl p-8 lg:p-12">
                    {/* Team illustration placeholder */}
                    <div className="w-full h-64 lg:h-80 bg-white/50 rounded-2xl flex items-center justify-center">
                      <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                        alt="Team collaboration"
                        className="w-full h-full object-cover rounded-2xl opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full bg-gray-100 py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
              {/* Logo */}
              <div className="w-full lg:w-auto text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img
                    className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
                    alt="A1 Ecommerce Expert logo"
                    src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
                  />
                  <div className="ml-3">
                    <div className="font-serif font-bold text-gray-800 text-lg">A1 ECOMMERCE EXPERT</div>
                    <div className="font-medium text-[#1ab2b7] text-sm">Smart Stock Shipping</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap gap-8 lg:gap-16">
                {/* Quick Links */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 font-medium text-gray-600">
                    <li><a href="#" className="hover:text-[#1ab2b7] transition-colors duration-300">About Us</a></li>
                    <li><a href="#" className="hover:text-[#1ab2b7] transition-colors duration-300">Refund Policy</a></li>
                    <li><a href="#" className="hover:text-[#1ab2b7] transition-colors duration-300">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[#1ab2b7] transition-colors duration-300">Terms of Services</a></li>
                  </ul>
                </div>

                {/* Contact Us */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-4">
                    Contact Us
                  </h3>
                  <div className="space-y-2 font-medium text-gray-600">
                    <p>Address</p>
                    <p>123, Park Avenue</p>
                    <p>Phone no: +91-64892-XXXXX</p>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-4">
                    Follow Us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <LinkedinIcon className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <InstagramIcon className="w-5 h-5" />
                      <span className="font-medium">Instagram</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <FacebookIcon className="w-5 h-5" />
                      <span className="font-medium">Facebook</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-gray-300">
              <p className="font-medium text-gray-600">
                © 2025 A1 Ecommerce Expert. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};