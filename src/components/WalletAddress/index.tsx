import React from "react";
import { useAddress } from "@thirdweb-dev/react";

const WalletAddress = () => {
  const address = useAddress();
  return (
    <>
      {address ? (
        <p className="text-center text-sm text-rose-400">
          You're logged in with wallet {address.substring(0, 5)}...
          {address.substring(address.length - 5)}
        </p>
      ) : null}
    </>
  );
};

export default WalletAddress;
