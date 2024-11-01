import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock data for tours
const mockTours = [
  { id: 1, name: 'European Adventure', category: 'Luxury', description: 'Explore the best of Europe', price: '$3,999', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 2, name: 'Safari Expedition', category: 'Adventure', description: 'Witness African wildlife up close', price: '$4,499', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 3, name: 'Asian Cultural Tour', category: 'Cultural', description: 'Immerse in rich Asian traditions', price: '$3,299', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 4, name: 'Caribbean Cruise', category: 'Luxury', description: 'Sail through tropical paradises', price: '$2,999', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 5, name: 'South American Trek', category: 'Adventure', description: 'Hike through diverse landscapes', price: '$3,799', image: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
]

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [searchResults, setSearchResults] = useState<typeof mockTours>([])

  const handleSearch = () => {
    const filteredResults = mockTours.filter(tour => 
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All Categories' || tour.category === category)
    )
    setSearchResults(filteredResults)
  }

  return (
    <div className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search tours, destinations..."
            className="flex-grow p-3 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="p-3 border border-gray-300 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Luxury</option>
            <option>Adventure</option>
            <option>Cultural</option>
          </select>
          <button 
            className="bg-blue-600 text-white p-3 rounded flex items-center"
            onClick={handleSearch}
          >
            <Search className="mr-2" />
            Search
          </button>
        </div>
        {searchResults.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Search Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((tour) => (
                <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                      <Link to="/booking" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar