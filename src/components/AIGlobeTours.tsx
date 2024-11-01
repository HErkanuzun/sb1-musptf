import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';
import { Compass, Loader } from 'lucide-react';
import { tours } from './toursData';
import { feature } from 'topojson-client';

interface CountryInfo {
  name: string;
  code: string;
  lat: number;
  lng: number;
}

const AIGlobeTours: React.FC = () => {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [suggestedTours, setSuggestedTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize globe
    const globe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .width(containerRef.current.clientWidth)
      .height(window.innerHeight - 100)
      .polygonsData([])
      .polygonCapColor(() => 'rgba(200, 200, 200, 0.3)')
      .polygonSideColor(() => 'rgba(150, 150, 150, 0.3)')
      .polygonStrokeColor(() => '#111')
      .polygonAltitude(0.01)
      .onPolygonClick(async (polygon: any) => {
        const countryInfo = {
          name: polygon.properties.NAME,
          code: polygon.properties.ISO_A2,
          lat: polygon.properties.LAT,
          lng: polygon.properties.LON
        };
        handleCountryClick(countryInfo);
      });

    // Load country data
    Promise.all([
      fetch('https://unpkg.com/world-atlas/countries-50m.json').then(r => r.json()),
      d3.json('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
    ]).then(([worldData, countryData]) => {
      const countries = feature(worldData, worldData.objects.countries);
      globe.polygonsData(countries.features);
    });

    globeRef.current = globe(containerRef.current);

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        globe.width(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCountryClick = async (countryInfo: CountryInfo) => {
    setSelectedCountry(countryInfo);
    setLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      // Filter tours based on location (in a real app, this would be AI-powered)
      const relevantTours = tours.filter(tour => 
        tour.location.toLowerCase().includes(countryInfo.name.toLowerCase())
      );
      setSuggestedTours(relevantTours);
      setLoading(false);
    }, 1500);

    // Point globe to selected country
    if (globeRef.current) {
      globeRef.current.pointOfView({
        lat: countryInfo.lat,
        lng: countryInfo.lng,
        altitude: 1.5
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-gray-900 p-6">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Compass className="mr-2" /> AI Travel Explorer
        </h1>
        <p className="text-gray-300 mt-2">
          Click on any country to discover AI-curated tour suggestions
        </p>
      </div>

      <div ref={containerRef} className="absolute inset-0" />

      {selectedCountry && (
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-white/10 backdrop-blur-lg p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            {selectedCountry.name}
          </h2>

          {loading ? (
            <div className="flex items-center justify-center h-32">
              <Loader className="w-8 h-8 animate-spin text-white" />
            </div>
          ) : suggestedTours.length > 0 ? (
            <div className="space-y-4">
              {suggestedTours.map((tour) => (
                <div
                  key={tour.id}
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
              ))}
            </div>
          ) : (
            <p className="text-white">
              No tours available for this destination yet. Check back soon!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AIGlobeTours;