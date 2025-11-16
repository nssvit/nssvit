import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

const achievements = [
    {
        title: "1st in Street Play",
        institution: "G.N. KHALSA COLLEGE, MATUNGA",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/1.jpg"
    },
    {
        title: "1st in Group Dance competition",
        institution: "G.N. KHALSA COLLEGE, MATUNGA",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/2.jpg"
    },
    {
        title: "1st in Treasure Hunt",
        institution: "G.N. KHALSA COLLEGE, MATUNGA",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/3.jpg"
    },
    {
        title: "1st in Fabric Painting",
        institution: "Ramniranjan Jhunjhunwala College, Ghatkoper",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/4.jpg"
    },
    {
        title: "3rd in Group Dance",
        institution: "Ramniranjan Jhunjhunwala College, Ghatkoper",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/5.jpg"
    },
    {
        title: "2nd in Group Dance",
        institution: "R.A Podar College, Matunga",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/6.jpg"
    },
    {
        title: "2nd (Runner Up)",
        institution: "Jai Hind College, Churchgate",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/7.jpg"
    },
    {
        title: "1st in Solo Dance competition",
        institution: "G.N. KHALSA COLLEGE, MATUNGA",
        image: "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/8.jpg"
    }
];

const AchievementCard = ({ achievement, index }) => {
    return (
        <div
            className="animate-fade-in relative overflow-hidden rounded-xl bg-gradient-card hover:bg-gradient-card-hover transition-all duration-300 p-6 shadow-soft hover:shadow-medium"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="flex flex-col h-full space-y-4">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="flex-1 space-y-2">
                    <h3 className="text-text font-bold text-xl">{achievement.title}</h3>
                    <p className="text-blue-600 text-sm">{achievement.institution}</p>
                </div>
                <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-accent rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Achievements = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>NSS VIT | Achievements</title>

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="NSS VIT | Achievements" />
                <meta property="og:description"
                    content="Explore the remarkable achievements and milestones of NSS VIT. Discover our impact through various social initiatives and community service projects." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nssvit.in/achievements" />
                <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NSS VIT | Achievements" />
                <meta name="twitter:description"
                    content="Explore the remarkable achievements and milestones of NSS VIT. Discover our impact through various social initiatives and community service projects." />
                <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />
                <meta name="twitter:domain" content="nssvit.in" />
            </Helmet>
            
            <div className="min-h-screen bg-gradient-light py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
                            Achievements
                        </h2>
                        <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                            A collection of accomplishments and recognition in various competitions and events
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <AchievementCard
                                key={index}
                                achievement={achievement}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Achievements;