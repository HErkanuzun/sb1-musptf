import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import * as d3 from 'd3';
import { Compass } from 'lucide-react';
import { feature } from 'topojson-client';
import { tours } from '../toursData';
import { Tour } from '../../types/tours';
import { CountryInfo } from '../../types/globe';
import CountryPanel from './CountryPanel';

const AIGlobeTours: React.FC = () => {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [suggestedTours, setSuggestedTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

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

    Promise.all([
      fetch('https://unpkg.com/world-atlas/countries-50m.json').then(r => r.json()),
      d3.json('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
    ]).then(([worldData, countryData]) => {
      const countries = feature(worldData, worldData.objects.countries);
      globe.polygonsData(countries.features);
    });

    globeRef.current = globe(containerRef.current);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

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

  const handleCountryClick = (countryInfo: CountryInfo) => {
    setSelectedCountry(countryInfo);
    setLoading(true);

    setTimeout(() => {
      const relevantTours = tours.filter(tour => {
        if (!tour.location || !countryInfo.name) return false;
        return tour.location.toLowerCase().includes(countryInfo.name.toLowerCase());
      });
      setSuggestedTours(relevantTours);
      setLoading(false);
    }, 1500);

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
        <CountryPanel
          country={selectedCountry}
          tours={suggestedTours}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AIGlobeTours;