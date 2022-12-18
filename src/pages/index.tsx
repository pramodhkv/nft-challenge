import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NFTDropPage from "./NFTDrop";

const Pages = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/nft/:id" element={<NFTDropPage />} />
    </Routes>
  );
};

export default Pages;
