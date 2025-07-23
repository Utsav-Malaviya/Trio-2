import React from "react";
import { NavigationBarSection } from "../Homepage/sections/NavigationBarSection/NavigationBarSection";
import { PlansSection } from "../Homepage/sections/PlansSection";
import { FooterSection } from "../Homepage/sections/FooterSection";

export const PlansPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <NavigationBarSection />
        <div className="pt-20">
          <PlansSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};