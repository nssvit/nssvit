/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CampDisplay.tsx - Swiss Style Redesign
 * ╹ src/components/camp/
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, ArrowRight, ZoomIn } from 'lucide-react';
import ImageLightbox from '../shared/ImageLightbox';

interface Impact {
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface CampData {
  year: string;
  location: string;
  dates: string;
  theme: string;
  description: string;
  highlights: string[];
  carouselImages: string[];
  impact: Impact[];
  tabs: {
    significance: string;
    benefits: Benefit[];
    activities: string[];
  };
  volunteersParticipated?: number;
  beneficiariesReached?: number;
}

interface Props {
  camps: CampData[];
}

export default function CampDisplay({ camps }: Props) {
  // Sort years descending to get latest first (2024-2025 > 2023-2024)
  const sortedCamps = [...camps].sort((a, b) => b.year.localeCompare(a.year));
  const years = sortedCamps.map(c => c.year);

  const [selectedYear, setSelectedYear] = useState(years[0] || '');
  const currentCamp = camps.find(c => c.year === selectedYear);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!currentCamp) return null;

  return (
    <div className="space-y-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* === HERO SECTION - Consistent with other pages === */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 pt-12 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Left: Title & Description */}
              <div className="lg:col-span-7">
                <span className="text-label text-primary mb-4 block">Special Camp</span>
                <h1 className="text-display text-text mb-4">7 DAYS OF SERVICE</h1>
                <p className="text-body text-swiss-gray-600 max-w-xl">
                  Our annual residential camp where volunteers immerse themselves in rural
                  communities, conducting development activities and creating lasting impact.
                </p>
              </div>

              {/* Right: Stats */}
              <div className="lg:col-span-5 flex gap-6 lg:justify-end">
                <div className="border-l-4 border-primary pl-6">
                  <span className="text-[64px] md:text-[80px] font-bold text-text leading-none">
                    {currentCamp.volunteersParticipated || '55'}
                  </span>
                  <p className="text-caption text-swiss-gray-500 mt-1">Volunteers</p>
                </div>
                <div className="border-l-4 border-swiss-gray-200 pl-6">
                  <span className="text-[64px] md:text-[80px] font-bold text-swiss-gray-300 leading-none">
                    {currentCamp.beneficiariesReached || '600'}
                  </span>
                  <p className="text-caption text-swiss-gray-500 mt-1">Beneficiaries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Year Navigation */}
          <section className="border-y border-swiss-gray-200 bg-swiss-gray-50">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10">
              <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                <span className="text-label text-swiss-gray-400 mr-4 flex-shrink-0">Year:</span>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-all whitespace-nowrap ${
                      year === selectedYear
                        ? 'bg-text text-white'
                        : 'bg-white border border-swiss-gray-200 text-swiss-gray-600 hover:border-text hover:text-text'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Camp Content Section */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Main Image */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/9] overflow-hidden bg-swiss-gray-100 group">
                  {currentCamp.carouselImages?.[0] ? (
                    <img
                      src={currentCamp.carouselImages[0]}
                      alt={`${currentCamp.year} Special Camp at ${currentCamp.location}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-swiss-gray-400">Camp Photo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Camp Info - Stretch to match image height */}
              <div className="lg:col-span-5 flex flex-col gap-2 lg:aspect-[16/9]">
                {/* Theme Card - Takes more space */}
                <div className="bg-primary p-5 md:p-6 flex flex-col justify-center flex-[2]">
                  <span className="text-label text-white/60 mb-2">Theme {selectedYear}</span>
                  <h2 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.2]">
                    {currentCamp.theme}
                  </h2>
                </div>

                {/* Info Cards - Takes more space */}
                <div className="grid grid-cols-2 gap-2 flex-[2]">
                  <div className="bg-swiss-gray-50 p-4 md:p-5 flex flex-col justify-center">
                    <MapPin className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs text-swiss-gray-400 block mb-1">Location</span>
                    <span className="text-caption md:text-body font-medium text-text">{currentCamp.location}</span>
                  </div>
                  <div className="bg-swiss-gray-50 p-4 md:p-5 flex flex-col justify-center">
                    <Calendar className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs text-swiss-gray-400 block mb-1">Duration</span>
                    <span className="text-caption md:text-body font-medium text-text">{currentCamp.dates}</span>
                  </div>
                </div>

                {/* Days Badge - Takes remaining space */}
                <div className="bg-text p-4 md:p-5 flex items-center justify-between flex-1">
                  <div>
                    <span className="text-xs md:text-sm text-white/60 block mb-1">Camp Duration</span>
                    <span className="text-caption md:text-body font-semibold text-white">Residential Program</span>
                  </div>
                  <span className="text-[40px] md:text-[48px] font-bold text-white leading-none">7</span>
                </div>
              </div>
            </div>
          </section>

          {/* === DESCRIPTION === */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-24 border-b border-swiss-gray-200">
            <div className="max-w-4xl mx-auto">
              <p className="text-title md:text-headline lg:text-[28px] text-text leading-relaxed text-center">
                "{currentCamp.description}"
              </p>
            </div>
          </section>

          {/* === BENTO GRID: Activities, Benefits, Significance === */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Activities - Large Card */}
              <div className="md:col-span-7 bg-swiss-gray-50 p-6 md:p-12">
                <span className="text-label text-primary mb-3 md:mb-4 block">What We Did</span>
                <h3 className="text-title md:text-headline text-text mb-6 md:mb-8">Activities</h3>
                <div className="space-y-3 md:space-y-4">
                  {currentCamp.tabs.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4 group">
                      <span className="text-xl md:text-3xl font-bold text-swiss-gray-300 group-hover:text-primary transition-colors w-8 md:w-12 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-caption md:text-body text-swiss-gray-600 pt-0.5 md:pt-1">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Benefits + Highlights */}
              <div className="md:col-span-5 space-y-4">
                {/* Benefits */}
                <div className="bg-swiss-gray-100 p-6 md:p-10">
                  <span className="text-label text-primary mb-3 md:mb-4 block">Why It Matters</span>
                  <h3 className="text-title text-text mb-4 md:mb-6">Benefits</h3>
                  <div className="space-y-3 md:space-y-4">
                    {currentCamp.tabs.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="border-l-2 border-primary pl-3 md:pl-4">
                        <h4 className="text-caption font-semibold text-text mb-1">{benefit.title}</h4>
                        <p className="text-xs md:text-caption text-swiss-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Quick List */}
                {currentCamp.highlights.length > 0 && (
                  <div className="border border-swiss-gray-200 p-6 md:p-8">
                    <span className="text-label text-primary mb-3 md:mb-4 block">Highlights</span>
                    <ul className="space-y-2">
                      {currentCamp.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs md:text-caption text-swiss-gray-600">
                          <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* === SIGNIFICANCE === */}
          {currentCamp.tabs.significance && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-24">
              <div className="bg-swiss-gray-50 p-6 md:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="text-label text-primary mb-3 md:mb-4 block">The Purpose</span>
                  <h3 className="text-title md:text-headline text-text mb-4 md:mb-8">Significance</h3>
                  <p className="text-caption md:text-body text-swiss-gray-600 leading-relaxed">
                    {currentCamp.tabs.significance}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* === IMPACT GALLERY === */}
          {currentCamp.impact.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-24">
              <div className="mb-6 md:mb-12 text-center">
                <span className="text-label text-primary mb-2 md:mb-4 block">Stories</span>
                <h3 className="text-title md:text-headline text-text">Impact & Moments</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {currentCamp.impact.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => openLightbox(currentCamp.impact.map(i => i.imgSrc), index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative group overflow-hidden cursor-pointer text-left ${
                      index === 0 ? 'md:col-span-2 h-[200px] md:h-[400px]' : 'h-[180px] md:h-[300px]'
                    }`}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.altText}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <h4 className="text-caption md:text-title text-white mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-xs md:text-caption text-white/80 line-clamp-2">{item.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>
          )}

          {/* === CAMP GALLERY STRIP === */}
          {currentCamp.carouselImages.length > 1 && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-16 border-t border-swiss-gray-200">
              <div className="mb-6 md:mb-8">
                <span className="text-label text-primary mb-2 block">Gallery</span>
                <h3 className="text-caption md:text-title font-semibold text-text">More Moments</h3>
                <p className="text-xs text-swiss-gray-500 mt-1">Tap to view full size</p>
              </div>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {currentCamp.carouselImages.slice(1).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(currentCamp.carouselImages.slice(1), index)}
                    className="flex-shrink-0 w-48 h-36 md:w-64 md:h-48 relative overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Camp moment ${index + 1}`}
                      className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt="Camp photo"
      />
    </div>
  );
}
