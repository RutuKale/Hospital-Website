import React from 'react'

const Appointment = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
                    {/* Left: Form */}
                    <div data-aos="fade-right" className="lg:w-1/2 w-full">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-md">Book an</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-8">
                            Appointment
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Your email address"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="department" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Department</label>
                                    <select
                                        id="department"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    >
                                        <option value="">Select Department</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="orthopedics">Orthopedics</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Your mobile number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="Describe your problem..."
                                ></textarea>
                            </div>
                            <button className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg rounded-full font-bold group w-full md:w-auto flex items-center justify-center">
                                <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></span>
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Send Message
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Right: Image */}
                    <div data-aos="fade-left" className="lg:w-1/2 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] group">
                            <img
                                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=2091&q=80"
                                alt="Doctor Appointment"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Appointment