interface Image {
  asset: {
    url: string;
  };
}

export interface ICreator {
  _id: string;
  name: string;
  address: string;
  slug: {
    current: string;
  };
}

export interface ICollection {
  _id: string;
  title: string;
  address: string;
  description: string;
  nftCollectionName: string;
  mainImage: Image;
  previewImage: Image;
  slug: {
    current: string;
  };
  creator: ICreator;
}
