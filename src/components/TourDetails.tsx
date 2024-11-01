import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Clock, MapPin, Star, Users, Calendar, Heart } from 'lucide-react'
import { tours } from './toursData'

const TourDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const tour = tours.find(t => t.id === Number(id))

  if (!tour) return <div>Tour not found</div>

  const handleBookNow = () => {
    navigate('/booking', { state: { tour } })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{tour.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-1" />
              {tour.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-1" />
              {tour.duration}
            </div>
            <div className="flex">
              {[...Array(tour.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-6">{tour.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">2-12 People</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{tour.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{tour.location}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Star className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="font-semibold">{tour.rating}/5</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              {tour.itinerary?.map((day, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-lg mb-2">Day {index + 1}</h3>
                  <p className="text-gray-600">{day}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="text-3xl font-bold text-blue-600 mb-4">
                ${tour.price}
                <span className="text-sm text-gray-500 ml-2">per person</span>
              </div>
              <button
                onClick={handleBookNow}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
              >
                Book Now
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                <Heart className="mr-2" />
                Add to Wishlist
              </button>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-2">Contact our travel experts</p>
                <p className="font-semibold">+1 (234) 567-8900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetails