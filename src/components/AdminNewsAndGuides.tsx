import React, { useState } from 'react'
import { ArrowLeft, Edit, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

const initialArticles = [
  { id: 1, title: "Top 10 Hidden Gems in Southeast Asia", excerpt: "Discover the lesser-known wonders of Southeast Asia...", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
  { id: 2, title: "A Foodie's Guide to Italian Cuisine", excerpt: "Embark on a culinary journey through Italy's diverse regions...", image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
]

const AdminNewsAndGuides = () => {
  const [articles, setArticles] = useState(initialArticles)
  const [editingArticle, setEditingArticle] = useState(null)
  const [newArticle, setNewArticle] = useState({ title: '', excerpt: '', image: '' })

  const handleEdit = (article) => {
    setEditingArticle(article)
  }

  const handleDelete = (id) => {
    setArticles(articles.filter(a => a.id !== id))
  }

  const handleSave = () => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? editingArticle : a))
      setEditingArticle(null)
    } else {
      setArticles([...articles, { ...newArticle, id: Date.now() }])
      setNewArticle({ title: '', excerpt: '', image: '' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admin" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4">News & Guides Management</h2>
      <div className="mb-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">{editingArticle ? 'Edit Article' : 'Add New Article'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            className="p-2 border rounded w-full"
            value={editingArticle ? editingArticle.title : newArticle.title}
            onChange={(e) => editingArticle ? setEditingArticle({...editingArticle, title: e.target.value}) : setNewArticle({...newArticle, title: e.target.value})}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded w-full"
            value={editingArticle ? editingArticle.image : newArticle.image}
            onChange={(e) => editingArticle ? setEditingArticle({...editingArticle, image: e.target.value}) : setNewArticle({...newArticle, image: e.target.value})}
          />
          <textarea
            placeholder="Excerpt"
            className="p-2 border rounded w-full md:col-span-2"
            value={editingArticle ? editingArticle.excerpt : newArticle.excerpt}
            onChange={(e) => editingArticle ? setEditingArticle({...editingArticle, excerpt: e.target.value}) : setNewArticle({...newArticle, excerpt: e.target.value})}
          />
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingArticle ? 'Save Changes' : 'Add Article'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="border p-4 rounded bg-white shadow">
            <img src={article.image} alt={article.title} className="w-full h-32 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
            <div className="flex justify-between mt-2">
              <button onClick={() => handleEdit(article)} className="bg-blue-500 text-white p-2 rounded">
                <Edit size={18} />
              </button>
              <button onClick={() => handleDelete(article.id)} className="bg-red-500 text-white p-2 rounded">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminNewsAndGuides