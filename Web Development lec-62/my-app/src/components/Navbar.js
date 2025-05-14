import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">YourLogo</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><a href="#" className="block text-white">Home</a></li>
            <li><a href="#" className="block text-white">About</a></li>
            <li><a href="#" className="block text-white">Services</a></li>
            <li><a href="#" className="block text-white">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar
