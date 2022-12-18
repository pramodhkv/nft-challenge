import { useEffect, useState } from "react";
import sanityClient from "../../sanity";
import { ICollection } from "../../typings";

export const useFetchCollections = () => {
  const [collections, setCollections] = useState<ICollection[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'collection']{
            _id,
              title,
              address,
              description,
              nftCollectionName,
              mainImage {
              asset
              },
            previewImage {
              asset
            },
            slug {
              current
            },
            creator-> {
              _id,
                name,
                address,
                slug {
                current
                }
            }
          }`
      )
      .then((data: ICollection[]) => {
        setCollections(data);
      })
      .catch(console.error);
  }, []);

  return { collections };
};
