import { useEffect, useRef, useState } from "react";

const CounterCard = ({ label, count, suffix, icon }) => {
    const [current, setCurrent] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const delayTimer = setTimeout(() => {
            let start = 0;
            const duration = 2000;
            const steps = 60;
            const increment = count / steps;
            const interval = duration / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= count) {
                    setCurrent(count);
                    clearInterval(timer);
                } else {
                    setCurrent(Math.floor(start));
                }
            }, interval);

            return () => clearInterval(timer);
        }, 1500);

        return () => clearTimeout(delayTimer);
    }, [hasStarted, count]);

    return (
        <div
            ref={ref}
            data-aos="fade-up"
            className="
                flex flex-col items-center text-center 
                p-3 sm:p-4 md:p-6 lg:p-8
                rounded-xl sm:rounded-2xl 
                bg-blue-50 hover:bg-blue-100 
                transition-all duration-300 
                group h-full
            "
        >
            {/* Icon */}
            <div
                className="
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                    rounded-full bg-blue-100 group-hover:bg-white 
                    flex items-center justify-center 
                    text-blue-600 mb-3 sm:mb-4 md:mb-5
                    transition-all duration-300 shadow-md
                "
            >
                {icon}
            </div>

            {/* Counter */}
            <h3
                className="
                    text-xl sm:text-2xl md:text-3xl lg:text-4xl
                    font-extrabold text-blue-600 mb-1
                "
            >
                {current.toLocaleString()}
                {suffix}
            </h3>

            {/* Label */}
            <p
                className="
                    text-gray-600 font-semibold 
                    text-xs sm:text-sm md:text-base
                    uppercase tracking-wider
                "
            >
                {label}
            </p>
        </div>
    );
};

export default CounterCard;