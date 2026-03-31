import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-64 h-full bg-white shadow-lg flex flex-col">

      {/* Sidebar Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Menu</h2>

        <button
          className="lg:hidden"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col p-4 space-y-3">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/specialities" className="hover:text-blue-600">Specialities</Link>
        <Link to="/departments" className="hover:text-blue-600">Departments</Link>
        <Link to="/our-doctor" className="hover:text-blue-600">Find Doctor</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>

    </div>
  );
};

export default Sidebar;