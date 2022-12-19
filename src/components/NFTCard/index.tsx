import React from "react";
import { Link } from "react-router-dom";
import { ICollection } from "../../typings";
import { urlFor } from "../../utils/utils";

interface INFTCardProps {
  collection: ICollection;
}

const NFTCard = (props: INFTCardProps) => {
  const { collection } = props;

  return (
    <Link to={`/nft/${collection.slug.current}`}>
      <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105">
        <img
          src={urlFor(collection.mainImage).url()}
          alt={collection.title}
          className="w-72 h-96 rounded-2xl object-cover "
        />

        <div className="p-5">
          <h2 className="text-xl">{collection.title}</h2>
          <p className="text-gray-500 text-sm mt-2">{collection.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
