import React from 'react';
import { tncData } from '../../Context/privacyData';
import { FaFileContract } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center text-yellow-500 text-5xl">
          <FaFileContract />
        </div>
        <h1 className="text-4xl font-bold text-gray-700 mt-4">Terms and Conditions</h1>
        <p className="text-gray-600 mt-2">
          Please read our terms and conditions carefully before using our services.
        </p>
      </div>

      {/* Terms Content */}
      <div className="bg-gray-100 shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {tncData.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 text-xl mr-3">•</span>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Terms;
