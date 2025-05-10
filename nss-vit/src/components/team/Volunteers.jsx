import React, { useState } from 'react';

const Volunteers = () => {
    // State to track which accordion is open
    const [activeAccordion, setActiveAccordion] = useState(null);

    // Toggle accordion function
    const toggleAccordion = (index) => {
        setActiveAccordion((prevState) => (prevState === index ? null : index));
    };

    // Volunteers data
    const volunteerData = [
        {
            title: 'Second Year Volunteers',
            members: [
                "Adarsh Nambiar",
                "Aditi Attal",
                "Akshay Jankar",
                "Anoushka Joshi",
                "Anushka More",
                "Deepak Gavhane",
                "Deepak Prajapati",
                "Dipesh Yadav",
                "Gargi Badhe",
                "Kaushal Kolhe",
                "Mannan Naidu",
                "Nikhil Malankar",
                "Nisha Shetty",
                "Om Singh",
                "Omkar Kadam",
                "Pankaja Raut",
                "Piyush Kandu",
                "Piyush Mahimkar",
                "Pranav Kale",
                "Pranjal Ghuge",
                "Pratham Patil",
                "Sahil Rasam",
                "Samarth Mishra",
                "Sameer Shelar",
                "Sanika Karpe",
                "Sanika Korpe",
                "Shrutika Sonavale",
                "Siddharth Chavan",
            ],
        },
        {
            title: 'First Year Volunteers',
            members: [
                "Aayush Attal",
                "Aayush Hatkar",
                "Aditya Jalgaonkar",
                "Alisha Sawant",
                "Aniket Saw",
                "Atharva Shriramwar",
                "Ayush More",
                "Bhaveek Chhajed",
                "Chinmay Dhawan",
                "Deep Bhosale",
                "Devansh Soni",
                "Dhruv Patil",
                "Diksha Vishwanath",
                "Dilip Pal",
                "Divya Pragada",
                "Gargi Godse",
                "Ghanshyam Kumavat",
                "Grishma Sawant",
                "Harshal More",
                "Hrishikesh Dharmadhikari",
                "Jitesh Gaikwad",
                "Jyotsna Kasibhotla",
                "Kashish Chourasiya",
                "Kirtana Singh",
                "Krishna Malpure",
                "Krrish Wasan",
                "Krushna Patil",
                "Mandar Patil",
                "Mubina",
                "Nachammai Chettiar",
                "Nandini Yedelli",
                "Niranjana Chavan",
                "Om Khedkar",
                "Om Naphade",
                "Pooja Divekar",
                "Prapti Bhayde",
                "Rashi Manjrekar",
                "Rishi Phadale",
                "Riya Bhogan",
                "Rudrayani Adichwal",
                "Samiksha Chavan",
                "Samudra Jejurkar",
                "Sanika Bharne",
                "Saroj Kadnor",
                "Sarthak Chaudhari",
                "Sarthak Sawant",
                "Sejal Andhale",
                "Sheshank Singh",
                "Shreyas Shetty",
                "Shrikrushna Sonone",
                "Shrut Patil",
                "Shubham Ralkar",
                "Shubhanshu Bind",
                "Sneha Chavan",
                "Sneha Gadhari",
                "Soham Pawar",
                "Soham Sardesai",
                "Srishti Yadav",
                "Sudhir Gurudu",
                "Swayam Navle",
                "Swayam Sawant",
                "Tanay Kamble",
                "Tanisha Prajapati",
                "Tejasvi Jadhav",
                "Tushar Attarde",
                "Vaibhav Bedre",
                "Vaishnavi Patil",
                "Vedant Mahalle",
                "Vijay Hanumandla",
                "Vinay Shevale",
                "Vishwajeet Patil",
                "Yash Adhalrao",
                "Yash Pawar"
            ],
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                NSS 100 Unit
            </h2>
            <div className="m-5 space-y-4">
                {volunteerData.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl ${activeAccordion === index ? 'border-blue-300' : 'border-transparent'} bg-background shadow-soft animate-fade-in`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex justify-between items-center gap-x-3 py-4 px-8 font-semibold text-text hover:text-primary focus:outline-none rounded-lg transition-all duration-300 ${
                                activeAccordion === index ? 'bg-gradient-card-active' : 'bg-gradient-card'
                            }`}
                            aria-expanded={activeAccordion === index ? 'true' : 'false'}
                        >
                            <span className="text-lg">{item.title}</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`transition-transform duration-700 transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                                height="24px" 
                                viewBox="0 -960 960 960" 
                                width="24px" 
                                fill={activeAccordion === index ? "#4338CA" : "#1E1B4B"}
                            >
                                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-700 ease-out ${
                                activeAccordion === index ? 'opacity-100 scale-100 max-h-[2000px]' : 'opacity-0 scale-95 max-h-0'
                            }`}
                        >
                            <div className="px-8 py-6 bg-gradient-light">
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-5">
                                    {item.members.map((member, memberIndex) => (
                                        <li key={memberIndex} className="text-text">
                                            {member}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Volunteers;
