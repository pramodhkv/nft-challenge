import { useEffect, useState } from "react";
import { ICollection } from "../../typings";
import sanityClient from "../../sanity";
import { useContract, useAddress } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import toast from "react-hot-toast";

export const useNFTDropManager = (collectionId: string) => {
  const loggedInAddress = useAddress();

  const [loading, setLoading] = useState<boolean>(true);
  const [collectionDetails, setCollectionDetails] =
    useState<ICollection | null>(null);
  const [claimedNFTs, setClaimedNFTs] = useState<BigNumber>();
  const [totalNFTs, setTotalNFTs] = useState<BigNumber>();
  const [priceWithSymbol, setPriceWithSymbol] = useState<string>();

  const { contract } = useContract(collectionDetails?.address, "nft-drop");

  const fetchCollectionDetails = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "collection" && slug.current == "${collectionId}"]{
            _id,
            title,
            address,
            description,
            nftCollectionName,
            mainImage,
            previewImage,
            slug,
            creator->{
            _id,
            name,
            address,
            slug,
            image,
            bio
            }
        }`
    );

    setCollectionDetails(data[0]);
  };

  const fetchClaimedAndTotalNFTs = async () => {
    setLoading(true);
    const claimedNFTs = await contract?.totalClaimedSupply();
    const totalNFTs = await contract?.totalSupply();

    setClaimedNFTs(claimedNFTs);
    setTotalNFTs(totalNFTs);
    setLoading(false);
  };

  const fetchPriceInfo = async () => {
    const claimCondition = await contract?.claimConditions.getActive();

    setPriceWithSymbol(
      claimCondition?.currencyMetadata.displayValue +
        " " +
        claimCondition?.currencyMetadata.symbol
    );
  };

  const mintNFT = () => {
    if (!contract || !loggedInAddress) {
      return;
    }

    setLoading(true);

    contract
      .claimTo(loggedInAddress, 1)
      .then(async (tx) => {
        const receipt = tx[0].receipt;
        const claimedTokenId = tx[0].id;
        const claimedNFT = tx[0].data;

        console.log("receipt", receipt);
        console.log("claimedTokenId", claimedTokenId);
        console.log("claimedNFT", claimedNFT);
        setLoading(false);
        toast.success("YaaaYYY... NFT Minted Successfully");
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        toast.error("Error Minting NFT");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!collectionId) {
      return;
    }

    fetchCollectionDetails();
  }, [collectionId]);

  useEffect(() => {
    if (!contract) {
      return;
    }

    fetchClaimedAndTotalNFTs();
    fetchPriceInfo();
  }, [contract]);

  return {
    collectionDetails,
    loading,
    claimedNFTs,
    totalNFTs,
    priceWithSymbol,
    mintNFT,
  };
};
