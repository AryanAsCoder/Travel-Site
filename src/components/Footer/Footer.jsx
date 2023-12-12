// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: contact@triplove.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none grid gap-3">
            <li><a href="/" className="text-black">Home</a></li>
            <li><a href="/destinations" className="text-black">Destinations</a></li>
            <li><a href="/about" className="text-black">About</a></li>
            <li><a href="/contact" className="text-black">Contact</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="grid gap-3">
            <a href="#" className="text-black">Facebook</a>
            <a href="#" className="text-black">Twitter</a>
            <a href="#" className="text-black">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 TravelWorld. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
