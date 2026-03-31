import React from 'react';
import contact from '../assets/images/contact.avif';
import phone from '../assets/icons/phone.svg';
import email from '../assets/icons/email.svg';
import location from '../assets/icons/location.svg';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="overflow-x-hidden">
                {/* Hero Section */}
                <section data-aos="zoom-in" className="relative min-h-screen overflow-hidden">
                    {/* Background Gradient */}
                    <div data-aos="zoom-in" className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-50"></div>
                    
                    {/* Decorative Elements - Hidden on mobile */}
                    <div className="hidden md:block absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="hidden md:block absolute bottom-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="relative max-w-7xl top-16 md:top-8 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                            {/* Content Side (left) */}
                            <div data-aos="fade-right" className="lg:w-1/2 text-center md:mt-10 lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
                                {/* Badge */}
                                <div className="inline-flex bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mx-auto lg:mx-0">
                                    Available 24/7
                                </div>
                                
                                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                                    Your{' '}
                                    <span className="relative inline-block">
                                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-lg opacity-30"></span>
                                        <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                            Health
                                        </span>
                                    </span>{' '}
                                    Our Priority
                                    <br />
                                    <span className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl block mt-2">
                                        Trusted Care for Every Patient
                                    </span>
                                </h1>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    Kindly reach us to get the fastest response and treatment. Our team of experts is ready to assist you with compassion and excellence.
                                </p>
                            </div>

                            {/* Image Side (right) */}
                            <div data-aos="fade-left" className="lg:w-1/2 relative mt-0 lg:mt-0 animation-delay-300">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>
                                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl">
                                        <img
                                            src={contact}
                                            alt="Medical Team"
                                            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover rounded-xl sm:rounded-2xl transform transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Floating Cards - Hidden on mobile, visible on tablet+ */}
                                <div className="hidden sm:flex absolute -bottom-4 md:-bottom-6 -left-4 md:-left-10 bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-2 md:p-4 flex items-center gap-2 md:gap-3 animate-bounce-slow">
                                    <div className="inline-block bg-green-100 p-1.5 md:p-2 rounded-full">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-xs text-gray-500">Response Time</p>
                                        <p className="text-xs md:text-sm font-semibold text-gray-800">&lt; 30 minutes</p>
                                    </div>
                                </div>

                                <div className="hidden sm:block absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-2 md:p-4 animate-bounce-slow animation-delay-1000">
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <span className="text-xs md:text-sm font-bold text-gray-800">4.9</span>
                                        <span className="text-[10px] md:text-xs text-gray-500">(2k+ reviews)</span>
                                    </div>
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
                                className="fill-blue-200"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* Animations */}
                <style jsx="true">{`
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes blob {
                        0%, 100% {
                            transform: translate(0px, 0px) scale(1);
                        }
                        33% {
                            transform: translate(30px, -50px) scale(1.1);
                        }
                        66% {
                            transform: translate(-20px, 20px) scale(0.9);
                        }
                    }
                    
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    
                    .animate-blob {
                        animation: blob 7s infinite;
                    }
                    
                    .animate-bounce-slow {
                        animation: bounce 3s infinite;
                    }
                    
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    
                    .animation-delay-300 {
                        animation-delay: 0.3s;
                    }
                    
                    .animation-delay-1000 {
                        animation-delay: 1s;
                    }
                    
                    @keyframes bounce {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                `}</style>

                {/* Floating Contact Form */}
                <div data-aos="fade-up" className="relative px-4 -mt-20 sm:-mt-20 md:-mt-24 lg:-mt-30 z-20">
                    <div className="max-w-2xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 animate-fade-in-up animation-delay-600">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
                            Send us a message
                        </h3>
                        <form className="flex flex-col gap-4 md:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                            
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            ></textarea>

                            <button className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-full font-bold group w-full sm:w-auto flex items-center justify-center">
                                <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                    Send Message
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Spacing after form */}
                <div className="h-12 sm:h-16 md:h-20"></div>

                {/* Contact Details */}
                <section className="py-8 sm:py-12 md:py-16">
                    <h2 data-aos="zoom-in" className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-8 sm:mb-10 md:mb-12">
                        Find Us Here
                    </h2>

                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {/* Phone Card */}
                        <div data-aos="fade-right" className="flex items-center gap-3 sm:gap-4 bg-blue-50 p-4 sm:p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <img src={phone} alt="Phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-600 text-sm sm:text-base md:text-lg">Phone</h3>
                                <p className="text-xs sm:text-sm text-gray-600">+91 9876543210</p>
                                <p className="text-xs text-gray-500 mt-1 hidden sm:block">Available 24/7</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div data-aos="zoom-in" className="flex items-center gap-3 sm:gap-4 bg-blue-50 p-4 sm:p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <img src={email} alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-600 text-sm sm:text-base md:text-lg">Email</h3>
                                <p className="text-xs sm:text-sm text-gray-600">info@hospital.com</p>
                                <p className="text-xs text-gray-500 mt-1 hidden sm:block">Response within 24h</p>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div data-aos="fade-left" className="flex items-center gap-3 sm:gap-4 bg-blue-50 p-4 sm:p-5 rounded-xl hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <img src={location} alt="Location" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-600 text-sm sm:text-base md:text-lg">Address</h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    IT Park, Viman Nagar, Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="px-4 pb-12 sm:pb-16 md:pb-20">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                            Visit Our Location
                        </h3>
                        <div data-aos="zoom-in" className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                title="Hospital Location"
                                src="https://www.google.com/maps?q=Viman+Nagar+Pune&output=embed"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;