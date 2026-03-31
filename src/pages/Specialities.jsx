import { Link } from "react-router-dom";
import GYNAECOLOGY from '../assets/images/specialities-offer/GYNAECOLOGY.png';
import ONCOLOGY from '../assets/images/specialities-offer/ONCOLOGY.png';
import PLASTIC_SURGERY from '../assets/images/specialities-offer/PLASTIC-SURGERY.png';
import PULMONOLOGY from '../assets/images/specialities-offer/PULMONOLOGY.PNG';
import GASTROENTEROLOGY from '../assets/images/specialities-offer/GASTROENTEROLOGY.png';
import PSYCHIATRY from '../assets/images/specialities-offer/PSYCHIATRY.png';
import NEPHROLOGY from '../assets/images/specialities-offer/NEPHROLOGY.png';
import UROLOGY from '../assets/images/specialities-offer/UROLOGY.png';
import ORTHOPAEDICS from '../assets/images/specialities-offer/ORTHOPAEDICS.png';
import PAEDIATRICS_SURGERY from '../assets/images/specialities-offer/PAEDIATRICS-SURGERY.png';
import CARDIOLOGY from '../assets/images/specialities-offer/CARDIOLOGY.png';
import Layout from "../components/Layout";
import { useState } from "react";
import { motion } from "framer-motion";


const Specialities = () => {
    const specialitiesData = [
        { name: "GYNAECOLOGY", image: GYNAECOLOGY, path: "/gynaecology" },
        { name: "ONCOLOGY", image: ONCOLOGY, path: "/oncology" },
        { name: "PLASTIC SURGERY", image: PLASTIC_SURGERY, path: "/plastic-surgery" },
        { name: "PULMONOLOGY", image: PULMONOLOGY, path: "/pulmonology" },
        { name: "GASTROENTEROLOGY", image: GASTROENTEROLOGY, path: "/gastroenterology" },
        { name: "PSYCHIATRY", image: PSYCHIATRY, path: "/psychiatry" },
        { name: "NEPHROLOGY", image: NEPHROLOGY, path: "/nephrology" },
        { name: "UROLOGY", image: UROLOGY, path: "/urology" },
        { name: "ORTHOPAEDICS", image: ORTHOPAEDICS, path: "/orthopaedics" },
        { name: "PAEDIATRICS SURGERY", image: PAEDIATRICS_SURGERY, path: "/paediatrics-surgery" },
        { name: "CARDIOLOGY", image: CARDIOLOGY, path: "/cardiology" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };


    return (
        <Layout>
            <div className="flex flex-col min-h-screen">
                {/* Hero section */}
                <section data-aos="zoom-in" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
                    <div data-aos="zoom-in" className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div data-aos="fade-up" className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
                        <p className="text-xs sm:text-sm md:text-base text-blue-100 mb-4">
                            Home &gt; <span className="font-semibold text-white">Specialities</span>
                        </p>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Our Medical Specialities
                        </h1>

                        <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
                            Delivering advanced healthcare with expert doctors, modern technology,
                            and compassionate care across multiple specialties.
                        </p>

                        <div className="mt-8 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-4 py-2 md:px-6 md:py-3 bg-white text-sm sm:text-base md:text-lg text-blue-800 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition"
                            >
                                Book Appointment
                            </Link>

                            <Link
                                to="/about"
                                className="px-4 py-2 md:px-6 md:py-3 border border-white text-sm sm:text-base md:text-lg text-white font-semibold rounded-full hover:bg-white hover:text-blue-800 transition"
                            >
                                Learn More
                            </Link>
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

                {/* Specialities offer */}
                <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                    {/* Section Header with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12 px-4"
                        data-aos="fade-up"
                    >
                        <span data-aos="fade-up" className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-blue-100 px-3 py-2 md:px-4 md:py-2 rounded-full inline-block mb-4">
                            Comprehensive Care
                        </span>
                        <h2 data-aos="fade-up" className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                            Specialities We Offer
                        </h2>
                        <div data-aos="fade-up" className="w-18 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
                        <p data-aos="fade-up" className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
                            Expert medical care across a wide range of specialties,
                            delivered by world-class professionals
                        </p>
                    </motion.div>

                    {/* Specialities Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
                    >
                        {specialitiesData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <Link to={item.path} className="block group">
                                    <div data-aos="zoom-in" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 pt-6 pb-4">
                                            <motion.img
                                                className="w-14 h-14 md:w-18 md:h-18 mg:h-20 lg:w-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                                                src={item.image}
                                                alt={item.name}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            {/* Decorative Circle */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-2 text-center">
                                            <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {item.description}
                                            </p>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="inline-flex items-center text-blue-600 text-xs sm:text-sm md:text-sm font-semibold"
                                            >
                                                Learn More
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </Layout>
    )
}

export default Specialities