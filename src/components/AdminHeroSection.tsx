import React, { useState } from 'react'
import { ArrowLeft, Plus, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialSlides = [
  {
    title: "Discover Amazing Places",
    subtitle: "Unforgettable travel experiences await you",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Luxury Adventures",
    subtitle: "Experience the world in style",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Cultural Expeditions",
    subtitle: "Immerse yourself in diverse cultures",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

const AdminHeroSection = () => {
  const [slides, setSlides] = useState(initialSlides)
  const [editingSlide, setEditingSlide] = useState(null)
  const [newSlide, setNewSlide] = useState({ title: '', subtitle: '', imageUrl: '' })

  const handleEdit = (index) => {
    setEditingSlide({ ...slides[index], index })
  }

  const handleSave = () => {
    if (editingSlide) {
      const updatedSlides = [...slides]
      updatedSlides[editingSlide.index] = { title: editingSlide.title, subtitle: editingSlide.subtitle, imageUrl: editingSlide.imageUrl }
      setSlides(updatedSlides)
      setEditingSlide(null)
    } else {
      setSlides([...slides, newSlide])
      setNewSlide({ title: '', subtitle: '', imageUrl: '' })
    }
  }

  const handleDelete = (index) => {
    const updatedSlides = slides.filter((_, i) => i !== index)
    setSlides(updatedSlides)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">Hero Section Management</h2>
      <div className="mb-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">{editingSlide ? 'Edit Slide' : 'Add New Slide'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            className="p-2 border rounded w-full"
            value={editingSlide ? editingSlide.title : newSlide.title}
            onChange={(e) => editingSlide ? setEditingSlide({...editingSlide, title: e.target.value}) : setNewSlide({...newSlide, title: e.target.value})}
          />
          <input
            type="text"
            placeholder="Subtitle"
            className="p-2 border rounded w-full"
            value={editingSlide ? editingSlide.subtitle : newSlide.subtitle}
            onChange={(e) => editingSlide ? setEditingSlide({...editingSlide, subtitle: e.target.value}) : setNewSlide({...newSlide, subtitle: e.target.value})}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded w-full md:col-span-2"
            value={editingSlide ? editingSlide.imageUrl : newSlide.imageUrl}
            onChange={(e) => editingSlide ? setEditingSlide({...editingSlide, imageUrl: e.target.value}) : setNewSlide({...newSlide, imageUrl: e.target.value})}
          />
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingSlide ? 'Save Changes' : 'Add Slide'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slides.map((slide, index) => (
          <div key={index} className="border p-4 rounded bg-white shadow">
            <img src={slide.imageUrl} alt={slide.title} className="w-full h-32 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{slide.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{slide.subtitle}</p>
            <div className="flex justify-between">
              <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-2 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-2 rounded">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminHeroSection