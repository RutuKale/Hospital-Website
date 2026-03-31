import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/hospital-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen])

  const navLinks = [

    { name: 'About', href: '/about' },
    { name: 'Specialities', href: '/specialities' },
    {
      name: 'Department',
      // href: '#',
      subLinks: [
        { name: 'OPD', href: '/departments/opd' },
        { name: 'Pharmacy', href: '/departments/pharmacy' },
        { name: 'Physiotherapy', href: '/departments/physiotherapy' },
        { name: 'Pathology', href: '/departments/pathology' },
        { name: 'Radiology', href: '/departments/radiology' },
      ]
    },
    { name: 'Find Doctor', href: '/our-doctor' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`${isOpen ? "top-0 w-[100%]" : "top-4 w-[92%]"} fixed left-1/2 -translate-x-1/2 transition-all duration-300 max-w-7xl bg-[#FDFBD4] backdrop-blur-md z-50 shadow-lg border-b border-gray-200 rounded-full
    ${scrolled ? "bg-white/70 border-transparent" : "bg-[#FFF]"}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between md:h-22 h-15">

          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer transition-transform hover:scale-105">
            <img className="h-10 w-auto" src={logo} alt="Hospital Logo" />
          </Link>

          {/* Middle: Desktop Nav Links */}
          <div className="hidden md:flex absolute left-1/3 -translate-x-1/4 space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <div className="relative group text-gray-700 hover:text-blue-600 px-3 py-2 sm:text-sm lg:text-lg font-bold flex items-center gap-1 cursor-pointer">
                    {link.name}

                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                    {/* ✅ ADD THIS */}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="relative group text-gray-700 hover:text-blue-600 px-3 py-2 sm:text-sm lg:text-lg font-bold flex items-center gap-1"
                  >
                    {link.name}

                    {/* ✅ ALSO ADD HERE for consistency */}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                )}

                {/* Dropdown */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="absolute left-0 top-full mt-2 w-48 z-50 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300">
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 ${isOpen ? "right-0" : "-right-72"} bottom-0 h-screen w-full bg-white shadow-xl transform transition-transform duration-300 z-50 md:hidden
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="p-5 border-b flex justify-between items-center">
              <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
                <img className="h-10 w-auto" src={logo} alt="Logo" />
              </Link>

              <button onClick={() => setIsOpen(false)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name} className="">
                  {/* Main Link */}
                  <div
                    className="flex justify-between items-center py-2 cursor-pointer hover:bg-white hover:rounded-md hover:px-4 hover:duration-300"
                    onClick={() =>
                      link.subLinks
                        ? toggleDropdown(link.name)
                        : setIsOpen(false)
                    }
                  >
                    {link.subLinks ? (
                      <span className="text-gray-700 font-medium">
                        {link.name}
                      </span>
                    ) : (
                      <Link to={link.href} className="text-gray-700 font-medium">
                        {link.name}
                      </Link>
                    )}

                    {link.subLinks && (
                      <span className="text-gray-500">
                        {activeDropdown === link.name ? "-" : "+"}
                      </span>
                    )}
                  </div>

                  {/* Sub Links */}
                  {link.subLinks && activeDropdown === link.name && (
                    <div className="ml-4 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:bg-white hover:rounded-md hover:px-4 hover:duration-300"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;