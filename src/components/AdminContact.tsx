import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialContactInfo = {
  address: '123 Travel Street, Wanderlust City, WC 12345',
  phone: '(123) 456-7890',
  email: 'info@luxurytours.com',
  officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
}

const AdminContact = () => {
  const [contactInfo, setContactInfo] = useState(initialContactInfo)

  const handleSave = () => {
    // In a real application, you would save this to a backend
    console.log('Saving contact information:', contactInfo)
    alert('Contact information saved successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Contact Information Management</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Address</label>
            <textarea
              className="w-full p-2 border rounded"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Phone</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Office Hours</label>
            <textarea
              className="w-full p-2 border rounded"
              value={contactInfo.officeHours}
              onChange={(e) => setContactInfo({...contactInfo, officeHours: e.target.value})}
            />
          </div>
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default AdminContact