import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Cloudinary configuration
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557641/img";

// Configuration object for sections and their image counts for both years
const sectionConfig2023 = {
  ab1: 18,
  ab2: 11,
  university: 11,
  clg: 17,
  camp: 33,
};

const sectionConfig2024 = {
  ab1: 15,
  ab2: 21,
  university: 13,
  clg: 12,
  camp: 20,
};

const categoryLabels = {
  ab1: "Area Based 1",
  ab2: "Area Based 2",
  university: "University",
  clg: "College",
  camp: "Camp"
};

const yearOptions = [
  { value: "2024-2025", label: "2024-2025" },
  { value: "2023-2024", label: "2023-2024" }
];

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState(yearOptions[0].value);
  const [selectedCategory, setSelectedCategory] = useState('ab1');
  const [lightboxImage, setLightboxImage] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentConfig = selectedYear === "2024-2025" ? sectionConfig2024 : sectionConfig2023;

  const getImagesForSection = (section) => {
    const count = currentConfig[section];
    return Array.from({ length: count }, (_, i) =>
      `${CLOUDINARY_BASE_URL}/${selectedYear}/${section}/${i + 1}.jpg`
    );
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setImageLoaded({});
    setIsDropdownOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setImageLoaded({});
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage('');
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const currentImages = getImagesForSection(selectedCategory);

  return (
    <HelmetProvider>
      <div className="px-4 py-10 md:px-10 lg:px-16">
        <Helmet>
          <title>NSS VIT | Gallery</title>
          <meta name="description" content="Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps." />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="NSS VIT | Gallery" />
          <meta property="og:description" content="Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nssvit.in/gallery" />
          <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="nssvit.in" />
          <meta property="twitter:url" content="https://www.nssvit.in/gallery" />
          <meta name="twitter:title" content="NSS VIT | Gallery" />
          <meta name="twitter:description" content="Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps." />
          <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

        </Helmet>

        {/* Year Selector Dropdown */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="relative w-48 mx-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-400 rounded-full shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-white font-medium">{selectedYear}</span>
              <svg
                className={`w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white rounded-lg shadow-medium z-50">
                {yearOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleYearChange(option.value)}
                    className="w-full px-4 py-2 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-blue-700 first:rounded-t-lg last:rounded-b-lg transition-colors duration-300"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

{/* Category buttons */}
<div className="max-w-5xl mx-auto mb-10 px-2 sm:px-4">
  <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-0.5 sm:p-1 flex justify-between items-center shadow-lg overflow-hidden">
    {/* Animated selection indicator */}
    <div
      className="absolute h-full rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300"
      style={{
        width: `${100 / Object.keys(currentConfig).length}%`,
        transform: `translateX(${Object.keys(currentConfig).indexOf(selectedCategory) * 100}%)`,
      }}
    ></div>

    {/* Buttons */}
    {Object.keys(currentConfig).map((category) => (
      <button
        key={category}
        onClick={() => handleCategoryChange(category)}
        className={`flex-1 z-10 py-2 px-1 text-xs xs:text-sm sm:text-base font-medium outline-none transition-colors duration-300 leading-tight min-h-[40px] flex items-center justify-center text-center ${
          selectedCategory === category ? "text-white" : "text-blue-700"
        }`}
      >
        <span className="inline-block">{categoryLabels[category]}</span>
      </button>
    ))}
  </div>
</div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div
              className="relative aspect-square overflow-hidden rounded-lg bg-gradient-card hover:bg-gradient-card-hover shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                onClick={() => openLightbox(image)}
                onLoad={() => handleImageLoad(index)}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-15 transition-opacity duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
              ></div>
            </div>
          ))}
        </div>

        {/* Lightbox - Modified to show original aspect ratio */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-blue-800/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] mx-auto animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition-colors"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged gallery image"
                className="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-strong"
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default Gallery;