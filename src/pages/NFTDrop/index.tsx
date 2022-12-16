import React from "react";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";

const NFTDropPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  const onConnectWallet = () => {
    if (address) {
      disconnect();
    } else {
      connectWithMetamask();
    }
  };

  return (
    <div className="NFTDropPage flex flex-col lg:flex-row h-screen">
      <div className="lg:w-2/5 flex flex-col gap-3 justify-center items-center bg-gradient-to-br from-cyan-800 to-rose-500 py-2 lg:min-h-screen p-3">
        <div className="p-2 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl">
          <img
            src="/images/00.png"
            alt="text-ape"
            className="rounded-xl w-44 lg:h-96 lg:w-72"
          />
        </div>

        <h1 className="text-3xl text-white font-bold text-center mt-2">
          FRIENDLY Apes
        </h1>
        <h2 className="text-lg text-gray-300 text-center">
          A collection of FRIENDLY Apes who live and breathe React
        </h2>
      </div>

      {/* Right side  */}
      <div className="flex flex-col flex-1 p-4 lg:p-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-extralight sm:tex-md lg:text-xl w-56 lg:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              Friendly
            </span>{" "}
            NFT marketplace
          </h1>
          <button
            className="bg-rose-400 text-white rounded-full text-xs font-bold px-4 py-2 lg:px-5 lg:py-3 lg:text-base"
            onClick={onConnectWallet}
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* content */}
        <div className="mt-10 flex flex-col flex-1 items-center gap-6 lg:gap-0 lg:justify-center text-center">
          <img
            src="/images/apes-11.webp"
            alt="apes-cover"
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Friendly ape coding club | NFT Drop
          </h1>

          <p className="pt-5 text-lg text-green-500">13/21 NFT's claimed</p>
        </div>

        {/* mint button */}
        <button className="my-10 h-16 w-full bg-red-600 text-white rounded-full font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
