import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreditCard, Calendar, Lock, User, Check } from 'lucide-react'

const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const { bookingDetails, tour } = location.state || {}

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentDetails(prev => ({ ...prev, [name]: value }))
  }

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you'd process the payment here
    alert('Payment processed successfully!')
    navigate('/')
  }

  const totalAmount = tour ? tour.price * (bookingDetails?.guests || 1) : 0

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-8">Complete Your Payment</h1>
              
              {/* Booking Summary */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Tour Package:</p>
                    <p className="font-semibold">{tour?.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Duration:</p>
                    <p className="font-semibold">{tour?.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Number of Guests:</p>
                    <p className="font-semibold">{bookingDetails?.guests}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Travel Date:</p>
                    <p className="font-semibold">{bookingDetails?.date}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Amount:</span>
                    <span className="text-2xl font-bold text-blue-600">${totalAmount}</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="cardNumber"
                      maxLength={19}
                      value={formatCardNumber(paymentDetails.cardNumber)}
                      onChange={(e) => setPaymentDetails({
                        ...paymentDetails,
                        cardNumber: e.target.value.replace(/\s/g, '')
                      })}
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Expiry Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVV</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="cvv"
                        maxLength={3}
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Name on Card</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="nameOnCard"
                      value={paymentDetails.nameOnCard}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center group"
                >
                  Complete Payment
                  <Check className="ml-2 transform group-hover:scale-110 transition" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage