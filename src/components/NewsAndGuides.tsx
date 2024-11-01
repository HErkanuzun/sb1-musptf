import React from 'react'
import HeroSection from './HeroSection'

const articles = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt: "Discover the lesser-known wonders of Southeast Asia that are off the beaten path...",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    title: "A Foodie's Guide to Italian Cuisine",
    excerpt: "Embark on a culinary journey through Italy's diverse regions and flavors...",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    title: "Sustainable Travel: Eco-Friendly Tourism Tips",
    excerpt: "Learn how to minimize your environmental impact while exploring the world...",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

const NewsAndGuides = () => {
  return (
    <div>
      <HeroSection 
        title="Travel News & Guides" 
        subtitle="Stay informed and inspired for your next adventure"
        imageUrl="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsAndGuides