import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tour } from '../../types/tours';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition cursor-pointer"
      onClick={() => navigate(`/tour/${tour.id}`)}
    >
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-white mb-2">
        {tour.name}
      </h3>
      <p className="text-gray-200 text-sm mb-2">
        {tour.duration} • ${tour.price}
      </p>
      <p className="text-gray-300 text-sm">
        {tour.description.substring(0, 100)}...
      </p>
    </div>
  );
};

export default TourCard;