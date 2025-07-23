import React from "react";
import { NavigationBarSection } from "../Homepage/sections/NavigationBarSection/NavigationBarSection";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export const ServicesPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <NavigationBarSection />
        
        {/* Main Content */}
        <section className="pt-24 pb-16 px-4 lg:px-8 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Service Section */}
            <div className="relative">
              {/* Pink circle with K */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              
              {/* Green rounded rectangle */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-full px-12 py-16 border-2 border-green-400 shadow-xl">
                <h1 className="font-serif font-bold text-3xl lg:text-4xl text-gray-800 mb-2">
                  What You Get as a
                </h1>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-green-600">
                  Subscriber?
                </h2>
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
                    <div className="font-medium text-[#1ab2b7] text-sm">Smart Drop Shipping</div>
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