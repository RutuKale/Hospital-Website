import { useEffect, useRef, useState } from "react";

const doctorsList = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. James Wilson",
    role: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Emily Chen",
    role: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Michael Brown",
    role: "Orthopedic",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Jessica Davis",
    role: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
  },
];

const extendedDoctors = [...doctorsList, ...doctorsList, ...doctorsList];

const FindDoctor = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const itemWidth = 340;
  const originalLength = doctorsList.length;

  useEffect(() => {
    const handleResize = () => {
      // Re-center if needed on resize, or just let it be
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const initialScroll = originalLength * itemWidth;
      scrollRef.current.scrollLeft = initialScroll;
    }
  }, [originalLength]);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        scroll("right");
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = itemWidth;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const totalWidth = originalLength * itemWidth;
      let relativeIndex = Math.round(scrollLeft / itemWidth) - originalLength;
      let actualIndex = relativeIndex % originalLength;
      if (actualIndex < 0) actualIndex += originalLength;

      setActiveIndex(actualIndex);

      if (scrollLeft < itemWidth) {
        scrollRef.current.style.scrollBehavior = "auto"; 
        scrollRef.current.scrollLeft += totalWidth;
        scrollRef.current.style.scrollBehavior = "smooth"; 
      }
      else if (scrollLeft >= totalWidth * 2) {
        scrollRef.current.style.scrollBehavior = "auto";
        scrollRef.current.scrollLeft -= totalWidth;
        scrollRef.current.style.scrollBehavior = "smooth";
      }
    }
  };

  const scrollToDot = (index) => {
    if (scrollRef.current) {
      const targetIndex = originalLength + index;
      const targetScroll = targetIndex * itemWidth;

      scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center md:mb-12 mb-8">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Meet Our Experienced Team
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 md:mb-4 mb-3">
            Find A Doctor
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
            We offer extensive medical procedures to outbound and inbound
            patients what it is and we are very proud of achievement of our
            staff, We are all work together to help our all patients for
            recovery.
          </p>
        </div>

        {/* Doctors Carousel */}
        <div
          className="relative group px-2 sm:px-6 md:px-12"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 transition-all focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto md:pb-8 pb-4 gap-4 md:gap-8 snap-x snap-mandatory hide-scroll-bar scroll-smooth"
          >
            {extendedDoctors.map((doctor, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="flex-none w-[85%] sm:w-[45%] md:w-[280px] snap-center"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="h-40 sm:h-52 md:h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 text-center flex-grow flex flex-col justify-center bg-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 text-xs sm:text-sm md:text-base font-medium">
                      {doctor.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 transition-all focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {doctorsList.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FindDoctor;
