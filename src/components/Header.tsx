import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Compass, User, ShoppingCart, Settings, LogOut, Globe } from 'lucide-react'
import useAuth from '../hooks/useAuth'

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsProfileOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Compass className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <span className="text-xl font-bold dark:text-white">Luxury Tours</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/tours" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Tours</Link></li>
            <li><Link to="/destinations" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Destinations</Link></li>
            <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
            <li><Link to="/news-and-guides" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">News & Guides</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            <li>
              <Link 
                to="/ai-globe" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Globe className="w-4 h-4 mr-1" />
                AI Explorer
              </Link>
            </li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <img
                src={user?.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block">{user?.userType === 'business' ? 'Business Owner' : 'My Profile'}</span>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50">
                <Link
                  to={user?.userType === 'business' ? '/admin' : '/profile'}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  {user?.userType === 'business' ? 'Dashboard' : 'Profile'}
                </Link>
                <Link
                  to="/basket"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  My Basket
                </Link>
                <Link
                  to="/profile/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header