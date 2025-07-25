import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    "About Us",
    "Refund Policy",
    "Privacy Policy",
    "Terms of Services",
  ];

  // Social media data
  const socialMedia = [
    { name: "LinkedIn", icon: <LinkedinIcon className="h-5 w-5" /> },
    { name: "Instagram", icon: <InstagramIcon className="h-5 w-5" /> },
    { name: "Facebook", icon: <FacebookIcon className="h-5 w-5" /> },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-[#f2feff] via-[#e8f8fa] to-[#d2f6f8] py-12 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between mb-8 lg:mb-12 gap-8 lg:gap-0">
            {/* Logo */}
            <div className="w-full lg:w-auto mb-6 lg:mb-0 text-center lg:text-left group">
              <img
                className="h-auto w-48 lg:w-[280px] object-contain mx-auto lg:mx-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                alt="Bull bear logo"
                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
              />
              <p className="mt-4 font-serif font-semibold text-gray-700 text-lg">A1 Ecommerce Expert</p>
              <p className="mt-4 font-roboto font-semibold text-gray-700 text-lg">A1 Ecommerce Expert</p>
              <p className="mt-2 font-poppins font-medium text-gray-600 text-sm max-w-xs mx-auto lg:mx-0">
                Empowering entrepreneurs to build successful e-commerce businesses from scratch.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 lg:gap-20">
              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="font-roboto-serif font-bold text-xl lg:text-2xl text-gray-800 mb-4 lg:mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-3 lg:space-y-4 font-poppins font-medium text-base lg:text-lg">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-600 hover:text-[#1ab2b7] transition-all duration-300 hover:translate-x-1 inline-block hover:font-semibold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="text-center md:text-left">
                <h3 className="font-roboto-serif font-bold text-xl lg:text-2xl text-gray-800 mb-4 lg:mb-6">
                  Contact Us
                </h3>
                <div className="space-y-2 lg:space-y-3 font-poppins font-medium text-base lg:text-lg text-gray-600">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-[#1ab2b7] rounded-full"></span>
                    <p>123, Business Park Avenue</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-[#1ab2b7] rounded-full"></span>
                    <p>New Delhi, India 110001</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-[#1ab2b7] rounded-full"></span>
                    <p>Phone: +91-98765-43210</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-[#1ab2b7] rounded-full"></span>
                    <p>Email: info@a1ecommerce.com</p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="text-center md:text-left">
                <h3 className="font-roboto-serif font-bold text-xl lg:text-2xl text-gray-800 mb-4 lg:mb-6">
                  Follow Us
                </h3>
                <ul className="space-y-3 lg:space-y-[15px]">
                  {socialMedia.map((social, index) => (
                    <li key={index} className="flex items-center justify-center md:justify-start gap-3.5 text-gray-600 hover:text-[#1ab2b7] transition-all duration-300 cursor-pointer group hover:translate-x-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#1ab2b7] to-[#4cd0d4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white text-sm">
                          {social.icon}
                        </div>
                      </div>
                      <span className="font-medium text-lg lg:text-xl group-hover:font-semibold">
                      <span className="font-poppins font-medium text-lg lg:text-xl group-hover:font-semibold">
                        {social.name}
                      </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6 lg:mb-8"></div>

          {/* Copyright */}
          <div className="text-center font-poppins font-medium text-gray-600 text-base lg:text-lg leading-relaxed">
            © 2025 A1 Ecommerce Expert. All Rights Reserved.
            <span className="block mt-2 text-sm text-gray-500">
              Designed with ❤️ for aspiring entrepreneurs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
