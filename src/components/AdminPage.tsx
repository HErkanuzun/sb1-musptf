import React from 'react'
import { Link } from 'react-router-dom'
import { Settings, Map, Image, Compass, Users, FileText, Mail } from 'lucide-react'

const AdminPage = () => {
  const sections = [
    { id: 'tours', name: 'Tours Management', icon: <Compass className="w-6 h-6" /> },
    { id: 'hero', name: 'Hero Section', icon: <Image className="w-6 h-6" /> },
    { id: 'destinations', name: 'Destinations', icon: <Map className="w-6 h-6" /> },
    { id: 'testimonials', name: 'Testimonials', icon: <Users className="w-6 h-6" /> },
    { id: 'news', name: 'News & Guides', icon: <FileText className="w-6 h-6" /> },
    { id: 'contact', name: 'Contact Information', icon: <Mail className="w-6 h-6" /> },
    { id: 'settings', name: 'General Settings', icon: <Settings className="w-6 h-6" /> },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={`/admin/${section.id}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center"
          >
            <div className="mr-4 text-blue-600">{section.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{section.name}</h2>
              <p className="text-gray-600">Manage {section.name.toLowerCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminPage