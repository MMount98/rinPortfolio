import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, link, linkTitle, title }) => {
  return (
    <div className="relative w-96 h-96 rounded overflow-hidden">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src={imageUrl} alt={title} />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-50">
        <div className="font-tinos text-xl text-white mb-2">{title}</div>
        <Link to={link} className="text-white text-lg font-tinos italic hover:underline">
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default Card;
