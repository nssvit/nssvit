import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autorotateInterval = useRef(null);

  const testimonials = [
    {
      img: 'https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740558579/img/2024-2025/ab1/6.jpg',
      quote: "Our NSS unit is committed to environmental conservation through activities like tree plantation drives, clean-up campaigns, and sustainability awareness programs. Volunteers work with local communities to promote eco-friendly practices and create a greener environment.",
      name: 'Area Based - 1'
    },
    {
      img: 'https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740558586/img/2024-2025/ab2/11.jpg',
      quote: "We also focus on health and hygiene by organizing health camps, blood donation drives, and hygiene awareness programs. Volunteers also educate young orphan children by going on various teaching drives",
      name: 'Area Based - 2'
    },
    {
      img: 'https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560773/img/2024-2025/university/8.jpg',
      quote: "University-level events bring together students from different colleges for large-scale community service projects. These include clean-up drives, inter-college debates on social issues, and health camps, fostering unity and collaboration across the university.",
      name: 'University'
    },
    {
      img: 'https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559836/img/2024-2025/clg/7.jpg',
      quote: "At the college level, we organize campus clean-up drives, workshops on social issues, and guest speaker sessions. These activities encourage students to contribute to their immediate environment and build leadership skills while promoting civic engagement.",
      name: 'College'
    },
  ];

  useEffect(() => {
    if (autorotate && !isAnimating) {
      autorotateInterval.current = setInterval(() => {
        handleSlideChange((active + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(autorotateInterval.current);
  }, [autorotate, active, isAnimating]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating || newIndex === active) return;
    setIsAnimating(true);
    setActive(newIndex);
    stopAutorotate();

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const stopAutorotate = () => {
    setAutorotate(false);
    if (autorotateInterval.current) {
      clearInterval(autorotateInterval.current);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-4 sm:my-6 md:my-8 px-2 sm:px-4">
      {/* Tabs Navigation - Now with better responsive design */}
      <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-1 flex justify-between items-center shadow-lg overflow-hidden mb-4 sm:mb-6">
        <div
          className="absolute h-full w-1/4 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${active * 100}%)`,
          }}
        ></div>
        <div className="relative flex w-full justify-between items-center">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isAnimating}
              className={`
                flex-1 z-10
                px-1 
                py-1.5
                text-xs sm:text-sm md:text-base lg:text-lg
                font-medium
                text-center
                whitespace-nowrap
                transition-colors duration-300
                outline-none
                ${active === index ? "text-white" : "text-blue-700"}
                hover:opacity-90
                focus:outline-none
              `}
            >
              <span className="block truncate">
                {testimonial.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-video sm:aspect-[16/9] md:aspect-[16/8] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.img}
            alt={testimonial.name}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
              active === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            loading="lazy"
          />
        ))}
      </div>

      {/* Content */}
      <div 
        className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg transition-all duration-500 ease-in-out"
        key={active}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              active === index ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium">
              "{testimonial.quote}"
            </blockquote>
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`
              transition-all duration-500 ease-in-out
              rounded-full
              focus:outline-none
              h-1.5 sm:h-2
              ${active === index 
                ? 'w-6 sm:w-8 bg-gradient-to-r from-blue-300 to-purple-400' 
                : 'w-1.5 sm:w-2 bg-blue-200 hover:bg-blue-300'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;