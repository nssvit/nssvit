import React from "react";

const NewHeads = () => {
    const defaultFallbackImg = 'https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560607/img/2024-2025/team/user.webp';

    const details = [
        {
            "name": "Prof. Rakshak Sood",
            "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/rakshaksood.jpg",
            "linkedin": "https://www.linkedin.com/in/rakshak-sood-2491a4101/",
            "email": "mailto:rakshak.sood@vit.edu.in",
            "position": "Program Officer"
        },
        {
            "name": "Prof. Rohit Barve",
            "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/rohitbarve.jpg",
            "linkedin": "https://www.linkedin.com/in/rohit-barve/",
            "email": "mailto:rohit.barve@vit.edu.in",
            "position": "Faculty Advisor"
        },
        {
            "name": "Prof. Aarti Koduri",
            "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/aartikoduri.jpg",
            "linkedin": "https://www.linkedin.com/in/aarti-koduri-07455b2bb/",
            "email": "mailto:aarti.koduri@vit.edu.in",
            "position": "Faculty Advisor"
        },
        {
            "name": "Yash Pawar",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/yash-pawar-33a94a288/",
            "email": "mailto:yash.pawar@vit.edu.in",
            "position": "Lead"
        },
        {
            "name": "Shreyas Shetty",
            "img": "",
            "linkedin": "",
            "email": "mailto:shreyas.shetty23@vit.edu.in",
            "position": "Co-Lead"
        },
        {
            "name": "Vaishnavi Patil",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/vaishnavi-patil45/",
            "email": "mailto:vaishnavi.patil23@vit.edu.in",
            "position": "Co-Lead"
        },
        {
            "name": "Srishti Yadav",
            "img": "",
            "linkedin": "",
            "email": "mailto:srishti.yadav@vit.edu.in",
            "position": "Operational Lead"
        },
        {
            "name": "Jitesh Gaikwad",
            "img": "",
            "linkedin": "",
            "email": "mailto:jitesh.gaikwad@vit.edu.in",
            "position": "Operational Lead"
        },
        {
            "name": "Rishi Phadle",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/rishi-phadale-963164274/",
            "email": "mailto:rishi.phalde@vit.edu.in",
            "position": "Documentation Head"
        },
        {
            "name": "Jayraj Sawant",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/jayraj-sawant12/",
            "email": "mailto:jayraj.sawant@vit.edu.in",
            "position": "Documentation Head"
        },
        {
            "name": "Aniket Saw",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/aniket-saw/",
            "email": "mailto:aniket.saw@vit.edu.in",
            "position": "Creatives Head"
        },
        {
            "name": "Sneha Gadhari",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/snehagadhari2005/",
            "email": "mailto:sneha.gadhari@vit.edu.in",
            "position": "Creatives Head"
        },
        {
            "name": "Samiksha Chavan",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/samikshachavan22/",
            "email": "mailto:samiksha.chavan@vit.edu.in",
            "position": "Events Head"
        },
        {
            "name": "Sarthak Sawant",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/sarthak-sawant-2ab39b301/",
            "email": "mailto:sarthak.sawant@vit.edu.in",
            "position": "Events Head"
        },
        {
            "name": "Harshal More",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/harshalmore31/",
            "email": "mailto:harshal.more@vit.edu.in",
            "position": "Technical Head"
        },
        {
            "name": "Gargi Godse",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/gargi-godse-911a30289/",
            "email": "mailto:gargi.godse@vit.edu.in",
            "position": "RRC Head"
        },
        {
            "name": "Om Naphade",
            "img": "",
            "linkedin": "",
            "email": "mailto:om.naphade@vit.edu.in",
            "position": "Publicity Co-ordinator"
        },
        {
            "name": "Jayraj Sawant",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/jayraj-sawant12/",
            "email": "mailto:jayraj.sawant@vit.edu.in",
            "position": "Publicity Co-ordinator"
        },
        {
            "name": "Diksha Varekar",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/diksha-varekar-5ba89031b/",
            "email": "mailto:diksha.varekar@vit.edu.in",
            "position": "Cultural Lead"
        },
        {
            "name": "Alisha Sawant",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/alisha-sawant-7a332732b/",
            "email": "mailto:alisha.sawant@vit.edu.in",
            "position": "Cultural Lead"
        },
        {
            "name": "Kirtana Singh",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/kirtanasingh/",
            "email": "mailto:kirtana.singh@vit.edu.in",
            "position": "Social Media Head"
        },
        {
            "name": "Tanisha Prajapati",
            "img": "",
            "linkedin": "",
            "email": "mailto:tanisha.prajapati@vit.edu.in",
            "position": "Social Media Lead"
        },
        {
            "name": "Vedant Mahalle",
            "img": "",
            "linkedin": "https://www.linkedin.com/in/vedant-mahalle-209086219/",
            "email": "mailto:vedant.mahalle@vit.edu.in",
            "position": "Social Media Co-ordinator"
        }
    ];

    // Group details by position
    const groupedByPosition = details.reduce((acc, item) => {
        (acc[item.position] = acc[item.position] || []).push(item);
        return acc;
    }, {});

    return (
        <div className="space-y-12 my-10">
            {Object.keys(groupedByPosition).map((position) => (
                <div key={position} className="p-4">
                    <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                        {position}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 m-2">
                        {groupedByPosition[position].map((item, index) => (
                            <div 
                                key={index} 
                                className="max-w-sm bg-gradient-card hover:bg-gradient-card-hover border border-blue-200 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 mt-2 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative">
                                    <div className="h-48 w-48 mx-auto rounded-full overflow-hidden bg-gradient-light p-1.5 shadow-inner-soft">
                                        <img
                                            src={item.img || defaultFallbackImg}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = defaultFallbackImg;
                                            }}
                                            alt={item.name}
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="p-3 text-center">
                                    <h3 className="text-xl font-semibold text-text">{item.name}</h3>
                                    <div className="flex justify-center mt-4 space-x-4">
                                        {item.linkedin && (
                                            <a
                                                href={item.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                                aria-label={`LinkedIn profile of ${item.name}`}
                                            >
                                                <div className="w-10 h-10 bg-gradient-button group-hover:bg-gradient-button-hover rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:animate-button-pop">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                        )}
                                        <a
                                            href={item.email}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                            aria-label={`Email ${item.name}`}
                                        >
                                            <div className="w-10 h-10 bg-gradient-accent group-hover:bg-gradient-button-hover rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:animate-button-pop">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewHeads;