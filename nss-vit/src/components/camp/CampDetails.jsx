import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CampDetails = () => {
    const [activeYear, setActiveYear] = useState('2024-2025');
    const navigate = useNavigate();

    // Camp data organized by year
    const campData = {
        '2024-2025': {
            location: 'Kuderan, Badlapur',
            dates: '27th November - 4th December, 2024',
            theme: 'Sarvangin Vikas',
            description: 'Our camp at Kuderan Village focused on holistic village development through infrastructure improvement and healthcare initiatives, directly benefiting the local villagers with limited access to essential services.',
            highlights: ['Bandhara(dam) Restoration', 'Sustainable compost pit creation', 'Health camp for 170+ villagers']
        },
        '2023-2024': {
            location: 'Mulgaon, Badlapur',
            dates: '16th December - 22nd December, 2023',
            theme: 'Education',
            description: 'At Mulgaon, we conducted cleanliness drives, established waste management systems, and engaged with local students through educational and sports activities, leaving a lasting impact on community and youth development.',
            highlights: ['Cleanliness drive at Khandoba Temple', 'Installation of garbage disposal facilities', 'Career guidance and sports competitions']
        },
    };

    // Years available (in reverse chronological order)
    const availableYears = Object.keys(campData).sort().reverse();

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary text-center mb-12">
                    Camp Details
                </h2>

                {/* Timeline Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Vertical Year Selector */}
                    <div className="md:col-span-3">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                            
                            {/* Years */}
                            <div className="space-y-6">
                                {availableYears.map((year, index) => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`relative flex items-center w-full group transition-all duration-300 ${
                                            activeYear === year ? 'pl-0' : 'pl-0 md:pl-2 hover:pl-0'
                                        }`}
                                    >
                                        {/* Year Circle */}
                                        <div className={`
                                            h-9 w-9 rounded-full flex items-center justify-center z-10
                                            transition-all duration-300 shadow-medium
                                            ${activeYear === year 
                                                ? 'bg-gradient-button text-white' 
                                                : 'bg-white text-primary group-hover:bg-blue-50'
                                            }
                                        `}>
                                            <span className="font-bold text-sm">
                                                {year.split('-')[0].substring(2)}
                                            </span>
                                        </div>
                                        
                                        {/* Year Text */}
                                        <div className={`
                                            ml-3 py-2 px-4 rounded-r-lg transition-all duration-300
                                            ${activeYear === year 
                                                ? 'bg-gradient-button text-white shadow-medium' 
                                                : 'text-text group-hover:text-primary'
                                            }
                                        `}>
                                            <span className="font-medium">{year}</span>
                                        </div>
                                        
                                        {/* Connecting Line (visible on active) */}
                                        {activeYear === year && (
                                            <motion.div 
                                                layoutId="yearConnector"
                                                className="absolute hidden md:block right-0 w-3 h-0.5 bg-accent"
                                            ></motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Camp Details Content */}
                    <div className="md:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl shadow-medium overflow-hidden"
                            >
                                <div className="p-6">
                                    {/* Theme Banner */}
                                    <div className="bg-gradient-button rounded-lg p-4 mb-6 shadow-medium">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm text-white/80 font-medium">THEME</h4>
                                                <p className="text-xl text-white font-bold">{campData[activeYear].theme}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Location & Date */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gradient-card hover:bg-gradient-card-hover transition-all duration-300 p-4 rounded-xl shadow-soft">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-medium text-text/70">LOCATION</h4>
                                                    <p className="text-accent font-semibold">{campData[activeYear].location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-card hover:bg-gradient-card-hover transition-all duration-300 p-4 rounded-xl shadow-soft">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-medium text-text/70">DATES</h4>
                                                    <p className="text-accent font-semibold">{campData[activeYear].dates}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brief Description */}
                                    <div className="bg-gradient-card p-4 rounded-xl shadow-soft mb-6">
                                        <p className="text-text leading-relaxed">
                                            {campData[activeYear].description}
                                        </p>
                                    </div>

                                    {/* Key Highlights */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold mb-3 text-text flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            Key Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {campData[activeYear].highlights.map((highlight, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="bg-gradient-card-hover p-3 rounded-lg shadow-soft flex items-center"
                                                >
                                                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-primary mr-2 shadow-soft">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-text text-sm font-medium">{highlight}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Gallery Button */}
                                    <div className="flex justify-end">
                                        <button 
                                            className="inline-flex items-center px-5 py-2.5 bg-gradient-button hover:bg-gradient-button-hover text-white font-medium rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:animate-button-pop"
                                            onClick={() => navigate('/gallery')}
                                        >
                                            <span>View Camp Gallery</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampDetails;