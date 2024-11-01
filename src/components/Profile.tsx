import React from 'react'
import { Link } from 'react-router-dom'
import { Edit2, MapPin, Calendar, Mail, Phone } from 'lucide-react'
import useAuth from '../hooks/useAuth'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="ml-6">
                  <h1 className="text-3xl font-bold">{user?.name || 'User Name'}</h1>
                  <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
                </div>
              </div>
              <Link
                to="/profile/edit"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Bookings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">European Adventure</h3>
                    <p className="text-sm text-gray-600">Departing: June 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Asian Cultural Tour</h3>
                    <p className="text-sm text-gray-600">Departing: August 22, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="ml-3">{user?.email || 'user@example.com'}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="ml-3">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="ml-3">123 Travel Street, City, Country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile