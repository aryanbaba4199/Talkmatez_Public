import React from "react";
import { Link } from "react-router-dom"; // Correcting Link import for React Router DOM
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Location Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center">
            <HiLocationMarker className="text-yellow-400 mr-2" /> Location
          </h4>
          <p>
            4/381 Ground floor Muppatta Kunnummal, Ekarool, Unnikulam, Calicut
            673574, India
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Quick Links</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link to="/aboutus" className="hover:text-yellow-400">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Product Help Section */}
        <div className="">
          <h4 className="text-lg font-bold text-white">Product Help</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/faqs" className="hover:text-yellow-400">
              FAQ's
            </Link>
            <Link to="/privacy" className="hover:text-yellow-400">
              Privacy & Policy
            </Link>
            <Link to="/tnc" className="hover:text-yellow-400">
              Terms and Conditions
            </Link>
            <Link to="/refund" className="hover:text-yellow-400">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-xl hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Copyright © 2024 TalkMatez Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
