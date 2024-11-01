import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Clock, MapPin, Star } from 'lucide-react'

const tours = [
  {
    id: 1,
    name: 'Luxury Paris Getaway',
    description: 'Experience the city of love in style with exclusive access to iconic landmarks and luxury accommodations.',
    price: 2999,
    duration: '7 days',
    location: 'Paris, France',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    name: 'Tropical Bali Retreat',
    description: 'Relax in paradise with beachfront villas, spa treatments, and cultural excursions.',
    price: 1999,
    duration: '10 days',
    location: 'Bali, Indonesia',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    name: 'African Safari Adventure',
    description: 'Witness nature\'s wonders up close with guided safari tours and luxury camping.',
    price: 3499,
    duration: '8 days',
    location: 'Kenya',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 4,
    name: 'Greek Islands Cruise',
    description: 'Sail through crystal-clear waters visiting multiple Greek islands with premium amenities.',
    price: 2499,
    duration: '12 days',
    location: 'Greek Islands',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 5,
    name: 'Japanese Cultural Tour',
    description: 'Immerse yourself in ancient traditions with guided tours of temples, tea ceremonies, and more.',
    price: 3299,
    duration: '14 days',
    location: 'Japan',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 6,
    name: 'Peruvian Andes Expedition',
    description: 'Hike through breathtaking landscapes including Machu Picchu with expert guides.',
    price: 2799,
    duration: '9 days',
    location: 'Peru',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531092464160-d4574fe7c2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
]

const FeaturedTours = () => {
  const navigate = useNavigate()

  const handleBookNow = (tour) => {
    navigate('/booking', { state: { tour } })
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-blue-600 font-semibold">
                  ${tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="mr-4">{tour.duration}</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex mb-4">
                  {[...Array(tour.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <button
                  onClick={() => handleBookNow(tour)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedTours