import React from "react";

interface IGradientImageProps {
  imgSrc: string;
  alt: string;
}

const GradientImage = (props: IGradientImageProps) => {
  const { imgSrc, alt } = props;
  return (
    <div className="p-2 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl">
      <img src={imgSrc} alt={alt} className="rounded-xl w-44 lg:h-96 lg:w-72" />
    </div>
  );
};

export default GradientImage;
