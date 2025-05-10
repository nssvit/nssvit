import React from "react";

const AnnouncementSection = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-transparent bg-clip-text bg-gradient-primary">
                Latest Announcements
            </h2>

            <div className="space-y-8">

                {/* Announcement 1 - NSS Scrutiny */}
                <div className="bg-background shadow-lg rounded-lg overflow-hidden p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                        NSS Scrutiny Announcement
                    </h3>
                    <p className="text-text mb-4 font-semibold">
                        📣 24-02-2025: Important announcement regarding upcoming NSS scrutiny! 📋
                    </p>

                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                        <p className="text-text font-medium">
                            Dear NSS Volunteers,
                        </p>
                        <p className="text-text mt-2">
                            We're pleased to inform you that our NSS unit is scheduled for scrutiny on <span className="font-bold">27th February 2025</span>. Our preparation and documentation are complete, and we're ready to showcase the incredible work our volunteers have accomplished throughout the year.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gradient-card p-5 rounded-lg shadow-soft">
                            <h4 className="text-lg font-semibold text-text mb-2">Scrutiny Details:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span><span className="font-medium">Date:</span> 27th February, 2025</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span><span className="font-medium">Time:</span> 10:30 AM to 11:00 AM</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span><span className="font-medium">Venue:</span> Lala Lajpatrai College Of Commerce & Economics (Autonomous), Mahalaxmi-34</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-card p-5 rounded-lg shadow-soft">
                            <h4 className="text-lg font-semibold text-text mb-2">To-Do Before Scrutiny:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <span>Review of documentation and activities</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <span>Brief interaction with key volunteers</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <span>Presentation of our activities and achievements</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-text mb-6">
                        All required documentation has been prepared and is ready for review. The NSS Program Officer and core team members are requested to be present at the venue by 10:15 AM. We're confident that our unit's dedicated work and meticulous record-keeping will shine during the scrutiny process.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                        <p className="text-lg font-semibold text-primary">
                            We are scrutiny-ready! 🎯
                        </p>
                        <p className="text-text mt-2">
                            Thank you to all volunteers for your contributions throughout the year that have made this possible.
                        </p>
                    </div>
                </div>


                {/* Announcement 2 - NSS Achievements Showcase */}
                <div className="bg-background shadow-lg rounded-lg overflow-hidden p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                        NSS Competition Achievements
                    </h3>
                    <p className="text-text mb-4 font-semibold">
                        📣 15-02-2025: Our NSS volunteers have been excelling in various inter-college competitions! 🏆
                    </p>

                    <div className="w-full h-auto max-w-full mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <img
                                src="https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/1.jpg"
                                alt="Street Play Victory"
                                className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
                            <img
                                src="https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/2.jpg"
                                alt="Group Dance Competition"
                                className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
                            <img
                                src="https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740584988/img/2024-2025/achievements/7.jpg"
                                alt="Runner Up Trophy"
                                className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <p className="text-text mb-6">
                        We're proud to announce that our NSS volunteers have secured multiple first and second positions in competitions across colleges in Mumbai, including G.N. KHALSA COLLEGE, Ramniranjan Jhunjhunwala College, and Jai Hind College.
                    </p>

                    <div className="flex justify-center mt-8">
                        <a
                            href="/achievements"
                            className="inline-flex items-center px-6 py-3 bg-gradient-button hover:bg-gradient-button-hover text-white font-medium rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:animate-button-pop"
                        >
                            <span>View All Achievements</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>


                {/* Announcement 3 - NSS Camp*/}
                <div className="bg-background shadow-lg rounded-lg overflow-hidden p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                        NSS Special Camp 2024-2025 Success
                    </h3>
                    <p className="text-text mb-4 font-semibold">
                        📣 04-12-2024: The NSS Special Camp to Kuderan Village has been a huge success, bringing positive change and community engagement! 🌟
                    </p>
                    <div className="w-full h-auto max-w-full">
                        <img
                            src="https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557660/img/announcement/camp_announcement.jpg"
                            alt="NSS Special Camp in Kuderan Village"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Announcement 4 - NSS Achievement*/}
                <div className="bg-background shadow-lg rounded-lg overflow-hidden p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                        NSS Achievements by Volunteers
                    </h3>
                    <p className="text-text mb-4 font-semibold">
                        📣 26-11-2024: 🌟 "Success is the result of preparation, hard work, and learning from failures!" 🚦
                    </p>
                    <p className="text-text mb-4 font-semibold">
                        Our NSS volunteers recently participated in the Quiz and Debate Competition on Road Safety Awareness organized by PCGT Organisation at their Mahalaxmi office.
                    </p>

                    <div className="w-full h-auto max-w-full">
                        <p className="text-text mb-4">
                            We are thrilled to share that our brilliant volunteers achieved
                            remarkable success:
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <h5 className="text-lg font-semibold text-blue-700">
                                    🎤 Debate Competition
                                </h5>
                                <p className="text-text">
                                    🥇 Mr. Yash Pawar &amp; Mr. Om Naphade secured the 1st place!
                                </p>
                            </li>
                            <li>
                                <h5 className="text-lg font-semibold text-blue-700">
                                    🧠 Quiz Competition
                                </h5>
                                <p className="text-text">
                                    🥇 Ms. Kashish Chaurasiya &amp; Ms. Jyotsna Kasibhotla
                                    clinched the 1st place!
                                </p>
                            </li>
                        </ul>
                    </div>

                    <p className="text-text mt-6 text-lg font-medium">
                        👏 Heartiest congratulations to all the winners for their
                        outstanding achievements! You've made us proud! Let's keep striving
                        to create awareness and make a difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementSection;