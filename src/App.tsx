import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage/Homepage";
import { PlansPage } from "./screens/PlansPage";
import { ContactPage } from "./screens/ContactPage";
import { AboutPage } from "./screens/AboutPage";
import { ServicesPage } from "./screens/ServicesPage";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};