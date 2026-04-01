import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/hospital-logo.png';

const Footer = () => {
    const navigate = useNavigate();
    
    return (
        <footer className="bg-gray-900 text-white pt-8 md:pt-12 sm:pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4 md:gap-10 lg:gap-12 mb-8 md:mb-12 text-left sm:text-left">
                    {/* Brand Column */}
                    <div data-aos="fade-right" className="flex flex-col items-left sm:items-start">
                        <Link to="/" className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-white flex items-center gap-2 mb-4 md:mb-6">
                            <img src={logo} alt="Logo of the hospital" className='w-8 h-8 md:w-10 md:h-10 rounded-lg' onClick={() => {navigate('/')}} />
                            City Hospital
                        </Link>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-lg lg:text-lg leading-relaxed mb-4 md:mb-6 max-w-sm">
                            Providing world-class healthcare with compassion, advanced technology, and a dedicated team of specialists committed to your well-being.
                        </p>
                        <div className="flex flex-wrap justify-start sm:justify-start gap-4">
                            {/* Social Icons Placeholders */}
                            <a data-aos="zoom-in" href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a data-aos="zoom-in" href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a data-aos="zoom-in" href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 gap-6'>
                        {/* Quick Links */}
                    <div data-aos="fade-up">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-6">Quick Links</h3>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg">
                            <li>
                                <Link to="/" className="relative inline-block group text-gray-400 hover:text-white transition-colors">
                                    Home
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="relative inline-block group text-gray-400 hover:text-white transition-colors">
                                    About Us
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/services" className="relative inline-block group text-gray-400 hover:text-white transition-colors">
                                    Our Services
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/doctors" className="relative inline-block group text-gray-400 hover:text-white transition-colors">
                                    Find a Doctor
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="relative inline-block group text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div data-aos="fade-up">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-6">Treatments</h3>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg">
                            <li><Link to="/cardiology" className="text-gray-400 hover:text-white transition-colors">Cardiology</Link></li>
                            <li><Link to="/urology" className="text-gray-400 hover:text-white transition-colors">urology</Link></li>
                            <li><Link to="/orthopaedics" className="text-gray-400 hover:text-white transition-colors">Orthopedics</Link></li>
                            <li><Link to="/oncology" className="text-gray-400 hover:text-white transition-colors">Oncology</Link></li>
                            <li><Link to="/gynaecology" className="text-gray-400 hover:text-white transition-colors">Gynecology</Link></li>
                        </ul>
                    </div>
                    </div>

                    {/* Contact Info */}
                    <div data-aos="zoom-in" className="flex flex-col items-left sm:items-start">
                        <h3 className="text-md md:text-lg font-bold text-white mb-3 md:mb-6">Contact Info</h3>
                        <ul className="space-y-2 md:space-y-4 text-gray-400 text-left sm:text-left text-xs sm:text-sm md:text-base lg:text-lg">
                            <li className="flex items-left sm:items-start justify-start sm:justify-start gap-3">
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400">IT Park, Viman Nagar, Pune, Maharashtra, India.</span>
                            </li>
                            <li className="flex items-left sm:items-start justify-start sm:justify-start gap-3">
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400">+91 9876543210</span>
                            </li>
                            <li className="flex items-left sm:items-start justify-start sm:justify-start gap-3">
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400">info@cityhospital.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-4 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} City Hospital. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-6">
                        <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
