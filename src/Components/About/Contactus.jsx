import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold text-[#15892e] mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 text-lg text-center mb-8">
        We'd love to hear from you! Reach out to us through the following
        channels:
      </p>

      <div className="w-full gap-4 bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
        {/* Phone Section */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-2xl text-[#15892e]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600">+91 8943889288</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl text-[#15892e]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">info@talkmatezapp.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-2xl text-[#15892e]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600">
              4/381 Ground Floor, Muppatta Kunnummal Ekarool Unnikulam,
              <br />
              Calicut 673574, India
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500">
          We’re here to help. Feel free to contact us anytime!
        </p>
      </div>
    </div>
  );
};

export default Contactus;
