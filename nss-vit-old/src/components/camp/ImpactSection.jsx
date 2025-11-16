import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImpactItem = ({ title, description, imgSrc, altText, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col lg:flex-row gap-8 items-center mb-16 last:mb-0"
  >
    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-primary">{title}</h3>
      <div className="h-1 w-16 bg-gradient-accent rounded-full mb-5"></div>
      <p className="text-text text-base md:text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const impactData = {
  "2024-2025": [
    {
      title: "Restoration of Bhandara Dam",
      description: "Our volunteers rolled up their sleeves and restored the Bhandara (dam), providing crucial irrigation for Kuderan Village. This restoration project has had a direct impact on the agricultural sustainability of the community.",
      imgSrc: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560394/img/2024-2025/impact/1.jpg",
      altText: "Volunteers working on Bhandara Dam restoration"
    },
    {
      title: "Sustainable Compost Pit Creation",
      description: "Volunteers established a sustainable compost pit, introducing environmentally friendly waste management practices to the village and promoting long-term sustainability.",
      imgSrc: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560394/img/2024-2025/impact/2.jpg",
      altText: "Newly created compost pit"
    },
    {
      title: "Village Health Camp",
      description: "A highly successful Health Camp provided essential medical check-ups and advice to over 170 villagers, many of whom have limited access to healthcare services. This initiative directly addressed critical health needs in the community.",
      imgSrc: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560394/img/2024-2025/impact/3.jpg",
      altText: "Health camp providing medical services"
    }
  ],
  "2023-2024": [
    {
      title: "Cleanliness Drive at Khandoba Temple",
      description: "On the second day of our camp, we undertook a mission to clean the premises of Khandoba Temple, including the stairs leading up to it. During this activity, a 9-year-old boy from the village joined us, participating in the cleaning process. This moment was particularly inspiring, as it demonstrated how our efforts instilled a sense of responsibility and community spirit among the villagers.",
      imgSrc: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557657/img/2023-2024/impact/1.jpg",
      altText: "Cleanliness Drive at Khandoba Temple"
    },
    {
      title:"Installation of Garbage Disposal Facilities",
      description:"Following our plogging activity, we identified a lack of proper garbage disposal facilities as a significant issue. In response to our clean-up drive, the village head took swift action and installed large blue drums within the temple premises. These drums now serve as designated garbage bins, encouraging proper waste disposal and maintaining the cleanliness of the area.",
      imgSrc:"https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557658/img/2023-2024/impact/3.jpg",
      altText:"Installation of Garbage Disposal Facilities"
    },
    {
      title:"Career Guidance and Sports Competitions",
      description:"Our volunteers conducted a career guidance session for 10th-grade students, providing them with valuable insights and advice for their future paths. Additionally, we organized sports competitions, including games like kabaddi and kho-kho. Our efforts were recognized by the school principal, who commended our unit for contributing to the students' overall development.",
      imgSrc:"https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557657/img/2023-2024/impact/4.jpg",
      altText:"Career Guidance and Sports Competitions"
    }
  ]
};

const yearOptions = [
  { value: "2024-2025", label: "2024-2025" },
  { value: "2023-2024", label: "2023-2024" }
];

const ImpactSection = () => {
  const [selectedYear, setSelectedYear] = useState(yearOptions[0].value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-light">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
            Impact
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg">
            See how our initiatives have created meaningful change in communities year after year.
          </p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Year Selector Dropdown */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative w-48 mx-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 text-left bg-gradient-button hover:bg-gradient-button-hover rounded-full shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-between animate-fade-in"
            >
              <span className="text-white font-medium">{selectedYear}</span>
              <svg
                className={`w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white rounded-lg shadow-medium z-50 animate-fade-in">
                {yearOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleYearChange(option.value)}
                    className="w-full px-4 py-3 text-left hover:bg-blue-100 text-text first:rounded-t-lg last:rounded-b-lg transition-colors duration-300"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Impact Items for Selected Year */}
        <div className="space-y-24">
          {impactData[selectedYear].map((item, index) => (
            <ImpactItem
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              altText={item.altText}
            />
          ))}
        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 w-full max-w-xs mx-auto bg-gradient-accent rounded-full mt-16 opacity-50"></div>
      </div>
    </section>
  );
};

export default ImpactSection;