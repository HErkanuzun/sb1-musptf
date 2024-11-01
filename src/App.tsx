import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AllTourPackages from './components/AllTourPackages'
import TourDetails from './components/TourDetails'
import Destinations from './components/Destinations'
import About from './components/About'
import NewsAndGuides from './components/NewsAndGuides'
import Contact from './components/Contact'
import BookingPage from './components/BookingPage'
import PaymentPage from './components/PaymentPage'
import AdminPage from './components/AdminPage'
import AdminTours from './components/AdminTours'
import AdminHeroSection from './components/AdminHeroSection'
import AdminDestinations from './components/AdminDestinations'
import AdminTestimonials from './components/AdminTestimonials'
import AdminNewsAndGuides from './components/AdminNewsAndGuides'
import AdminContact from './components/AdminContact'
import AdminSettings from './components/AdminSettings'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import PrivateRoute from './components/PrivateRoute'
import AIGlobeTours from './components/AIGlobeTours'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<AllTourPackages />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-and-guides" element={<NewsAndGuides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/profile/edit" element={<PrivateRoute><ProfileEdit /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
          <Route path="/admin/tours" element={<PrivateRoute><AdminTours /></PrivateRoute>} />
          <Route path="/admin/hero" element={<PrivateRoute><AdminHeroSection /></PrivateRoute>} />
          <Route path="/admin/destinations" element={<PrivateRoute><AdminDestinations /></PrivateRoute>} />
          <Route path="/admin/testimonials" element={<PrivateRoute><AdminTestimonials /></PrivateRoute>} />
          <Route path="/admin/news" element={<PrivateRoute><AdminNewsAndGuides /></PrivateRoute>} />
          <Route path="/admin/contact" element={<PrivateRoute><AdminContact /></PrivateRoute>} />
          <Route path="/admin/settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />
          <Route path="/ai-globe" element={<AIGlobeTours />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App