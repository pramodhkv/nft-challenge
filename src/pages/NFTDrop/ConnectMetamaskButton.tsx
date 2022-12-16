import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const ConnectMetamaskButton = () => {
  const address = useAddress();
  return (
    <div>
      <ConnectWallet />
    </div>
  );
};

export default ConnectMetamaskButton;
