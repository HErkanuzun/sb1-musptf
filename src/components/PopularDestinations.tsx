import React from 'react'

const destinations = [
  { id: 1, name: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 2, name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 3, name: 'Machu Picchu, Peru', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 4, name: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }
]

const PopularDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative overflow-hidden rounded-lg shadow-md group">
              <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations