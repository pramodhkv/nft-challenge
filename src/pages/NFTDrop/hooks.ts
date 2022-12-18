import { useEffect, useState } from "react";
import { ICollection } from "../../typings";
import sanityClient from "../../sanity";

export const useFetchCollectionDetails = (collectionId: string) => {
  const [collectionDetails, setCollectionDetails] =
    useState<ICollection | null>(null);

  useEffect(() => {
    if (!collectionId) {
      return;
    }

    sanityClient
      .fetch(
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
      )
      .then((data) => {
        setCollectionDetails(data[0]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [collectionId]);

  return { collectionDetails };
};
