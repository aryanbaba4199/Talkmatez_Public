import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { refundData } from '../../Context/privacyData'
const Refund = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center text-yellow-500 text-5xl">
          <FaMoneyBill />
        </div>
        <h1 className="text-4xl font-bold text-gray-700 mt-4">Cancellation and Refund policy </h1>
        <p className="text-gray-600 mt-2">
        This cancellation policy outlines about how you can cancel or seek a refund for a product / service that you have purchased through the Platform.  Under this policy: 
        </p>
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {refundData.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 text-xl mr-3">•</span>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Refund