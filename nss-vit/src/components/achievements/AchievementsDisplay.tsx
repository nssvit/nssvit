/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ AchievementsDisplay.tsx - Swiss Style
 * ╹ src/components/achievements/
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Trophy, Medal, Award, Star, ZoomIn } from 'lucide-react';
import ImageLightbox from '../shared/ImageLightbox';

interface Achievement {
  _id: string;
  title: string;
  institution: string;
  description?: string;
  image?: string;
  participants?: string[];
  category?: string;
  isFeatured?: boolean;
  year: string;
}

interface Props {
  achievements: Achievement[];
  years: string[];
}

export default function AchievementsDisplay({ achievements, years }: Props) {
  // Sort years descending
  const sortedYears = [...years].sort((a, b) => b.localeCompare(a));
  const [selectedYear, setSelectedYear] = useState(sortedYears[0] || '');
  const [isYearOpen, setIsYearOpen] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (image: string) => {
    if (image) {
      setLightboxImages([image]);
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  };

  const currentAchievements = achievements.filter(a => a.year === selectedYear);
  const featuredAchievements = currentAchievements.filter(a => a.isFeatured);
  const otherAchievements = currentAchievements.filter(a => !a.isFeatured);

  // Count stats
  const totalWins = currentAchievements.length;
  const firstPlaces = currentAchievements.filter(a =>
    a.title.toLowerCase().includes('1st') || a.title.toLowerCase().includes('first')
  ).length;
  const uniqueColleges = [...new Set(currentAchievements.map(a => a.institution))].length;

  // Get position badge
  const getPositionBadge = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('1st') || lower.includes('first')) return { text: '1st', color: 'bg-amber-500' };
    if (lower.includes('2nd') || lower.includes('second') || lower.includes('runner')) return { text: '2nd', color: 'bg-gray-400' };
    if (lower.includes('3rd') || lower.includes('third')) return { text: '3rd', color: 'bg-amber-700' };
    return null;
  };

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
          {/* === HERO SECTION === */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left: Big Number & Stats */}
              <div className="lg:col-span-2 bg-text p-6 md:p-12 lg:p-16 flex flex-col min-h-[280px] md:min-h-[350px]">
                {/* Year Selector */}
                <div className="relative inline-block mb-4 md:mb-6">
                  <button
                    onClick={() => setIsYearOpen(!isYearOpen)}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="text-label">{selectedYear}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isYearOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isYearOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-swiss-gray-200 shadow-lg z-50 min-w-[140px]">
                      {sortedYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setIsYearOpen(false);
                          }}
                          className={`block w-full px-4 py-3 text-left text-sm hover:bg-swiss-gray-50 ${
                            selectedYear === year ? 'text-primary font-semibold' : 'text-text'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Big Number */}
                <div className="mb-6 md:mb-8">
                  <span className="text-[80px] md:text-[120px] lg:text-[140px] font-bold text-white leading-none tracking-tighter">
                    {totalWins}
                  </span>
                  <span className="text-title md:text-headline text-white/80 block -mt-2 md:-mt-4">
                    {totalWins === 1 ? 'Achievement' : 'Achievements'}
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-6 mt-auto text-white/70">
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-white">{firstPlaces}</span>
                    <p className="text-xs md:text-caption">1st Places</p>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-white">{uniqueColleges}</span>
                    <p className="text-xs md:text-caption">Colleges</p>
                  </div>
                </div>
              </div>

              {/* Right: Featured Achievement Showcase */}
              <div className="lg:col-span-3 bg-primary p-6 md:p-12 lg:p-16 flex flex-col justify-center min-h-[280px] md:min-h-[350px]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-label text-white/60 block mb-2">Highlights</span>
                    <h2 className="text-title md:text-headline text-white">Excellence in Competition</h2>
                  </div>
                </div>
                <p className="text-caption md:text-body text-white/80 leading-relaxed">
                  Our volunteers have demonstrated exceptional talent and dedication, winning accolades
                  across various inter-college competitions in street plays, dance, and creative events.
                </p>
              </div>
            </div>
          </section>

          {/* === STATS BAR === */}
          <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="bg-swiss-gray-50 border-t border-b border-swiss-gray-200">
              <div className="grid grid-cols-3 divide-x divide-swiss-gray-200">
                <div className="py-4 px-2 md:p-8 text-center">
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-amber-500 mx-auto mb-2" />
                  <span className="text-xl md:text-3xl font-bold text-text block">{firstPlaces}</span>
                  <p className="text-xs md:text-caption text-swiss-gray-500">Gold Medals</p>
                </div>
                <div className="py-4 px-2 md:p-8 text-center">
                  <Medal className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mx-auto mb-2" />
                  <span className="text-xl md:text-3xl font-bold text-text block">
                    {currentAchievements.filter(a => a.title.toLowerCase().includes('2nd') || a.title.toLowerCase().includes('runner')).length}
                  </span>
                  <p className="text-xs md:text-caption text-swiss-gray-500">Silver Medals</p>
                </div>
                <div className="py-4 px-2 md:p-8 text-center">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-700 mx-auto mb-2" />
                  <span className="text-xl md:text-3xl font-bold text-text block">
                    {currentAchievements.filter(a => a.title.toLowerCase().includes('3rd') || a.title.toLowerCase().includes('third')).length}
                  </span>
                  <p className="text-xs md:text-caption text-swiss-gray-500">Bronze Medals</p>
                </div>
              </div>
            </div>
          </section>

          {/* === FEATURED ACHIEVEMENTS === */}
          {featuredAchievements.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-16">
              <div className="mb-6 md:mb-8">
                <span className="text-label text-primary mb-2 block">Featured</span>
                <h3 className="text-title md:text-headline text-text">Top Achievements</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {featuredAchievements.slice(0, 3).map((achievement, index) => {
                  const badge = getPositionBadge(achievement.title);
                  return (
                    <motion.div
                      key={achievement._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden bg-white border border-swiss-gray-200 hover:border-primary transition-colors"
                    >
                      {/* Image - Clickable */}
                      <button
                        onClick={() => openLightbox(achievement.image || '')}
                        className="aspect-[4/3] w-full overflow-hidden bg-swiss-gray-100 relative cursor-pointer"
                        disabled={!achievement.image}
                      >
                        {achievement.image ? (
                          <>
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Trophy className="w-10 h-10 md:w-12 md:h-12 text-swiss-gray-300" />
                          </div>
                        )}
                        {/* Position Badge */}
                        {badge && (
                          <div className={`absolute top-2 left-2 md:top-3 md:left-3 ${badge.color} text-white px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-bold`}>
                            {badge.text}
                          </div>
                        )}
                      </button>

                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <h4 className="text-caption md:text-title font-semibold text-text mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {achievement.title}
                        </h4>
                        <p className="text-xs md:text-caption text-primary mb-2">{achievement.institution}</p>
                        {achievement.description && (
                          <p className="text-xs md:text-caption text-swiss-gray-500 line-clamp-2">{achievement.description}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          )}

          {/* === ALL ACHIEVEMENTS GRID === */}
          {otherAchievements.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-16 border-t border-swiss-gray-200">
              <div className="mb-6 md:mb-8">
                <span className="text-label text-primary mb-2 block">All Wins</span>
                <h3 className="text-title md:text-headline text-text">Complete List</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {otherAchievements.map((achievement, index) => {
                  const badge = getPositionBadge(achievement.title);
                  return (
                    <motion.div
                      key={achievement._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % 4) * 0.05 }}
                      className="group border border-swiss-gray-200 hover:border-primary transition-all bg-white"
                    >
                      {/* Compact Image - Clickable */}
                      <button
                        onClick={() => openLightbox(achievement.image || '')}
                        className="aspect-[3/2] w-full overflow-hidden bg-swiss-gray-50 relative cursor-pointer"
                        disabled={!achievement.image}
                      >
                        {achievement.image ? (
                          <>
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Star className="w-6 h-6 md:w-8 md:h-8 text-swiss-gray-200" />
                          </div>
                        )}
                        {badge && (
                          <div className={`absolute top-1.5 left-1.5 md:top-2 md:left-2 ${badge.color} text-white px-1.5 py-0.5 md:px-2 text-[10px] md:text-xs font-bold`}>
                            {badge.text}
                          </div>
                        )}
                      </button>

                      {/* Content */}
                      <div className="p-3 md:p-4">
                        <h4 className="text-xs md:text-caption font-semibold text-text mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {achievement.title}
                        </h4>
                        <p className="text-[10px] md:text-xs text-swiss-gray-500 line-clamp-1">{achievement.institution}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          )}

          {/* === NO ACHIEVEMENTS MESSAGE === */}
          {currentAchievements.length === 0 && (
            <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-16 text-center">
              <Trophy className="w-16 h-16 text-swiss-gray-200 mx-auto mb-4" />
              <h3 className="text-title text-text mb-2">No achievements yet</h3>
              <p className="text-caption text-swiss-gray-500">
                Achievements for {selectedYear} will be added soon.
              </p>
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
        alt="Achievement photo"
      />
    </div>
  );
}
