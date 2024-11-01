import React, { useState } from 'react'
import { ArrowLeft, Edit, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialTestimonials = [
  { id: 1, name: 'John Doe', quote: 'The best travel experience of my life!', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 2, name: 'Jane Smith', quote: 'Unforgettable memories and top-notch service.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
]

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [editingTestimonial, setEditingTestimonial] = useState(null)
  const [newTestimonial, setNewTestimonial] = useState({ name: '', quote: '', rating: 5, image: '' })

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial)
  }

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  const handleSave = () => {
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t))
      setEditingTestimonial(null)
    } else {
      setTestimonials([...testimonials, { ...newTestimonial, id: Date.now() }])
      setNewTestimonial({ name: '', quote: '', rating: 5, image: '' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Testimonials Management</h2>
      <div className="mb-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded w-full"
            value={editingTestimonial ? editingTestimonial.name : newTestimonial.name}
            onChange={(e) => editingTestimonial ? setEditingTestimonial({...editingTestimonial, name: e.target.value}) : setNewTestimonial({...newTestimonial, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded w-full"
            value={editingTestimonial ? editingTestimonial.image : newTestimonial.image}
            onChange={(e) => editingTestimonial ? setEditingTestimonial({...editingTestimonial, image: e.target.value}) : setNewTestimonial({...newTestimonial, image: e.target.value})}
          />
          <textarea
            placeholder="Quote"
            className="p-2 border rounded w-full md:col-span-2"
            value={editingTestimonial ? editingTestimonial.quote : newTestimonial.quote}
            onChange={(e) => editingTestimonial ? setEditingTestimonial({...editingTestimonial, quote: e.target.value}) : setNewTestimonial({...newTestimonial, quote: e.target.value})}
          />
          <div className="flex items-center">
            <label className="mr-2">Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              className="p-2 border rounded w-16"
              value={editingTestimonial ? editingTestimonial.rating : newTestimonial.rating}
              onChange={(e) => editingTestimonial ? setEditingTestimonial({...editingTestimonial, rating: parseInt(e.target.value)}) : setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
            />
          </div>
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingTestimonial ? 'Save Changes' : 'Add Testimonial'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded bg-white shadow">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2" />
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{testimonial.quote}</p>
            <p>Rating: {testimonial.rating}/5</p>
            <div className="flex justify-between mt-2">
              <button onClick={() => handleEdit(testimonial)} className="bg-blue-500 text-white p-2 rounded">
                <Edit size={18} />
              </button>
              <button onClick={() => handleDelete(testimonial.id)} className="bg-red-500 text-white p-2 rounded">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminTestimonials