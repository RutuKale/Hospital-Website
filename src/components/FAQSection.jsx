import React, { useState } from 'react';

const faqData = [
    {
        question: "Where is the hospital located?",
        answer: "The hospital is situated at Meera Nagar on Bhuwana Bypass Road, Udaipur in Rajasthan state. The location is easily accessible by road and public transport. We also provide ambulance pickup services for critical patients. A location map and directions are available on our website for patient convenience."
    },
    {
        question: "What are the hospital’s working hours?",
        answer: "Our hospital operates 24 hours a day, 7 days a week, 365 days a year. All critical care and emergency services are available round the clock. Outpatient Department (OPD) timings are generally from 9:00 AM to 5:00 PM, Monday to Saturday. However, certain departments and consultants may have specific timings, which can be checked on our website or by calling the reception desk."
    },
    {
        question: "How can I book an appointment with a doctor?",
        answer: (
            <div>
                You can book appointments in three ways:
                <ul className="list-decimal ml-5 mt-2 space-y-1">
                    <li><strong>Online Booking:</strong> Visit our hospital website or mobile app to select your preferred doctor and time slot.</li>
                    <li><strong>Telephonic Booking:</strong> Call our OPD helpline at [Insert Number], and our team will schedule your appointment.</li>
                    <li><strong>Walk-in:</strong> You can directly visit the hospital reception during OPD hours and register for a consultation.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Do I need a prior appointment for emergency services?",
        answer: "No prior appointment is required in emergencies. Our 24x7 Emergency Department is fully equipped with critical care facilities, rapid response teams, and life-saving equipment. Patients can walk in directly or be brought by ambulance."
    },
    {
        question: "How do I request a prescription refill?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."
    },
    {
        question: "Can I consult doctors online?",
        answer: "Yes, we provide tele-consultation services for patients who are unable to visit physically. Through video calls, our doctors can provide medical advice, follow-up care, and even review reports. This service is especially beneficial for elderly patients, those living in rural areas, or individuals seeking follow-up consultations."
    },
    {
        question: "Does the hospital provide food facilities for patients and attendants?",
        answer: "Yes. PIMS provides nutritionally balanced meals prepared under the guidance of dieticians for admitted patients. For attendants and visitors, a cafeteria and food court are available inside the hospital premises. Outside food is generally not allowed for patients to maintain hygiene and diet compliance."
    },
    {
        question: "Does PIMS provide ambulance services?",
        answer: "Yes, PIMS operates a fleet of advanced life-support (ALS) and basic life-support (BLS) ambulances. Our ambulances are equipped with ventilators, oxygen supply, monitors, and trained paramedics to handle emergencies during transport."
    }
];

const FAQSection = () => {
    // ✅ First item open by default
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-blue-600 font-bold uppercase text-xs sm:text-sm md:text-base block mb-2">
                        What People
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
                        Usually Asked
                    </h2>
                </div>

                {/* Layout: Left FAQ + Right Image */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">

                    {/* LEFT SIDE - FAQ */}
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border transition-all duration-300 ${openIndex === index
                                    ? 'bg-blue-50/50 border-blue-200'
                                    : 'bg-white border-gray-100 hover:border-blue-100'
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <span className={`text-sm sm:text-base md:text-lg font-semibold ${openIndex === index ? 'text-blue-600' : 'text-gray-800'
                                        }`}>
                                        {faq.question}
                                    </span>

                                    <span className={`ml-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full ${openIndex === index
                                        ? 'bg-blue-600 text-white rotate-180'
                                        : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-blue-50/50 rounded-xl p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE - IMAGE */}
                    <div className="hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                            alt="Hospital"
                            className="w-full md:h-[60rem] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
