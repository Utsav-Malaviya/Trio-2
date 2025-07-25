import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  const location = useLocation();
  
  // Navigation menu items data
  const navItems = [
    { name: "Home", path: "/", isActive: location.pathname === "/" },
    { name: "Plans", path: "/plans", isActive: location.pathname === "/plans" },
    { name: "Services", path: "/services", isActive: location.pathname === "/services" },
    { name: "Contact", path: "/contact", isActive: location.pathname === "/contact" },
    { name: "About us", path: "/about", isActive: location.pathname === "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-[1250px] h-[81px] mx-auto px-4 lg:px-8">
        {/* Logo and Brand Name */}
        <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-300">
          <img
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[80px] lg:h-[65px] object-contain"
            alt="Bull Bear Logo"
            src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
          />
          <div className="ml-2 lg:ml-3 font-serif font-bold text-gray-800 text-sm sm:text-base lg:text-lg">
            <span className="font-roboto">A1 Ecommerce Expert</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="max-w-none hidden md:block">
          <NavigationMenuList className="flex gap-4 lg:gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index} className="relative">
                {item.path ? (
                  <Link to={item.path}>
                    <NavigationMenuLink
                      className={`block font-medium text-sm lg:text-base text-center transition-all duration-300 hover:text-[#1ab2b7] hover:scale-110 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-50 ${
                        item.isActive ? "text-[#1ab2b7] font-semibold" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      {item.isActive && (
                        <div className="absolute w-full h-0.5 bg-[#1ab2b7] bottom-0 left-0 rounded-full"></div>
                      )}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <NavigationMenuLink
                    className={`block font-medium text-sm lg:text-base text-center transition-all duration-300 hover:text-[#1ab2b7] hover:scale-110 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-50 ${
                      item.isActive ? "text-[#1ab2b7] font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                    {item.isActive && (
                      <div className="absolute w-full h-0.5 bg-[#1ab2b7] bottom-0 left-0 rounded-full"></div>
                    )}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Subscribe Button */}
        <Button className="w-20 sm:w-24 lg:w-[100px] h-[35px] lg:h-[40px] rounded-full bg-gradient-to-r from-[#1ab2b7] to-[#4cd0d4] hover:from-[#158a8e] hover:to-[#3ab8bc] font-semibold text-white text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Subscribe
        </Button>
      </div>
    </header>
  );
};
