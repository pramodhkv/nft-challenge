import React from "react";

interface IShowLoaderProps {
  text: string;
}

const ShowLoader = (props: IShowLoaderProps) => {
  const { text } = props;
  return (
    <>
      <p className="pt-5 text-lg text-green-500 animate-pulse">{text}</p>

      <img
        className="h-80 w-80 object-contain"
        src="/images/loader.gif"
        alt="loading"
      />
    </>
  );
};

export default ShowLoader;
