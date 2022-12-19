import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NFTDropPage from "./NFTDrop";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/nft/:id" element={<NFTDropPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
