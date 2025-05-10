import React from 'react';

const AboutSection = () => {
    return (
        <div className="py-12 px-6 sm:px-10 lg:px-16 bg-background animate-fade-in">
            <div className="max-w-6xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text 
                             bg-gradient-primary animate-fade-in">
                    About
                </h2>

                {/* Main Card */}
                <div className="bg-gradient-card p-8 rounded-2xl shadow-soft animate-fade-in">
                    <h3 className="text-2xl font-semibold text-text">What is NSS?</h3>
                    <p className="mt-4 text-text/80 text-md leading-relaxed">
                        The National Service Scheme (NSS) is a government-sponsored public service program 
                        conducted by the Ministry of Youth Affairs and Sports of the Government of India. 
                        It aims to instill the idea of social welfare in students by engaging them in 
                        various community service activities.
                    </p>

                    <h3 className="text-2xl font-semibold text-text mt-8">Why Join NSS?</h3>
                    <p className="mt-4 text-text/80 text-lg leading-relaxed text-left">
                        Joining NSS offers numerous benefits, including:
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-3 text-text/70 text-base text-left">
                        <li className="hover:text-primary transition-colors">
                            Opportunity to contribute to society
                        </li>
                        <li className="hover:text-primary transition-colors">
                            Developing leadership and teamwork skills
                        </li>
                        <li className="hover:text-primary transition-colors">
                            Enhancing personal growth and social awareness
                        </li>
                        <li className="hover:text-primary transition-colors">
                            Building a network of like-minded individuals
                        </li>
                    </ul>

                    <div className="mt-8 flex justify-center">
                        <a
                            href='https://nss.gov.in/'
                            target='_blank'
                            className='bg-gradient-button text-white py-3 px-8 rounded-full shadow-soft 
                                     hover:animate-button-pop transform transition-all duration-300 
                                     hover:shadow-lg font-medium'
                            rel="noopener noreferrer">
                            Know More
                        </a>
                    </div>
                </div>

                {/* Description Section */}
                <div className='p-8 animate-fade-in'>
                    <p className="text-lg text-text/80 max-w-5xl mx-auto leading-relaxed text-balance">
                        At Vidyalankar Institute of Technology (Wadala), the National Service Scheme (NSS) 
                        unit is dedicated to fostering a culture of community service, social responsibility, 
                        and leadership development among students. Our sustainable projects and initiatives 
                        aim to create a positive impact on society while nurturing future leaders.
                    </p>
                </div>

                {/* Mission and Vision Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-lg 
                                  transition-shadow duration-300 transform hover:-translate-y-1 
                                  flex flex-col justify-between animate-fade-in">
                        <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                        <p className="mt-4 text-text/70">
                            To create a nurturing environment for students, where they can develop essential 
                            life skills through community service. We aim to instill a sense of 
                            responsibility towards society, while making a tangible difference through 
                            various service initiatives.
                        </p>
                    </div>

                    <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-lg 
                                  transition-shadow duration-300 transform hover:-translate-y-1 
                                  flex flex-col justify-between animate-fade-in"
                         style={{animationDelay: '0.2s'}}>
                        <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                        <p className="mt-4 text-text/70">
                            To become a leading organization that empowers students to engage in meaningful 
                            community service, creating a positive impact on society, fostering a sense of 
                            unity, and developing future leaders with compassion and commitment.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <p className="text-xl italic text-text/80 bg-gradient-card p-6 rounded-2xl 
                                shadow-soft inline-block">
                        Join us in our mission to serve the community and make a lasting difference! 
                        <span className="block mt-2 font-semibold text-primary">
                            Become a part of NSS and contribute to the society while growing as an individual.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;