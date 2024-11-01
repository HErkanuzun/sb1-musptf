import React, { useState } from 'react'
import { Star } from 'lucide-react'

const tours = [
  {
    id: 1,
    name: 'European Adventure',
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '10 days',
    type: 'Luxury',
    rating: 5,
    price: 2999,
    featured: true,
    badge: 'Most Popular'
  },
  {
    id: 2,
    name: 'Safari Expedition',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '7 days',
    type: 'Adventure',
    rating: 4,
    price: 1999,
    featured: false,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Asian Cultural Tour',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '14 days',
    type: 'Cultural',
    rating: 5,
    price: 3499,
    featured: true,
    badge: 'Limited Spots'
  },
  {
    id: 4,
    name: 'Caribbean Cruise',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '7 days',
    type: 'Luxury',
    rating: 4,
    price: 1799,
    featured: false,
    badge: null
  },
  {
    id: 5,
    name: 'South American Trek',
    image: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '12 days',
    type: 'Adventure',
    rating: 5,
    price: 2599,
    featured: false,
    badge: null
  },
  {
    id: 6,
    name: 'Northern Lights Expedition',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    duration: '5 days',
    type: 'Adventure',
    rating: 5,
    price: 1999,
    featured: true,
    badge: 'Limited Offer'
  },
]

const AllTourPackages = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')

  const filteredTours = tours.filter(tour => 
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'All' || tour.type === filterType)
  )

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4">All Tour Packages</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <input
            type="text"
            placeholder="Search tours..."
            className="p-2 border rounded w-full md:w-64 mb-4 md:mb-0"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded w-full md:w-auto"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Luxury">Luxury</option>
            <option value="Adventure">Adventure</option>
            <option value="Cultural">Cultural</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
                {tour.badge && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm">{tour.badge}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{tour.duration}</span>
                  <span className="text-gray-600">{tour.type}</span>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(tour.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">From ${tour.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Tour Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllTourPackages