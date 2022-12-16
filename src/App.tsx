import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <div className="App">
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
