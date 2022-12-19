import React from "react";
import { useParams } from "react-router-dom";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import { urlFor } from "../../utils/utils";
import { useNFTDropManager } from "./hooks";
import { motion } from "framer-motion";
import GradientImage from "../../components/GradientImage";
import MainNavHeader from "../../components/MainNavHeader";
import ToasterMessage from "../../components/ToasterMessage";
import WalletAddress from "../../components/WalletAddress";
import ShowLoader from "../../components/ShowLoader";

const NFTDropPage = () => {
  const { id = "" } = useParams<{ id: string }>();

  const loggedInAddress = useAddress() || "";
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const {
    loading,
    collectionDetails,
    claimedNFTs,
    totalNFTs,
    priceWithSymbol,
    mintNFT,
  } = useNFTDropManager(id);

  const onConnectWallet = () => {
    if (loggedInAddress) {
      disconnect();
    } else {
      connectWithMetamask();
    }
  };

  if (!collectionDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Drop not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="NFTDropPage flex flex-col lg:flex-row h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToasterMessage />
      <div className="lg:w-2/5 flex flex-col gap-3 justify-center items-center bg-gradient-to-br from-cyan-800 to-rose-500 py-2 min-h-[50%] lg:min-h-screen p-3">
        <GradientImage
          imgSrc={urlFor(collectionDetails.previewImage).url()}
          alt={collectionDetails.title}
        />

        <h1 className="text-2xl text-white font-bold text-center mt-2">
          {collectionDetails.nftCollectionName}
        </h1>
        <h2 className="text-md text-gray-300 text-center">
          {collectionDetails.description}
        </h2>
      </div>

      <div className="flex flex-1 flex-col p-4 lg:p-8">
        <header className="flex flex-col items-center justify-center gap-3 sm:gap-0 sm:justify-between sm:flex-row">
          <MainNavHeader />
          <button
            className="bg-rose-400 text-white rounded-full text-xs font-bold w-full sm:w-40 px-4 py-2 lg:px-5 lg:py-3 lg:text-base"
            onClick={onConnectWallet}
          >
            {loggedInAddress ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-4 border" />

        <WalletAddress />

        <div className="mt-10 flex flex-col flex-1 items-center gap-6 lg:gap-0 lg:justify-center text-center">
          <img
            src={urlFor(collectionDetails.mainImage).url()}
            alt={collectionDetails.title}
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold">
            {collectionDetails.title}
          </h1>

          {loading ? (
            <ShowLoader text="Loading supply data..." />
          ) : (
            <p className="pt-5 text-lg text-green-500">
              {claimedNFTs?.toString()}/{totalNFTs?.toString()} NFT's claimed
            </p>
          )}
        </div>

        {loggedInAddress && (
          <button
            className="my-10 w-full bg-red-600 text-white rounded-full font-bold px-4 py-2 lg:px-5 lg:py-3 disabled:bg-gray-400"
            disabled={loading || claimedNFTs?.gte(totalNFTs?.toNumber() || 0)}
            onClick={mintNFT}
          >
            {loading ? (
              "Loading..."
            ) : claimedNFTs?.gte(totalNFTs?.toNumber() || 0) ? (
              "Sold Out"
            ) : (
              <span className="font-bold">Mint NFT ({priceWithSymbol})</span>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default NFTDropPage;
