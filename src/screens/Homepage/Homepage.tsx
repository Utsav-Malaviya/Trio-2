import React from "react";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { KeyHighlightsSection } from "./sections/KeyHighlightsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <NavigationBarSection />
        <HeroSection />
        <KeyHighlightsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};
