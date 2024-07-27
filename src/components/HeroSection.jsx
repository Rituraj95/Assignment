
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-200 py-8 px-4 text-center">
      <img
        src="https://via.placeholder.com/800x400" 
        alt="Discover Your Inner Peace"
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-semibold mt-4">Discover Your Inner Peace</h2>
      <p className="text-gray-700 mt-2">
        Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.
      </p>
    </div>
  );
};

export default HeroSection;
