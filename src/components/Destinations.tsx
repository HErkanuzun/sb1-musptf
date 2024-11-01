import React from 'react'
import HeroSection from './HeroSection'
import PopularDestinations from './PopularDestinations'
import FeaturedTours from './FeaturedTours'
import BookingForm from './BookingForm'

const Destinations = () => {
  return (
    <div>
      <HeroSection 
        title="Explore Our Destinations" 
        subtitle="Discover the world's most breathtaking locations"
        imageUrl="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <PopularDestinations />
      <FeaturedTours />
      <BookingForm />
    </div>
  )
}

export default Destinations