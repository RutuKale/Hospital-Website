import { useState } from "react";
import Appointment from "../../components/Appointment";
import { FaChevronLeft, FaChevronRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Layout from "../../components/Layout";

function SpecialityBase({
    title,
    aboutTitle,
    aboutDescription,
    aboutImage,
    slides,
    backseat,
    backseatBg,
    img
}) {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[100vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div data-aos="zoom-in" className="absolute inset-0">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 via-blue-600/70 to-blue-100/60"></div>
                </div>

                {/* Content */}
                <div data-aos="fade-up" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                    {/* Breadcrumb */}
                    <p className="text-blue-100 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wide">
                        Home <span className="mx-1 sm:mx-2">›</span> {aboutTitle}
                    </p>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6 px-2">
                        {title}
                    </h1>

                    {/* Subtitle (optional enhancement) */}
                    <p className="text-blue-100 text-xs sm:text-sm md:text-md max-w-xl mx-auto mb-6 sm:mb-8 px-4">
                        Providing advanced care with expert doctors and modern technology for your better health.
                    </p>
                </div>
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

            {/* About */}
            <section className="max-w-7xl mx-auto px-6 py-10 sm:py-12 md:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-12 items-center">
                    <div data-aos="fade-right" className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                            {aboutTitle}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-lg lg:text-lg leading-relaxed text-justify">
                            {aboutDescription}
                        </p>
                    </div>

                    <div data-aos="fade-left" className="rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src={aboutImage}
                            alt={title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Doctor Carousel */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">

                <div data-aos="fade-up" className="relative bg-white rounded-3xl overflow-hidden">

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Image */}
                        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            <img
                                src={slides[current].image}
                                alt="Doctor"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 sm:mb-4">
                                {slides[current].heading}
                            </h3>

                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                {slides[current].description}
                            </p>
                        </div>

                    </div>

                    {/* Floating Card */}
                    <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-10 w-full lg:w-[80%] xl:w-[65%] mt-6 lg:mt-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[70%_30%] items-center gap-4 sm:gap-6">
                            {/* Info */}
                            <div>
                                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                                    {slides[current].name}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500">
                                    {slides[current].title}
                                </p>
                                <p className="text-sm sm:text-base text-blue-600 font-medium">
                                    Specializes in {slides[current].specialization}
                                </p>
                            </div>

                            {/* Social */}
                            <div className="flex sm:justify-end gap-3 sm:gap-4">
                                <button className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-800 text-white flex items-center justify-center">
                                    <FaFacebookF size={14} />
                                </button>
                                <button className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-800 text-white flex items-center justify-center">
                                    <FaTwitter size={14} />
                                </button>
                                <button className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-800 text-white flex items-center justify-center">
                                    <FaInstagram size={14} />
                                </button>
                            </div>
                        </div>
                        <div className="h-3 sm:h-4 md:h-5 w-full bg-blue-600" />
                    </div>

                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
                    <button
                        onClick={prevSlide}
                        className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-blue-600 text-white flex items-center justify-center"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-blue-600 text-white flex items-center justify-center"
                    >
                        <FaChevronRight />
                    </button>
                </div>

            </section>

            {/* Appointment */}
            <Appointment />

            {/* Backseat */}
            <section>
                <div data-aos="zoom-in" className='w-[30%] mx-auto'>
                    <img src={backseat} alt="" className="pt-4 sm:pt-5 md:pt-6 lg:pt-8" />
                </div>
                <div className="bg-white rounded-t-4xl w-[80%] mx-auto shadow-2xl">
                    <div data-aos="fade-up" className="h-[30vh] w-[80%] md:h-[40vh] mx-auto rounded-t-4xl bg-cover flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backseatBg})` }}>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-800 text-center max-w-2xl mx-auto mb-4">Don’t Let Your Health Take a Backseat!</h2>
                        <p className="text-sm max-w-2xl text-center">Schedule an appointment with one of our experienced medical professionals today!</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default SpecialityBase;