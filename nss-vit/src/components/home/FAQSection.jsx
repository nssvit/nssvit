import React, { useState } from 'react';

const FAQSection = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevState) => (prevState === index ? null : index));
    };

    const faqData = [
        {
            question: 'Who can join NSS?',
            answer:
                "Any First Year Student enrolled in our college can join NSS! If you're passionate about making a difference in the community, developing leadership skills, and working with a dynamic team, NSS is the perfect place for you.",
        },
        {
            question: 'How can I join NSS?',
            answer:
                "It's easy! Just fill out the Interview registration form available on our website. We hold interviews at the beginning of each academic year where you can learn more about our exciting activities and sign up to be part of this amazing journey.",
        },
        {
            question: 'What type of events does NSS have?',
            answer:
                "We conduct a wide range of activities such as community service projects, health camps, environmental conservation programs, literacy drives, and awareness campaigns. Additionally, we organize special events like blood donation camps, cleanliness drives, and workshops on social issues. To learn more explore our website's Events page.",
        },
        {
            question: 'When are these events conducted?',
            answer:
                "Our events are exclusively held on weekends, so you can fully participate without worrying about your academic schedule. It's all about balancing service and studies seamlessly!",
        },
        {
            question: 'Can only first-year students join NSS?',
            answer:
                "NSS VIT accepts only first-year students at the end of their academic year. This allows the students to fulfill the requirement of participating in NSS for 2 academic years and ensures they don't have to juggle NSS activities with the demands of their final year. However, anyone who wants to join in for the events willingly is always welcome.",
        },
        {
            question: 'Does NSS volunteering include attending camps? Are they compulsory?',
            answer:
                "Yes, we organize exciting camps once every year. Selection is based on criteria like the number of hours you've completed. Attending at least one camp in your 2-year NSS journey is compulsory, providing a memorable experience filled with learning and fun.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-8 md:p-6">
            <h2 className="text-3xl font-bold text-center mt-6 text-transparent bg-clip-text bg-gradient-primary">
                Frequently Asked Questions
            </h2>
            <div className="py-2 my-5 shadow-soft">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl ${activeAccordion === index ? 'border-blue-200' : 'border-transparent'} bg-background`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center gap-x-3 py-4 px-4 sm:px-8 font-semibold hover:text-gray-500 focus:outline-none"
                            aria-expanded={activeAccordion === index ? 'true' : 'false'}
                        >
                            <span className="text-sm sm:text-base text-left break-words text-primary">
                                {item.question}
                            </span>
                            <svg
                                className={`transition-transform transform flex-shrink-0 ${activeAccordion === index ? 'rotate-45' : ''} w-5 h-5 sm:w-6 sm:h-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-700 ease-out ${
                                activeAccordion === index
                                    ? 'opacity-100 scale-100 max-h-[500px]'
                                    : 'opacity-0 scale-95 max-h-0'
                            }`}
                        >
                            <div className="px-6 sm:px-8 pb-4 text-gray-800">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;