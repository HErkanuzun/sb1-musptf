import React from 'react'

const BookingForm = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Plan Your Dream Vacation</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="destination" className="block mb-2 font-semibold">Destination</label>
              <input type="text" id="destination" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="date" className="block mb-2 font-semibold">Travel Date</label>
              <input type="date" id="date" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block mb-2 font-semibold">Additional Information</label>
            <textarea id="message" rows={4} className="w-full p-3 border border-gray-300 rounded" required></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300">
            Submit Booking Request
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingForm