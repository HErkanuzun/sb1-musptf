import React from 'react'
import HeroSection from './HeroSection'
import SearchBar from './SearchBar'
import FeaturedTours from './FeaturedTours'
import PopularDestinations from './PopularDestinations'
import Testimonials from './Testimonials'
import InstagramFeed from './InstagramFeed'
import BookingForm from './BookingForm'

const heroSlides = [
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

const HomePage = () => {
  return (
    <>
      <HeroSection slides={heroSlides} />
      <SearchBar />
      <FeaturedTours />
      <PopularDestinations />
      <Testimonials />
      <InstagramFeed />
      <BookingForm />
    </>
  )
}

export default HomePage