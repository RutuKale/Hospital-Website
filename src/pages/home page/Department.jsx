import { useEffect, useRef, useState } from "react";

const Department = () => {
    const departments = [
        {
            name: "Pharmacy Department",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: "Physiotherapy Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: "Pathology Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            name: "Radiology Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Pharmacy Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: "Physiotherapy Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: "Pathology Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            name: "Radiology Department",
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    const deptScrollRef = useRef(null);
    const [isDeptAutoScroll, setIsDeptAutoScroll] = useState(true);

    // Duplicate for infinite loop
    const extendedDepartments = [...departments, ...departments];

    // Auto scroll effect
    useEffect(() => {
        if (departments.length <= 4) return;

        let interval;
        if (isDeptAutoScroll) {
            interval = setInterval(() => {
                if (deptScrollRef.current) {
                    const cardWidth = deptScrollRef.current?.children[0]?.offsetWidth || 300;
                    deptScrollRef.current.scrollBy({
                        left: cardWidth + 24,
                        behavior: "smooth"
                    });
                }
            }, 2500);
        }

        return () => clearInterval(interval);
    }, [isDeptAutoScroll, departments.length]);

    // Handle infinite scroll
    const handleDeptScroll = () => {
        if (!deptScrollRef.current || departments.length <= 4) return;

        const scrollLeft = deptScrollRef.current.scrollLeft;
        const scrollWidth = deptScrollRef.current.scrollWidth / 2;

        if (scrollLeft >= scrollWidth) {
            deptScrollRef.current.scrollLeft = 0;
        }
    }

        return (
            <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-blue-600 to-blue-700 overflow-x-hidden overflow-y-visible">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1"
                            d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,213.3C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96V320H0Z">
                        </path>
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    {/* Heading */}
                    <div data-aos="fade-up" className="mb-10">
                        <span className="text-blue-200 font-semibold uppercase tracking-widest text-sm">
                            Hospital Services
                        </span>

                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-3">
                            Our Departments
                        </h2>

                        <p className="text-blue-100 max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg">
                            Dedicated departments equipped with modern technology and
                            experienced professionals delivering specialized healthcare.
                        </p>
                    </div>

                    {/* Department Cards */}
                    {departments.length <= 4 ? (
                        // ✅ NORMAL GRID (no scroll)
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {departments.map((dept, index) => (
                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    className="group relative z-0 hover:z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full"
                                >
                                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 text-white mb-6 group-hover:bg-blue-600">
                                        {dept.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-900">
                                        {dept.name}
                                    </h3>

                                    <div className="w-0 h-[2px] bg-blue-500 mt-4 transition-all duration-500 group-hover:w-16"></div>
                                </div>
                            ))}
                        </div>

                    ) : (

                        // 🔁 SCROLLABLE INFINITE CAROUSEL
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDeptAutoScroll(false)}
                            onMouseLeave={() => setIsDeptAutoScroll(true)}
                        >
                            <div
                                ref={deptScrollRef}
                                onScroll={handleDeptScroll}
                                className="flex overflow-x-auto gap-6 py-6 px-4 snap-x snap-mandatory scroll-smooth hide-scroll-bar"
                            >
                                {extendedDepartments.map((dept, index) => (
                                    <div
                                        key={index}
                                        className="flex-none w-[85%] sm:w-[45%] md:w-[280px] snap-center"
                                    >
                                        <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:-translate-y-3 hover:shadow-2xl h-full">

                                            <div className="w-15 h-15 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/20 text-white mb-6 group-hover:bg-blue-600">
                                                {dept.icon}
                                            </div>

                                            <h3 className="text-md md:text-xl font-semibold text-white group-hover:text-gray-900">
                                                {dept.name}
                                            </h3>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    }

    export default Department;