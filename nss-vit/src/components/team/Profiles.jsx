import React from "react";

const Card = () => {
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
                "name": "Anushka More",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/anushkamore.jpg",
                "linkedin": "",
                "email": "mailto:anushka.more@vit.edu.in",
                "position": "In-Charge"
            },
            {
                "name": "Deepak Gavhane",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/deepakgavhane.jpg",
                "linkedin": "https://www.linkedin.com/in/deepakgavhane/",
                "email": "mailto:deepak.gavhane@vit.edu.in",
                "position": "In-Charge"
            },
            {
                "name": "Mannan Naidu",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/mannannaidu.jpg",
                "linkedin": "https://www.linkedin.com/in/mannan-naidu-336b4228b/",
                "email": "mailto:mannan.naidu@vit.edu.in",
                "position": "Documentation Lead"
            },
            {
                "name": "Adarsh Nambiar",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/adarshnambiar.jpg",
                "linkedin": "https://www.linkedin.com/in/adarshnambiar12/",
                "email": "mailto:adarsh.nambiar@vit.edu.in",
                "position": "Documentation Lead"
            },
            {
                "name": "Nisha Shetty",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/nishashetty.jpg",
                "linkedin": "https://www.linkedin.com/in/nishashetty2022/",
                "email": "mailto:nisha.shetty@vit.edu.in",
                "position": "Documentation Lead"
            },
            {
                "name": "Sahil Rasam",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/sahilrasam.jpg",
                "linkedin": "https://www.linkedin.com/in/sahil-rasam-997747257/",
                "email": "mailto:sahil.rasam@vit.edu.in",
                "position": "Creatives Lead"
            },
            {
                "name": "Pankaja Raut",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/pankajraut.jpg",
                "linkedin": "https://www.linkedin.com/in/pankaja-raut-883b7b256/",
                "email": "mailto:pankaja.raut@vit.edu.in",
                "position": "Creatives Lead"
            },
            {
                "name": "Dipesh Yadav",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/dipeshyadav.jpg",
                "linkedin": "https://www.linkedin.com/in/dipesh-yadav-98267a289/",
                "email": "mailto:dipesh.yadav@vit.edu.in",
                "position": "Events Lead"
            },
            {
                "name": "Akshay Jankar",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/akshayjankar.jpg",
                "linkedin": "https://www.linkedin.com/in/akshayrj/",
                "email": "mailto:akshay.jankar22@vit.edu.in",
                "position": "Events Lead"
            },
            {
                "name": "Anoushka Joshi",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/anoushkajoshi.jpg",
                "linkedin": "https://www.linkedin.com/in/anoushka-joshi-284190243/",
                "email": "mailto:anoushka.joshi@vit.edu.in",
                "position": "Publicity Lead"
            },
            {
                "name": "Kaushal Kolhe",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/kaushalkolhe.jpg",
                "linkedin": "https://www.linkedin.com/in/kaushal-kolhe-54b941223/",
                "email": "mailto:kaushal.kolhe@vit.edu.in",
                "position": "Publicity Lead"
            },
            {
                "name": "Samarth Mishra",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/samarthmishra.jpg",
                "linkedin": "https://www.linkedin.com/in/samarth-mishra-912bb6255/",
                "email": "mailto:samarth.mishra@vit.edu.in",
                "position": "Cultural Lead"
            },
            {
                "name": "Sanika Karpe",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/sanikakarpe.jpg",
                "linkedin": "https://www.linkedin.com/in/sanika-karpe-19856625a/",
                "email": "mailto:sanika.karpe@vit.edu.in",
                "position": "Cultural Lead"
            },
            {
                "name": "Sanika Korpe",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/sanikakorpe.jpg",
                "linkedin": "https://www.linkedin.com/in/sanika-korpe/",
                "email": "mailto:sanika.korpe@vit.edu.in",
                "position": "Social Media Lead"
            },
            {
                "name": "Pranjal Ghuge",
                "img": "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740560606/img/2024-2025/team/pranjalghuge.jpg",
                "linkedin": "https://www.linkedin.com/in/pranjal-ghuge-8854b1283/",
                "email": "mailto:pranjal.ghuge@vit.edu.in",
                "position": "Social Media Lead"
            }
        ]
        

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

export default Card;