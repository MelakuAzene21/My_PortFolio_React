// Card.js
import React from "react";

const Card = ({ title, description, image }) => {
    return (
        <div className="bg-[#ccd6f6] rounded-lg p-6 shadow-lg flex flex-col items-center">
            {image && <img src={image} alt={title} className="w-24 h-24 mb-4" />}
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default Card;
