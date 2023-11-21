import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button for mobile */}
      <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        X
      </button>

      {/* NavBar */}
      <div className="fixed left-0 top-0 h-full ${isOpen ? 'w-64' : 'w-0'} bg-black transition-width duration-300 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="text-white text-2xl font-bold p-4 font-tinos">Ash Avery</div>
          {/* Navigation Links */}
          <ul className="w-full">
            <li className="w-full">
              <Link to="/" className="text-white font-tinos block px-4 py-2 hover:shadow-sm hover:shadow-white ">
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link to="/about" className="text-white font-tinos block px-4 py-2 hover:shadow-sm hover:shadow-white">
                About
              </Link>
            </li>
            <li className="w-full">
              <Link to="/writing-portfolio" className="text-white font-tinos block px-4 py-2 hover:shadow-sm hover:shadow-white">
                Writing
              </Link>
            </li>
            <li className="w-full">
              <Link to="/contact" className="text-white font-tinos block px-4 py-2 hover:shadow-sm hover:shadow-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
