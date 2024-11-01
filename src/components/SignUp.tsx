import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, MapPin, Compass } from 'lucide-react'

const SignUp = () => {
  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    visitedPlaces: [],
    wishlist: [],
    businessName: '',
    businessLicense: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
              <button
                className={`px-4 py-2 rounded-md ${userType === 'customer' ? 'bg-white shadow' : ''}`}
                onClick={() => setUserType('customer')}
              >
                Customer
              </button>
              <button
                className={`px-4 py-2 rounded-md ${userType === 'business' ? 'bg-white shadow' : ''}`}
                onClick={() => setUserType('business')}
              >
                Business Owner
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {userType === 'customer' && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Places You've Visited</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter places, separated by commas"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Places You Want to Visit</label>
                  <div className="relative">
                    <Compass className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter places, separated by commas"
                    />
                  </div>
                </div>
              </>
            )}

            {userType === 'business' && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Business License Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp