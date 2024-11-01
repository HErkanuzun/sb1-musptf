import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import useAuth from '../hooks/useAuth'

const SignIn = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [userType, setUserType] = useState('customer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Reset theme when component mounts
    document.documentElement.classList.remove('dark')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mock authentication
    const userData = {
      id: '1',
      name: userType === 'business' ? 'Business Owner' : 'Customer',
      email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }

    login(userData, userType as 'customer' | 'business')

    // Apply dark theme for business users
    if (userType === 'business') {
      document.documentElement.classList.add('dark')
    }

    navigate(userType === 'business' ? '/admin' : '/profile')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Welcome Back</h2>

          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              <button
                className={`px-4 py-2 rounded-md ${
                  userType === 'customer' 
                    ? 'bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setUserType('customer')}
              >
                Customer
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  userType === 'business' 
                    ? 'bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setUserType('business')}
              >
                Business Owner
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline dark:text-blue-400">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn