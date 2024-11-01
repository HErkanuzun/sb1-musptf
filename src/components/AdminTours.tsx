import React, { useState, useEffect } from 'react'
import { Plus, Edit, Trash, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock data for tours (replace with actual API calls in a real application)
const initialTours = [
  { id: 1, name: 'European Adventure', price: 2999, duration: '10 days', type: 'Luxury', rating: 5, featured: true },
  { id: 2, name: 'Safari Expedition', price: 1999, duration: '7 days', type: 'Adventure', rating: 4, featured: false },
  { id: 3, name: 'Asian Cultural Tour', price: 3499, duration: '14 days', type: 'Cultural', rating: 5, featured: true },
]

const AdminTours = () => {
  const [tours, setTours] = useState(initialTours)
  const [editingTour, setEditingTour] = useState(null)
  const [newTour, setNewTour] = useState({ name: '', price: '', duration: '', type: '', rating: 5, featured: false })

  const handleEdit = (tour) => {
    setEditingTour(tour)
  }

  const handleDelete = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }

  const handleSave = () => {
    if (editingTour) {
      setTours(tours.map(tour => tour.id === editingTour.id ? editingTour : tour))
      setEditingTour(null)
    } else {
      setTours([...tours, { ...newTour, id: Date.now() }])
      setNewTour({ name: '', price: '', duration: '', type: '', rating: 5, featured: false })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Tours Management</h2>
      <div className="mb-4 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">{editingTour ? 'Edit Tour' : 'Add New Tour'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Tour Name"
            className="p-2 border rounded"
            value={editingTour ? editingTour.name : newTour.name}
            onChange={(e) => editingTour ? setEditingTour({...editingTour, name: e.target.value}) : setNewTour({...newTour, name: e.target.value})}
          />
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded"
            value={editingTour ? editingTour.price : newTour.price}
            onChange={(e) => editingTour ? setEditingTour({...editingTour, price: parseFloat(e.target.value)}) : setNewTour({...newTour, price: parseFloat(e.target.value)})}
          />
          <input
            type="text"
            placeholder="Duration"
            className="p-2 border rounded"
            value={editingTour ? editingTour.duration : newTour.duration}
            onChange={(e) => editingTour ? setEditingTour({...editingTour, duration: e.target.value}) : setNewTour({...newTour, duration: e.target.value})}
          />
          <input
            type="text"
            placeholder="Type"
            className="p-2 border rounded"
            value={editingTour ? editingTour.type : newTour.type}
            onChange={(e) => editingTour ? setEditingTour({...editingTour, type: e.target.value}) : setNewTour({...newTour, type: e.target.value})}
          />
          <div className="flex items-center">
            <label className="mr-2">Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              className="p-2 border rounded w-16"
              value={editingTour ? editingTour.rating : newTour.rating}
              onChange={(e) => editingTour ? setEditingTour({...editingTour, rating: parseInt(e.target.value)}) : setNewTour({...newTour, rating: parseInt(e.target.value)})}
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Featured:</label>
            <input
              type="checkbox"
              checked={editingTour ? editingTour.featured : newTour.featured}
              onChange={(e) => editingTour ? setEditingTour({...editingTour, featured: e.target.checked}) : setNewTour({...newTour, featured: e.target.checked})}
            />
          </div>
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingTour ? 'Save Changes' : 'Add Tour'}
        </button>
      </div>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Duration</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Rating</th>
              <th className="text-left p-3">Featured</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map(tour => (
              <tr key={tour.id} className="border-t">
                <td className="p-3">{tour.name}</td>
                <td className="p-3">${tour.price}</td>
                <td className="p-3">{tour.duration}</td>
                <td className="p-3">{tour.type}</td>
                <td className="p-3">{tour.rating}</td>
                <td className="p-3">{tour.featured ? 'Yes' : 'No'}</td>
                <td className="p-3">
                  <button onClick={() => handleEdit(tour)} className="text-blue-500 mr-2"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(tour.id)} className="text-red-500"><Trash size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTours