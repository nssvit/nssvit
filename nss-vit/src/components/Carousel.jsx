import React, { useState, useEffect } from 'react';

const Carousel = ({ images, currentIndex, isTransitioning, setIsTransitioning, setCurrentIndex }) => {

    const [timer, setTimer] = useState(null);

    // Function to go to the next slide
    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Wrap around to the first image
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length // Wrap around to the last image
        );
    };

    // Set up auto-scrolling with setInterval
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change every 3 seconds
        setTimer(interval);

        return () => clearInterval(interval);
    }, []);

    // Reset the transition state after the slide animation completes
    useEffect(() => {
        if (!isTransitioning) return;
        const timer = setTimeout(() => setIsTransitioning(false), 700); // Duration of transition
        return () => clearTimeout(timer);
    }, [isTransitioning]);

    // Reset auto-scroll timer on manual slide change
    const handleManualChange = () => {
        clearInterval(timer);
        const newTimer = setInterval(nextSlide, 5000);
        setTimer(newTimer);
    };

    return (
        <div className="relative w-full">
            {/* Carousel Wrapper */}
            <div className="relative h-56 overflow-hidden md:h-[30rem]">
                <div
                    className="relative h-full w-full flex justify-center items-center"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all duration-1000 ease-in-out`}
                            style={{
                                opacity: currentIndex === index ? 1 : 0,
                                transform: currentIndex === index ? 'scale(1)' : 'scale(1.05)', // Fade and zoom-in effect
                                transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                                zIndex: currentIndex === index ? 10 : 0, // Make sure the current image is on top
                            }}
                        >
                            <img
                                src={image}
                                alt={`Carousel item ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-0"
                onClick={() => {
                    prevSlide();
                    handleManualChange();
                }}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/80 dark:group-hover:bg-gray-800/80">
                    <svg
                        className="w-5 h-5 text-black dark:text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-0"
                onClick={() => {
                    nextSlide();
                    handleManualChange();
                }}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/80 dark:group-hover:bg-gray-800/80">
                    <svg
                        className="w-5 h-5 text-black dark:text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
};

export default Carousel;
