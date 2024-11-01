import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Calendar, Users, Clock, MapPin, ArrowRight, ShoppingCart } from 'lucide-react'

interface TourDetails {
  id: number;
  name: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  description: string;
}

const BookingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [selectedTour, setSelectedTour] = useState<TourDetails | null>(null)
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1,
  })

  // Fallback tour data if none is provided
  const defaultTour = {
    id: 1,
    name: 'European Adventure',
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 2999,
    duration: '10 days',
    location: 'Multiple European Cities',
    description: 'Experience the best of Europe with our carefully curated tour package.'
  }

  useEffect(() => {
    // Show animation when component mounts
    setIsCartVisible(true)
    // Use tour data from location state or fallback to default
    setSelectedTour(location.state?.tour || defaultTour)
  }, [location.state])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookingDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/payment', { 
      state: { 
        bookingDetails,
        tour: selectedTour
      }
    })
  }

  if (!selectedTour) return null

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tour Details Section */}
          <div className={`transform transition-all duration-700 ${isCartVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={selectedTour.image} 
                alt={selectedTour.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{selectedTour.name}</h1>
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{selectedTour.duration}</span>
                  <MapPin className="w-5 h-5 ml-6 mr-2" />
                  <span>{selectedTour.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{selectedTour.description}</p>
                <div className="text-3xl font-bold text-blue-600">
                  ${selectedTour.price}
                  <span className="text-sm text-gray-500 ml-2">per person</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className={`transform transition-all duration-700 delay-200 ${isCartVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <ShoppingCart className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Book Your Tour</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={bookingDetails.date}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      value={bookingDetails.guests}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center group"
                >
                  Proceed to Payment
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage