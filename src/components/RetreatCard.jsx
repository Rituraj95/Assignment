
import React from 'react';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={retreat.image || "https://via.placeholder.com/300x200"}
        alt={retreat.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{retreat.title}</h3>
        <p className="text-gray-600">{retreat.description}</p>
        <p className="text-gray-500 mt-2">Date: {new Date(retreat.date).toLocaleDateString()}</p>
        <p className="text-gray-500 mt-2">{retreat.locaction}</p>

      </div>
    </div>
  );
};

export default RetreatCard;
