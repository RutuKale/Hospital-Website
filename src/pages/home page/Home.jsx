import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FAQSection from "../../components/FAQSection";
import Appointment from "../../components/Appointment";
import Layout from "../../components/Layout";
import CounterCard from "../../components/CounterCard";
import { motion } from "framer-motion";
import Department from "./Department";
import FindDoctor from "./FindDoctor";

const valuesData = [
  {
    title: "Compassionate care with empathy",
    content:
      "We know that seeking medical care can feel stressful, so we focus on creating a warm and supportive environment. With empathy and compassion, we ensure every patient feels cared for and at ease.",
    icon: (
      <svg
        className="w-6 md:w-8 h-6 md:h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity in everything we do",
    content:
      "We uphold integrity in every aspect of care, ensuring honesty, transparency, and trust with our patients. Through continuous learning and improvement, we stay committed to delivering the highest quality medical services.",
    icon: (
      <svg
        className="w-6 md:w-8 h-6 md:h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence in clinical outcomes",
    content:
      "We are dedicated to achieving excellence in clinical outcomes through advanced treatments, evidence-based practices, and patient-centered care. By prioritizing safety, precision, and innovation, we ensure the best possible results for every patient.",
    icon: (
      <svg
        className="w-6 md:w-8 h-6 md:h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Patient-centred approach",
    content:
      "We place patients at the heart of everything we do, treating every individual with dignity, respect, and compassion. Our approach ensures personalized care that values each person’s unique needs and circumstances.",
    icon: (
      <svg
        className="w-6 md:w-8 h-6 md:h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Commitment to innovation and learning",
    content:
      "We are committed to continuous innovation and learning, adopting the latest medical advancements and best practices. By enhancing our knowledge and skills, we ensure patients receive comprehensive, effective, and up-to-date care.",
    icon: (
      <svg
        className="w-6 md:w-8 h-6 md:h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const specialities = [
  {
    name: "Gynaecology",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive care for women's health.",
  },
  {
    name: "Oncology",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Advanced cancer treatment and care.",
  },
  {
    name: "Plastic Surgery",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Reconstructive and cosmetic procedures.",
  },
  {
    name: "Pulmonology",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Expert care for respiratory conditions.",
  },
  {
    name: "Gastroenterology",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Diagnosis and treatment of digestive disorders.",
  },
  {
    name: "Psychiatry",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Mental health support and therapy.",
  },
  {
    name: "Gynaecology",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive care for women's health.",
  },
  {
    name: "Oncology",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Advanced cancer treatment and care.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[100vh] overflow-hidden">
          {/* MOBILE IMAGE */}
          <img
            src="/home-hero-bg-image.avif"
            alt="Hospital Hero"
            className="absolute inset-0 w-full h-full object-cover object-[85%_center] block md:hidden"
            loading="eager"
          />
          <video
            className="absolute inset-0 w-full h-full object-cover hidden sm:block md:block lg:block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.webp"
          >
            <source src="/home-hero-section.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Welcome to City Hospital
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-xl">
              Providing world-class healthcare with compassion and advanced
              technology.
            </p>
          </div>
        </section>

        {/* Counter Section */}
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-600 font-bold uppercase tracking-wider text-sm"
              >
                Our Impact
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4"
              >
                Delivering Excellence in Healthcare
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-sm sm:text-base md:text-lg mx-auto"
              >
                Numbers that reflect our commitment to providing exceptional
                medical care
              </motion.p>
            </div>

            {/* Counter Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  label: "Patients Treated",
                  count: 50000,
                  suffix: "+",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Expert Employees",
                  count: 1200,
                  suffix: "+",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Countries Served",
                  count: 30,
                  suffix: "+",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Services Available",
                  count: 120,
                  suffix: "+",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <CounterCard key={index} {...item} />
              ))}
            </div>

            {/* Optional: Add a subtle gradient separator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm md:text-lg text-gray-500">
                <span className="w-8 h-px md:w-12 md:h-[2px] bg-gray-300"></span>
                <span>Join thousands of satisfied patients</span>
                <span className="w-8 h-px md:w-12 md:h-[2px] bg-gray-300"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Health & Wellness Partner Section */}
        <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50 h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div data-aos="zoom-in" className="absolute inset-0 z-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1726873533328-f28e876dd71a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Doctor and Patient"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          </div>

          {/* Content */}
          <div className="-top-18 md:top-0 relative z-10 max-w-4xl mx-auto px-4 text-center text-white mb-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              Your Partner in Health and Wellness
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed font-light">
              We are committed to providing you with the best medical and
              healthcare services to help you live healthier and happier.
            </p>
          </div>

          {/* Floating Bottom Card */}
          <div className="absolute bottom-10 w-[85%] md:w-[80%] max-w-6xl translate-y-1 z-20">
            <div
              data-aos="fade-up"
              className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)] transition-shadow duration-300 p-4 sm:p-8 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-4 border border-gray-100"
            >
              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-left md:text-left">
                    <p className="text-sm md:text-base text-gray-500 font-semibold uppercase tracking-wider">
                      Emergency
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                      +91 9876543210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left md:text-left">
                    <p className="text-sm md:text-base text-gray-500 font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                      IT Park, Viman Nagar, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => navigate("/contact")}
                className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-full font-bold group w-full sm:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>

                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* About PIMS Section */}
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              {/* Left Content */}
              <div data-aos="fade-right" className="lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                  About PIMS Multi Super-Speciality Hospital
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Best Multi Super-Specialtiy Hospital in Pune
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 text-gray-600 mb-2 leading-relaxed text-justify">
                  <span
                    className={`${!isExpanded ? "line-clamp-4 md:line-clamp-none" : ""}`}
                  >
                    PIMS Multi Super-Speciality Hospital is a 100-bed healthcare
                    destination in Udaipur, where advanced medical technology
                    meets the compassion every patient deserves. Our team of
                    highly skilled specialists, supported by state-of-the-art
                    surgical equipment and modern diagnostics, delivers care
                    that goes beyond treating conditions, we work to restore
                    health, rebuild lives, and strengthen our community.
                    <br />
                    <br />
                    Bringing decades of medical expertise to the heart of
                    Udaipur, we are committed to ensuring that every resident
                    has access to world-class healthcare close to home. At PIMS,
                    we believe every case carries a human story, and that’s why
                    we have created more than just a hospital, we’ve built a
                    place where innovation and empathy come together to deliver
                    results that truly matter.
                  </span>
                </p>
                {/* Read More Toggle (Mobile Only) */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 font-semibold md:hidden mb-6 hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>

                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                  Our Special Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 md:mb-6">
                  {[
                    "24/7 Emergency Care",
                    "Expert Specialist Doctors",
                    "Modern ICU & Ventilators",
                    "Advanced Diagnostics Lab",
                    "Fully Stocked Pharmacy",
                    "Ambulance Service",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm sm:text-base md:text-lg text-gray-600 text-gray-700"
                    >
                      <svg
                        className="md:w-5 md:h-5 h-4 w-4 text-blue-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-4 sm:px-6 md:px-6 py-1 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg rounded-full font-bold group inline-flex items-center justify-center"
                  onClick={() => navigate("/about")}
                >
                  <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Read more
                  </span>
                </button>
              </div>

              {/* Right Image */}
              <div data-aos="fade-left" className="lg:w-1/2">
                <div className="relative overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2047&q=80"
                    alt="Doctors performing surgery in ICU"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find A Doctor Section */}
        <FindDoctor />

        {/* Our Values Section */}
        <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div data-aos="fade-up" className="text-center mb-8 md:mb-14">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Why Choose Us
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 md:mt-3">
                Our Core Values
              </h2>
              <div className="w-16 md:w-20 h-0.5 md:h-1 bg-blue-600 mx-auto mt-2 md:mt-4 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-sm md:text-base lg:text-base">
                We are driven by principles that ensure the highest level of
                patient care, trust, and innovation.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              {valuesData.map((value, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-100 text-blue-600 mb-4 md:mb-6 mx-auto group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="text-md md:text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-center text-justify leading-relaxed text-xs sm:text-sm md:text-md lg:text-md">
                    {value.content}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <Department />

        {/* Core Specialities Section */}
        <section
          data-aos="fade-up"
          className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-900"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
              alt="Medical Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-xs md:text-sm">
                Transforming health & healing with expertise
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
                Our Core Specialities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {specialities.map((speciality, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-42 lg:h-54 overflow-hidden">
                    <img
                      src={speciality.image}
                      alt={speciality.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-md md:text-lg lg:text-lg font-bold text-white mb-2 border-l-4 border-blue-500 pl-2">
                      {speciality.name}
                    </h3>
                    <p className="text-gray-300 text-xs md:textsm lg:text-sm group-hover:opacity-100 duration-300 delay-100">
                      {speciality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <Appointment />

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </Layout>
  );
};

export default Home;
