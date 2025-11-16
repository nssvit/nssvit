import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "Area Based - 1",
            content: `
            Beach Clean-Ups
            Location: Mahim, Dadar, Juhu
            Through the beach clean-ups, we spread awareness about single-use plastic pollution. We realized that we are responsible for the debris and connected with like-minded people across the city, working together as a team.
    
            Tree Plantation Drives
            Location: Sanjay Gandhi National Park, Aarey Forest
            The Tree Plantation Drive helpes us to connect to mother nature. Participants plant trees to support biodiversity and mitigate climate change, fostering a sense of community and purpose.
    
            Tree Restoration Drive
            Location: Aarey Forest, Sanjay Gandhi National Park
            During the Tree Restoration Drives, we focus on reviving green spaces and restoring natural habitats. This event highlights the significance of caring for the environment.
    
            Ganpati Visarjan Cleanups
            Location: Juhu Beach, Girgaon Chowpatty
            During the post-Ganpati cleanups, we collect the statue remains and other trash, promoting environmental awareness. The event highlights the importance of beach cleanups, recycling, and community responsibility. Volunteers enjoy the teamwork and learn about protecting the ocean, making the event a valuable and impactful experience.
            `
        },
        {
            title: "Area Based - 2",
            content: `
            Orphanage Teaching Drives
            Location: Kurla, Mahim, Sanjay Gandhi National Park
            Orphanage Teachings provide a nurturing environment for children to learn and grow. Volunteers engage with the children, offering educational guidance and mentorship to underprivileged children. The event aims to empower and uplift young minds through knowledge and care.
    
            Polio Vaccination Drives
            Location: Antop Hill
            The Polio Vaccination Drives at Antop Hill aim to eradicate polio through community-wide vaccination efforts. Volunteers work tirelessly to vaccinate the children, protecting them from the effects of polio and promoting public health.
    
            Red Run Marathon
            Location: Wadala
            The Red Run Marathon in Wadala units over 500 individuals in a 3-kilometer race against AIDS/HIV stigma. Top performers are celebrated, adding excitement to the event while spreading awareness, fostering community, and promoting a healthy lifestyle.
    
            Blood Donation Camps
            Location: Churchgate, CSMT
            The Blood Donation Camp is an event where volunteers collect blood from the donors to save lives. Some of our volunteers also donate their own blood, embodying the spirit of community and compassion.
    
            Wall Paintings
            Location: Sion, Chunabhatti
            The Wall Painting brings together volunteers to transform school walls, railway station walls into colorful and inspiring artworks. Through creativity and teamwork, participants beautify the environment, creating a vibrant and welcoming atmosphere for everyone.
            `
        },
        {
            title: "University Events",
            content: `
            Bhajan Sandhya
            Location: Gateway of India
            The Bhajan Sandhya held at Gateway of India on the occasion of Gandhi Jayanti is an enchanting event held every year that is filled with music and soulful songs, including Qawwali performances by NSS volunteers from various colleges. The event celebrats the spirit of unity and harmony through melodious renditions.
    
            Street Play Workshops
            Location: Ruia College
            The Street Play Workshop is a dynamic event uniting participants passionate about street theatre. Led by experienced facilitators, the workshop provided a platform for skill enhancement, awareness creation, and collaborative learning. Through interactive sessions and practical exercises, participants explored the cultural and societal impact of street plays, fostering creativity and dialogue.
    
            De-addiction Rally
            Location: From Azad Maidan to Gateway of India
            The De-addiction Rally, starting from Azad Maidan to Gateway of India, was a vibrant event aimed at spreading awareness about addiction. NSS volunteers engaged in enthusiastic marches, displaying posters and slogans to encourage people to quit addiction. The rally included role plays and songs at Gateway of India, leaving a lasting impression on participants and spectators alike.
    
            Disaster Management Workshop
            Location: College of Home Science, Nirmala Niketan
            The Disaster Management Workshop focused on imparting essential skills to handle emergencies effectively. Through demonstrations and CPR training led by experts, participants learned to respond to various disaster scenarios, including fire incidents and medical emergencies. The workshop aimed to equip individuals with the knowledge and skills to ensure safety and save lives in critical situations.
            `
        },
        {
            title: "College Events",
            content: `
            Orientation Program for NSS Volunteers
            Location: VIT Campus
            The Orientation Program for NSS Volunteers provides a comprehensive overview of NSS principles and objectives. Led by Vijay Gawde sir, the event focuses on fostering unity, skill development, and active participation in community service.
    
            Various Rallies
            Location: VIT Campus
            The rallies are aimed to raise awareness about various things among the youth. Divided into groups, volunteers chant catchy slogans in Hindi and English and hold posters to convey powerful messages. The rallies are a fun and engaging way to spread awareness and promote social causes.
    
            Voters Awareness Campaign
            Location: VIT Campus
            The Voters Awareness Campaign aims to educate students about the importance of voting and the electoral process. Volunteers engage in discussions to encourage voter registration and participation. The campaign empowers students to exercise their democratic rights and contribute to nation-building.
            `
        },
        {
            title: "Competitions",
            content: `
            Aagaz
            Location: G.N Khalsa College
            Our NSS unit participates in the "Aagaz" competition, showcasing talent and creativity in various events.
    
            Devdoot
            Location: RJ College
            At "Devdoot," our volunteers participate in various competitions, including street plays, debates, and poster-making, to promote social causes and community service.
    
            Uttung
            The "Uttung" competition brings together NSS volunteers from different colleges to participate in cultural events, debates, and discussions. The event fosters collaboration, creativity, and social awareness among participants.
            `
        }
    ];
    

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return (
        <div className="max-w-5xl mx-auto p-4">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary animate-fade-in my-6">
                List of Events
            </h2>
            <div className="space-y-6">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-card hover:bg-gradient-card-hover backdrop-blur-sm rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-blue-200 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <button
                            className="w-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left focus:outline-none rounded-xl group"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`accordion-content-${index}`}
                        >
                            <span className="text-lg sm:text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </span>
                            <div className={`w-7 h-7 bg-gradient-accent group-hover:bg-gradient-button rounded-full flex items-center justify-center shadow-soft transition-all duration-300 ${
                                activeIndex === index ? "rotate-180" : ""
                            }`}>
                                <IoIosArrowDown className="w-5 h-5 text-white" />
                            </div>
                        </button>
                        <div
                            id={`accordion-content-${index}`}
                            className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                                activeIndex === index
                                    ? "max-h-[1000px] py-4 sm:py-6"
                                    : "max-h-0 py-0"
                            }`}
                            role="region"
                            aria-labelledby={`accordion-header-${index}`}
                        >
                            <div className="text-text leading-relaxed text-base sm:text-lg">
                                {/* Render content */}
                                {item.content.split("\n").map((line, idx, arr) => {
                                    const trimmedLine = line.trim();
                                    const isLocationLine = trimmedLine.startsWith("Location:");
                                    const isTitleLine = idx === 0 || arr[idx - 1].trim() === "";
    
                                    if (isTitleLine && !isLocationLine && trimmedLine !== "") {
                                        // Title styled with primary color
                                        return (
                                            <p key={idx} className="text-primary font-bold mt-2">
                                                {trimmedLine}
                                            </p>
                                        );
                                    } else if (isLocationLine) {
                                        // Location styled with accent color
                                        return (
                                            <p key={idx} className="text-accent mt-1">
                                                {trimmedLine}
                                            </p>
                                        );
                                    } else if (trimmedLine !== "") {
                                        // Regular text
                                        return (
                                            <p key={idx} className="mt-2">{trimmedLine}</p>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Accordion;
