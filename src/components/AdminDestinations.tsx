import React, { useState } from 'react'
import { ArrowLeft, Plus, Trash, Edit } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialDestinations = [
  { id: 1, name: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 2, name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 3, name: 'Machu Picchu, Peru', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { id: 4, name: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }
]

const AdminDestinations = () => {
  const [destinations, setDestinations] = useState(initialDestinations)
  const [editingDestination, setEditingDestination] = useState(null)
  const [newDestination, setNewDestination] = useState({ name: '', image: '' })

  const handleEdit = (destination) => {
    setEditingDestination(destination)
  }

  const handleDelete = (id) => {
    setDestinations(destinations.filter(dest => dest.id !== id))
  }

  const handleSave = () => {
    if (editingDestination) {
      setDestinations(destinations.map(dest => dest.id === editingDestination.id ? editingDestination : dest))
      setEditingDestination(null)
    } else {
      setDestinations([...destinations, { ...newDestination, id: Date.now() }])
      setNewDestination({ name: '', image: '' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Destinations Management</h2>
      <div className="mb-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">{editingDestination ? 'Edit Destination' : 'Add New Destination'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Destination Name"
            className="p-2 border rounded w-full"
            value={editingDestination ? editingDestination.name : newDestination.name}
            onChange={(e) => editingDestination ? setEditingDestination({...editingDestination, name: e.target.value}) : setNewDestination({...newDestination, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded w-full"
            value={editingDestination ? editingDestination.image : newDestination.image}
            onChange={(e) => editingDestination ? setEditingDestination({...editingDestination, image: e.target.value}) : setNewDestination({...newDestination, image: e.target.value})}
          />
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingDestination ? 'Save Changes' : 'Add Destination'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <div key={destination.id} className="border p-4 rounded bg-white shadow">
            <img src={destination.image} alt={destination.name} className="w-full h-32 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{destination.name}</h3>
            <div className="flex justify-between mt-2">
              <button onClick={() => handleEdit(destination)} className="bg-blue-500 text-white p-2 rounded">
                <Edit size={18} />
              </button>
              <button onClick={() => handleDelete(destination.id)} className="bg-red-500 text-white p-2 rounded">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDestinations