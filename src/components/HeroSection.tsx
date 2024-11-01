import React, { useState, useEffect } from 'react'

interface HeroSlide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides, title, subtitle, imageUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideData = slides || (title && subtitle && imageUrl ? [{ title, subtitle, imageUrl }] : []);

  useEffect(() => {
    if (slideData.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slideData.length]);

  if (slideData.length === 0) {
    return null; // or return a default hero section
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0 z-10' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url('${slide.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateX(${(index - currentSlide) * 100}%) perspective(1000px) rotateY(${(index - currentSlide) * -15}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl mb-8">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      {slideData.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slideData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroSection