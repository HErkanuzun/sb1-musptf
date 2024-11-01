import React from 'react';
import { Loader } from 'lucide-react';
import TourCard from './TourCard';
import { Tour } from '../../types/tours';
import { CountryInfo } from '../../types/globe';

interface CountryPanelProps {
  country: CountryInfo;
  tours: Tour[];
  loading: boolean;
}

const CountryPanel: React.FC<CountryPanelProps> = ({ country, tours, loading }) => {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-96 bg-white/10 backdrop-blur-lg p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-white mb-4">
        {country.name}
      </h2>

      {loading ? (
        <div className="flex items-center justify-center h-32">
          <Loader className="w-8 h-8 animate-spin text-white" />
        </div>
      ) : tours.length > 0 ? (
        <div className="space-y-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <p className="text-white">
          No tours available for this destination yet. Check back soon!
        </p>
      )}
    </div>
  );
};

export default CountryPanel;