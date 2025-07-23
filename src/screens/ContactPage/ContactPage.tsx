import React from "react";
import { NavigationBarSection } from "../Homepage/sections/NavigationBarSection/NavigationBarSection";
import { FooterSection } from "../Homepage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { FacebookIcon, InstagramIcon, LinkedinIcon, StarIcon } from "lucide-react";

export const ContactPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <NavigationBarSection />
        
        {/* Main Contact Section */}
        <section className="pt-24 pb-16 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Stay <span className="text-[#1ab2b7]">Connected</span>
              </h1>
              <p className="font-medium text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Want to share feedback, report issues, or ask questions? Fill out the form below, and our team will get back to you.
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gradient-to-br from-[#d2f6f8]/30 to-[#e8f8fa]/50 rounded-3xl p-8 lg:p-10 shadow-xl border border-[#1ab2b7]/20">
                  <h2 className="font-serif font-bold text-2xl lg:text-3xl text-gray-800 text-center mb-8">
                    Contact Form
                  </h2>
                  
                  <form className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block font-semibold text-gray-700 text-lg mb-3">
                        Name:
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full h-12 lg:h-14 rounded-xl border-2 border-gray-200 focus:border-[#1ab2b7] font-medium text-gray-700 text-base px-4 transition-all duration-300 hover:border-[#4cd0d4] shadow-sm focus:shadow-lg bg-white"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block font-semibold text-gray-700 text-lg mb-3">
                        Email:
                      </label>
                      <Input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full h-12 lg:h-14 rounded-xl border-2 border-gray-200 focus:border-[#1ab2b7] font-medium text-gray-700 text-base px-4 transition-all duration-300 hover:border-[#4cd0d4] shadow-sm focus:shadow-lg bg-white"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block font-semibold text-gray-700 text-lg mb-3">
                        Message:
                      </label>
                      <textarea
                        placeholder="Type your message here"
                        rows={6}
                        className="w-full rounded-xl border-2 border-gray-200 focus:border-[#1ab2b7] font-medium text-gray-700 text-base px-4 py-3 transition-all duration-300 hover:border-[#4cd0d4] shadow-sm focus:shadow-lg bg-white resize-none focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                      <Button className="w-full lg:w-48 h-12 lg:h-14 bg-gradient-to-r from-[#1ab2b7] to-[#4cd0d4] hover:from-[#158a8e] hover:to-[#3ab8bc] rounded-full font-serif font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Side - Illustration and Rating */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                {/* Customer Service Illustration */}
                <div className="relative mb-8 group">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#d2f6f8]/40 to-[#e8f8fa]/60 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                      alt="Customer service representative"
                      className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                      alt="Support icon"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                      alt="Chat icon"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="absolute top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg"
                      alt="Email icon"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="absolute top-8 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                      alt="Phone icon"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-2 mb-8">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className="w-8 h-8 text-[#1ab2b7] fill-current hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                {/* Contact Information Cards */}
                <div className="w-full max-w-md space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Response Time</h3>
                    <p className="font-medium text-gray-600">We respond within 12-24 hours</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Support Hours</h3>
                    <p className="font-medium text-gray-600">Monday - Friday: 9 AM - 6 PM IST</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Direct Contact</h3>
                    <p className="font-medium text-gray-600">info@a1ecommerce.com</p>
                    <p className="font-medium text-gray-600">+91-98765-43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Quick Links */}
            <div className="mt-20 bg-gradient-to-r from-[#f8fdff] to-[#e8f8fa] rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Quick Links */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-2xl text-gray-800 mb-6">Quick Links</h3>
                  <ul className="space-y-3 font-medium text-lg">
                    <li><a href="#" className="text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300">Refund Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300">Terms of Services</a></li>
                  </ul>
                </div>

                {/* Contact Us */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-2xl text-gray-800 mb-6">Contact Us</h3>
                  <div className="space-y-3 font-medium text-lg text-gray-600">
                    <p>Address:</p>
                    <p>123, Park Avenue</p>
                    <p>Phone no: +91-64892-XXXXX</p>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-2xl text-gray-800 mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <LinkedinIcon className="w-6 h-6" />
                      <span className="font-medium text-lg">LinkedIn</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <InstagramIcon className="w-6 h-6" />
                      <span className="font-medium text-lg">Instagram</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-[#1ab2b7] transition-colors duration-300 cursor-pointer">
                      <FacebookIcon className="w-6 h-6" />
                      <span className="font-medium text-lg">Facebook</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <p className="font-medium text-gray-600 text-lg">
                  © 2025 A1 Ecommerce Expert. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
};