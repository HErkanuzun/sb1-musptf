import React from 'react'
import HeroSection from './HeroSection'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <div>
      <HeroSection 
        title="About Luxury Tours" 
        subtitle="Creating unforgettable travel experiences since 1990"
        imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <p className="text-lg mb-8">
            Luxury Tours has been at the forefront of premium travel experiences for over three decades. 
            Founded in 1990 by a group of passionate travelers, we've made it our mission to provide 
            unforgettable journeys to the world's most captivating destinations.
          </p>
          <p className="text-lg mb-8">
            Our team of expert travel planners work tirelessly to craft bespoke itineraries that cater 
            to the unique preferences of each of our clients. From luxurious accommodations to exclusive 
            experiences, we ensure that every aspect of your trip is nothing short of extraordinary.
          </p>
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default About