import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Rates from "./Rates";
import Services from "./Services";
import Work from "./Work";
import WorkTemplate from "./components/WorkTemplate";
import NotFound from "./NotFound";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<WorkTemplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
