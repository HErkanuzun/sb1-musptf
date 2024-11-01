import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:herkanuzun@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to the newsletter subscription list.`
    window.location.href = mailtoLink
    setSubscribeStatus('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Luxury Tours</h3>
            <p className="mb-4">Experience the world in style with our exclusive and custom-designed tours.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/herkanuzun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="https://twitter.com/herkanuzun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter />
              </a>
              <a href="https://instagram.com/herkanuzun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/tours" className="hover:text-blue-400">Tours</Link></li>
              <li><Link to="/destinations" className="hover:text-blue-400">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Travel Street</p>
            <p>Wanderlust City, WC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: herkanuzun@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest travel updates and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-2 rounded-l text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition duration-300">
                <Mail />
              </button>
            </form>
            {subscribeStatus && (
              <p className="mt-2 text-sm text-green-400">{subscribeStatus}</p>
            )}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Luxury Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer