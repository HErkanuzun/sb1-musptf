import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialSettings = {
  siteName: 'Luxury Tours',
  siteDescription: 'Experience the world in style with our exclusive and custom-designed tours.',
  logoUrl: '/path/to/logo.png',
  primaryColor: '#3B82F6',
  secondaryColor: '#1E40AF',
  facebookUrl: 'https://facebook.com/luxurytours',
  twitterUrl: 'https://twitter.com/luxurytours',
  instagramUrl: 'https://instagram.com/luxurytours'
}

const AdminSettings = () => {
  const [settings, setSettings] = useState(initialSettings)

  const handleSave = () => {
    // In a real application, you would save this to a backend
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">General Settings</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Site Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Site Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={settings.siteDescription}
              onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Logo URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={settings.logoUrl}
              onChange={(e) => setSettings({...settings, logoUrl: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Primary Color</label>
            <input
              type="color"
              className="w-full p-2 border rounded"
              value={settings.primaryColor}
              onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Secondary Color</label>
            <input
              type="color"
              className="w-full p-2 border rounded"
              value={settings.secondaryColor}
              onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Facebook URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={settings.facebookUrl}
              onChange={(e) => setSettings({...settings, facebookUrl: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Twitter URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={settings.twitterUrl}
              onChange={(e) => setSettings({...settings, twitterUrl: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Instagram URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={settings.instagramUrl}
              onChange={(e) => setSettings({...settings, instagramUrl: e.target.value})}
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

export default AdminSettings