import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../utils/utils";
import { useFetchCollections } from "./hooks";

const Home = () => {
  const { collections } = useFetchCollections();

  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen py-20 px-10 2xl:px-0">
      <h1 className="text-xl font-extralight sm:tex-md lg:text-xl">
        The{" "}
        <span className="font-extrabold underline decoration-pink-600/50">
          Friendly
        </span>{" "}
        NFT marketplace
      </h1>

      <div className="bg-slate-100 p-10 shadow-xl shadow-rose-400/20 mt-10 rounded-xl">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {collections.map((collection) => (
            <Link to={`/nft/${collection.slug.current}`}>
              <div
                key={collection._id}
                className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <img
                  src={urlFor(collection.mainImage).url()}
                  alt={collection.title}
                  className="w-72 h-96 rounded-2xl object-cover "
                />

                <div className="p-5">
                  <h2 className="text-xl">{collection.title}</h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
