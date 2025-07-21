import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'before-after', label: 'Before & After' }
  ]

  // Placeholder gallery items - in a real app, these would come from a CMS or database
  const galleryItems = [
    {
      id: 1,
      category: 'residential',
      type: 'before-after',
      title: 'Residential Home Windows',
      description: 'Complete window cleaning transformation',
      beforeImage: '/images/photos/before1.jpg',
      afterImage: '/images/photos/after1.jpeg',
      location: 'Local Residential'
    },
    {
      id: 2,
      category: 'residential',
      type: 'single',
      title: 'Professional Window Cleaning',
      description: 'Mason providing quality service',
      image: '/images/photos/wash1.jpeg',
      location: 'On-Site Service'
    },
    {
      id: 3,
      category: 'residential',
      type: 'before-after',
      title: 'House Window Cleaning',
      description: 'Professional window cleaning results',
      beforeImage: '/images/photos/before2.jpeg',
      afterImage: '/images/photos/after2.jpg',
      location: 'Residential Home'
    },
    {
      id: 4,
      category: 'residential',
      type: 'single',
      title: 'Quality Equipment & Technique',
      description: 'Using professional tools for perfect results',
      image: '/images/photos/wash2.jpeg',
      location: 'Service in Action'
    },
    {
      id: 5,
      category: 'residential',
      type: 'single',
      title: 'Beautiful Home Exterior',
      description: 'Crystal clear windows enhance curb appeal',
      image: '/images/photos/house1.jpeg',
      location: 'Residential Property'
    },
    {
      id: 6,
      category: 'residential',
      type: 'single',
      title: 'ClearPoint Window Services',
      description: 'Professional window cleaning service',
      image: '/images/photos/wash3.jpeg',
      location: 'Quality Service'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => 
        item.category === selectedCategory || 
        (selectedCategory === 'before-after' && item.type === 'before-after')
      )

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Homeowner",
      rating: 5,
      text: "The before and after difference is incredible! Our windows look brand new.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "David Kim",
      role: "Store Manager",
      rating: 5,
      text: "Professional service that keeps our storefront looking pristine every week.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Rachel Thompson",
      role: "Property Manager",
      rating: 5,
      text: "ClearPoint has been maintaining our commercial property for 2 years. Excellent work!",
      image: "/images/testimonial-3.jpg"
    }
  ]

  return (
    <Layout>
      <SEO
        title="Gallery - See Our Professional Window Cleaning Work"
        description="View before and after photos of our professional window cleaning services for residential and commercial properties."
        keywords="window cleaning gallery, before after photos, residential cleaning, commercial cleaning"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the amazing transformation our professional window cleaning services can make for your property
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {item.type === 'before-after' ? (
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <div className="aspect-square bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500">Before Photo</span>
                        </div>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-square bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600">After Photo</span>
                        </div>
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Project Photo</span>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      📍 {item.location}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.category === 'residential' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from satisfied customers about our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-500 text-sm">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-4">▶️</div>
                <p>Customer Video #1</p>
                <p className="text-sm text-gray-300">Sarah's Home Cleaning Experience</p>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-4">▶️</div>
                <p>Customer Video #2</p>
                <p className="text-sm text-gray-300">Commercial Property Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to See These Results at Your Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free quote today and join our gallery of satisfied customers
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors">
            Get Free Quote
          </button>
        </div>
      </section>
    </Layout>
  )
}