import heroImg from '../assets/images/our-dr-banner.png';
import banner from '../assets/images/our-dr-footer.jpeg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch, FaTimes, FaChevronLeft, FaChevronRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';

function FindDoctor() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 8;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const doctors = [
        {
            id: 1,
            name: "Dr. Nikhil Pawar",
            specialization: "Neuro Sciences",
            image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600",
            experience: "12+ years",
            availability: "Available Today",
            rating: 4.8
        },
        {
            id: 2,
            name: "Dr. Rajat Gandhi",
            specialization: "Neuro Sciences",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
            experience: "8+ years",
            availability: "Available Tomorrow",
            rating: 4.6
        },
        {
            id: 3,
            name: "Dr. Radhika Jain",
            specialization: "Oncology Surgeon",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
            experience: "15+ years",
            availability: "Available Today",
            rating: 4.9
        },
        {
            id: 4,
            name: "Dr. Amit Sharma",
            specialization: "Cardio-Thoracic & Vascular Surgeon",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
            experience: "20+ years",
            availability: "Available Today",
            rating: 4.9
        },
        {
            id: 5,
            name: "Dr. Priya Mehta",
            specialization: "Plastic Surgery",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
            experience: "10+ years",
            availability: "Available Tomorrow",
            rating: 4.7
        },
        {
            id: 6,
            name: "Dr. Sanjay Gupta",
            specialization: "Pediatric Surgeon",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
            experience: "14+ years",
            availability: "Available Today",
            rating: 4.8
        },
        {
            id: 7,
            name: "Dr. Anjali Desai",
            specialization: "Nephrology",
            image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600",
            experience: "9+ years",
            availability: "Available Today",
            rating: 4.5
        },
        {
            id: 8,
            name: "Dr. Vikram Singh",
            specialization: "Gastroenterology",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
            experience: "11+ years",
            availability: "Available Tomorrow",
            rating: 4.7
        },
        {
            id: 9,
            name: "Dr. Neha Kapoor",
            specialization: "Urology",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
            experience: "7+ years",
            availability: "Available Today",
            rating: 4.6
        },
        {
            id: 10,
            name: "Dr. Rajesh Khanna",
            specialization: "Cardiology",
            image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600",
            experience: "18+ years",
            availability: "Available Today",
            rating: 4.9
        },
        {
            id: 11,
            name: "Dr. Sneha Reddy",
            specialization: "Orthopaedics",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
            experience: "13+ years",
            availability: "Available Tomorrow",
            rating: 4.8
        },
        {
            id: 12,
            name: "Dr. Manoj Kumar",
            specialization: "Gynaecology",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
            experience: "16+ years",
            availability: "Available Today",
            rating: 4.7
        },
        {
            id: 13,
            name: "Dr. Meera Patel",
            specialization: "Pulmonologist",
            image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600",
            experience: "10+ years",
            availability: "Available Today",
            rating: 4.8
        },
        {
            id: 14,
            name: "Dr. Arjun Singh",
            specialization: "Psychiatrist",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
            experience: "12+ years",
            availability: "Available Tomorrow",
            rating: 4.6
        },
        {
            id: 15,
            name: "Dr. Priyanka Sharma",
            specialization: "Ophthalmology",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
            experience: "9+ years",
            availability: "Available Today",
            rating: 4.7
        },
        {
            id: 16,
            name: "Dr. Vikas Gupta",
            specialization: "Pain Specialist",
            image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600",
            experience: "15+ years",
            availability: "Available Today",
            rating: 4.9
        }
    ];

    const categories = [
        "All",
        "Neuro Sciences",
        "Oncology Surgeon",
        "Cardio-Thoracic & Vascular Surgeon",
        "Plastic Surgery",
        "Pediatric Surgeon",
        "Nephrology",
        "Gastroenterology",
        "Urology",
        "Oncology",
        "Pediatrics",
        "Cardiology",
        "Orthopaedics",
        "Gynaecology",
        "Pulmonologist",
        "Psychiatrist",
        "Ophthalmology",
        "Pain Specialist",
        "Arthroscopy"
    ];

    // Filter doctors based on category and search term
    const filteredDoctors = useMemo(() => {
        let filtered = doctors;
        
        if (activeCategory !== "All") {
            filtered = filtered.filter(
                (doctor) => doctor.specialization === activeCategory
            );
        }
        
        if (searchTerm.trim()) {
            filtered = filtered.filter(
                (doctor) =>
                    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        return filtered;
    }, [activeCategory, searchTerm]);

    // Pagination
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchTerm]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    const getVisibleCategories = () => {
        if (showAllCategories) return categories;
        return categories.slice(0, 8);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return (
            <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                ))}
                {hasHalfStar && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id="halfGradient">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#E5E7EB" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                ))}
                <span className="ml-0.5 sm:ml-1 text-xs sm:text-sm text-gray-600">{rating}</span>
            </div>
        );
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Responsive Hero Section */}
                <section data-aos="fade-down" className="relative min-h-[100vh] overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                    {/* Background Blur Elements - Hidden on mobile */}
                    <div className="absolute top-[-100px] left-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-120px] right-[-100px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-white opacity-20 rounded-full blur-3xl"></div>

                    <div className="relative max-w-7xl top-24 md:top-24 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
                            {/* Content Side */}
                            <div data-aos="fade-right" className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 pb-10 md:pb-0">
                                {/* Badge */}
                                <div className="inline-block mx-auto lg:mx-0">
                                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white">
                                        Trusted Medical Experts
                                    </span>
                                </div>

                                {/* Heading */}
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
                                    Find the <span className="text-yellow-500 inline-block">Best Doctors</span>
                                    <br className="hidden sm:block" />
                                    <span className="text-white"> For Your Health</span>
                                </h1>

                                {/* Subtext */}
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                                    Connect with top specialists across multiple departments and get
                                    world-class healthcare support tailored to your needs.
                                </p>
                            </div>

                            {/* Image Side */}
                            <div data-aos="fade-left" className="lg:w-1/2 flex justify-center relative">
                                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-xl">
                                    <img
                                        src={heroImg}
                                        alt="Medical Team"
                                        className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Curve (Optional Premium Touch) */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg
                            viewBox="0 0 500 80"
                            preserveAspectRatio="none"
                            className="w-full h-16 sm:h-20"
                        >
                            <path
                                d="M0,40 C150,80 350,0 500,40 L500,80 L0,80 Z"
                                className="fill-white"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* Responsive Search Section */}
                <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Search Bar */}
                        <div data-aos="fade-up" className="mb-6 sm:mb-8">
                            <div className="relative max-w-2xl mx-auto">
                                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                    <FaSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by doctor name or specialization..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center"
                                    >
                                        <FaTimes className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div data-aos="fade-up" className="mb-6 sm:mb-8">
                            <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                                    Browse by Specialty
                                </h2>
                                {categories.length > 8 && (
                                    <button
                                        onClick={() => setShowAllCategories(!showAllCategories)}
                                        className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center gap-1"
                                    >
                                        {showAllCategories ? (
                                            <>Show Less <FaChevronLeft className="h-2 w-2 sm:h-3 sm:w-3" /></>
                                        ) : (
                                            <>View All <FaChevronRight className="h-2 w-2 sm:h-3 sm:w-3" /></>
                                        )}
                                    </button>
                                )}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {getVisibleCategories().map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategoryClick(category)}
                                        className={`
                                            px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap
                                            ${activeCategory === category
                                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                                            }
                                        `}
                                    >
                                        {category}
                                        {activeCategory === category && category !== "All" && (
                                            <span className="ml-1.5 sm:ml-2 inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs bg-white text-blue-600 rounded-full">
                                                {filteredDoctors.length}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div data-aos="zoom-in" className="mb-4 sm:mb-6 flex justify-between items-center flex-wrap gap-2">
                            <p className="text-xs sm:text-sm text-gray-600">
                                Showing <span className="font-semibold text-gray-900">{currentDoctors.length}</span> of{' '}
                                <span className="font-semibold text-gray-900">{filteredDoctors.length}</span> doctors
                            </p>
                            {activeCategory !== "All" && (
                                <button
                                    onClick={() => setActiveCategory("All")}
                                    className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>

                        {/* Doctors Grid */}
                        {currentDoctors.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                                    {currentDoctors.map((doctor, index) => (
                                        <div
                                            key={index} data-aos="zoom-in"
                                            className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                        >
                                            <div className="relative overflow-hidden">
                                                <img
                                                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                />
                                                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                                                    {doctor.availability}
                                                </div>
                                            </div>
                                            
                                            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                                                <div className="mb-2 sm:mb-3">
                                                    {renderStars(doctor.rating)}
                                                </div>
                                                
                                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 mb-0.5 sm:mb-1">
                                                    {doctor.name}
                                                </h3>
                                                
                                                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1 sm:mb-2">
                                                    {doctor.specialization}
                                                </p>
                                                
                                                <p className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4">
                                                    Experience: {doctor.experience}
                                                </p>
                                                
                                                {/* Social Icons */}
                                                <div className="flex gap-1.5 sm:gap-2 md:gap-3 justify-center pt-3 sm:pt-4 border-t border-gray-100">
                                                    <button onClick={scrollToTop} className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-blue-800 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110">
                                                        <FaFacebookF size={10} className="sm:text-xs" />
                                                    </button>
                                                    <button onClick={scrollToTop} className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-blue-800 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110">
                                                        <FaTwitter size={10} className="sm:text-xs" />
                                                    </button>
                                                    <button onClick={scrollToTop} className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-blue-800 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110">
                                                        <FaInstagram size={10} className="sm:text-xs" />
                                                    </button>
                                                    <button onClick={scrollToTop} className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-blue-800 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110">
                                                        <FaLinkedinIn size={10} className="sm:text-xs" />
                                                    </button>
                                                </div>
                                                
                                                <button className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                                                    Book Appointment
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-3 mt-8 sm:mt-10 md:mt-12">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <FaChevronLeft className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                                        </button>
                                        
                                        <div className="flex gap-1 sm:gap-2">
                                            {[...Array(totalPages)].map((_, i) => {
                                                const pageNumber = i + 1;
                                                if (
                                                    pageNumber === 1 ||
                                                    pageNumber === totalPages ||
                                                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                                ) {
                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => setCurrentPage(pageNumber)}
                                                            className={`
                                                                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg transition-all text-xs sm:text-sm md:text-base
                                                                ${currentPage === pageNumber
                                                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                                                                    : "border border-gray-300 hover:bg-gray-50"
                                                                }
                                                            `}
                                                        >
                                                            {pageNumber}
                                                        </button>
                                                    );
                                                } else if (
                                                    pageNumber === currentPage - 2 ||
                                                    pageNumber === currentPage + 2
                                                ) {
                                                    return <span key={i} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center text-xs sm:text-sm">...</span>;
                                                }
                                                return null;
                                            })}
                                        </div>
                                        
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <FaChevronRight className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12 sm:py-16">
                                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🔍</div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">No doctors found</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4">
                                    We couldn't find any doctors matching your search criteria.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setActiveCategory("All");
                                    }}
                                    className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Responsive Backseat Section */}
                <section data-aos="fade-up" className="bg-white">
                    <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] w-[90%] sm:w-[85%] md:w-[80%] mx-auto rounded-t-2xl sm:rounded-t-3xl md:rounded-t-4xl bg-cover bg-center flex flex-col items-center justify-center px-4" 
                         style={{ backgroundImage: `url(${banner})` }}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center max-w-2xl mx-auto mb-2 sm:mb-3 md:mb-4">
                            Don't Let Your Health Take a Backseat!
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center max-w-xl mx-auto">
                            Schedule an appointment with one of our experienced medical professionals today!
                        </p>
                    </div>
                </section>
            </div>

            {/* Add bounce animation */}
            <style jsx="true">{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite;
                }
            `}</style>
        </Layout>
    );
}

export default FindDoctor;