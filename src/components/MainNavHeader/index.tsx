import React from "react";
import { Link } from "react-router-dom";

interface IMainNavHeaderProps {
  className?: string;
}

const MainNavHeader = (props: IMainNavHeaderProps) => {
  const { className = "" } = props;

  return (
    <Link to="/">
      <h1 className={`text-lg font-extralight lg:text-xl ${className}`}>
        The{" "}
        <span className="font-extrabold underline decoration-pink-600/50">
          Friendly
        </span>{" "}
        NFT marketplace
      </h1>
    </Link>
  );
};

export default MainNavHeader;
