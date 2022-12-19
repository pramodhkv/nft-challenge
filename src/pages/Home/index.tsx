import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../utils/utils";
import { useFetchCollections } from "./hooks";
import { motion } from "framer-motion";
import MainNavHeader from "../../components/MainNavHeader";
import NFTCard from "../../components/NFTCard";

const Home = () => {
  const { collections } = useFetchCollections();

  return (
    <motion.div
      className="max-w-7xl mx-auto flex flex-col min-h-screen py-20 px-10 2xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainNavHeader />

      <div className="bg-slate-100 p-10 shadow-xl shadow-rose-400/20 mt-10 rounded-xl">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {collections.map((collection) => (
            <NFTCard key={collection._id} collection={collection} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
