/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ Hero.tsx
 * ╹ src/components/home/
 */

import { motion } from 'framer-motion';

interface FeaturedAchievement {
  text: string;
  description?: string;
  link?: string;
}

interface Props {
  heroImage?: string;
  volunteerCount?: string;
  heroTagline?: string;
  heroSubtext?: string;
  featuredAchievement?: FeaturedAchievement | null;
}

export default function HeroSection({
  heroImage = '/hero-nss.png',
  volunteerCount = '350+',
  heroTagline = 'NOT ME, BUT YOU',
  heroSubtext = 'Fostering community service and leadership at Vidyalankar since 1999.',
  featuredAchievement = null
}: Props) {
  // Split tagline for animation (handles "NOT ME, BUT YOU" format)
  const taglineParts = heroTagline.includes(',')
    ? heroTagline.split(',').map(s => s.trim())
    : [heroTagline];
    return (
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 pt-6 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 min-h-[340px] md:h-[520px]">

                {/* Main Hero (8 cols) */}
                <div className="md:col-span-8 relative overflow-hidden border border-swiss-gray-200 dark:border-swiss-gray-700 group min-h-[240px] md:min-h-0 isolate">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={heroImage}
                        alt="NSS VIT volunteers at Community Service Day - Green Initiative camp"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/60 to-text/30 -z-10"></div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 md:p-8">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-label text-white/60 mb-2"
                        >
                            National Service Scheme
                        </motion.span>

                        <h1 className="text-display text-white leading-none mb-3 overflow-hidden">
                            {taglineParts.map((part, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.15), duration: 0.8, ease: "circOut" }}
                                >
                                    {part}{index < taglineParts.length - 1 ? ',' : '.'}
                                </motion.div>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-caption text-white/80 max-w-sm"
                        >
                            {heroSubtext}
                        </motion.p>
                    </div>
                </div>

                {/* Right Column (4 cols) */}
                <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="border border-swiss-gray-200 p-4 md:p-5 flex flex-col justify-center bg-white md:flex-1"
                    >
                        <span className="text-label text-swiss-gray-500 mb-1">Volunteers</span>
                        <span className="text-3xl md:text-display font-bold text-text">{volunteerCount}</span>
                        <span className="text-caption text-swiss-gray-500 mt-1 text-xs md:text-sm">Active members</span>
                    </motion.div>

                    {/* Latest Update */}
                    <motion.a
                        href={featuredAchievement?.link || '/achievements'}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="border border-swiss-gray-200 p-4 md:p-5 hover:border-primary transition-colors group/card bg-white block md:flex-1"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-status-success rounded-full animate-pulse"></span>
                            <span className="text-label text-status-success">Update</span>
                        </div>
                        <h3 className="text-sm md:text-base font-semibold text-text mb-1 group-hover/card:text-primary transition-colors">
                            {featuredAchievement?.text || 'Competition Wins'}
                        </h3>
                        <p className="text-caption text-swiss-gray-600 text-xs hidden sm:block">
                            {featuredAchievement?.description || '1st place in Street Play & Group Dance at inter-college events.'}
                        </p>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
