import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-black  shadow-lg bg-black">
      <div className="max-w-7xl mx-auto px-6 py-0 flex justify-between items-center">
        <div className="w-28 rounded-2xl overflow-hidden mt-5 mb-2">
          <img src="./logo.jpg" alt="" className=' w-full h-full '/>
        </div>

        <nav className="hidden md:flex space-x-8">
          {['/', '/about', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link
                key={index}
                to={path}
                onClick={closeMenu}
                className="relative text-white  font-medium transition duration-300 ease-in-out hover:text-sky-200"
              >
                {label}
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-500 transition active:scale-90">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Slide-In Drawer */}
      <aside
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-sky-200">
          <h2 className="text-xl font-bold text-black">Menu</h2>
          <button onClick={closeMenu} className="text-black hover:text-gray-700 transition active:scale-90">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col mt-6 px-6 space-y-5">
          {['/', '/about', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link
                key={index}
                to={path}
                onClick={closeMenu}
                className={`text-black hover:text-gray-700 text-lg font-semibold transform transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                {label}
              </Link>
            );
          })}
          <a href='https://gautamsolar.com/' target='_blank' className="mt-10 flex justify-center">
            <img src="/gautamLogo.png" alt="Logo" className="w-40" />
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
